'use client'
import { useCallback, useMemo, useState } from 'react'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Pagination,
  SortDescriptor
} from '@nextui-org/react'

import { columns, renderCell } from './columns'
import { SearchIcon } from '@/components/Icons'
import { Champion } from '@/types'

export default function ChampionsTable({ champions, defaultSort, sortDirection }: { champions: Champion[], defaultSort: string, sortDirection: 'ascending'|'descending' }) {
  const [filterValue, setFilterValue] = useState('')
  const hasSearchFilter = Boolean(filterValue)

  const filteredItems = useMemo(() => {
    let filteredChampions = [...champions]

    if (hasSearchFilter) {
      filteredChampions = filteredChampions.filter(champion =>
        champion.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    }

    return filteredChampions
  }, [champions, filterValue, hasSearchFilter])

  const rowsPerPage = 8
  const [page, setPage] = useState(1)
  const pages = Math.ceil(filteredItems.length / rowsPerPage)

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: defaultSort,
    direction: sortDirection
  })

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a: Champion, b: Champion) => {
      const first = a[sortDescriptor.column as keyof Champion] as string
      const second = b[sortDescriptor.column as keyof Champion] as string
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, filteredItems])

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return sortedItems.slice(start, end)
  }, [page, sortedItems])

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value)
      setPage(1)
    } else {
      setFilterValue('')
    }
  }, [])

  const onClear = useCallback(() => {
    setFilterValue('')
    setPage(1)
  }, [])

  const topContent = useMemo(() => {
    return (
      <div className='flex flex-col gap-4'>
        <div className='flex items-end justify-between gap-3'>
          <Input
            isClearable
            className='w-full sm:max-w-[44%]'
            placeholder='Search by name...'
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
      </div>
    )
  }, [filterValue, onSearchChange, onClear])

  return (
    <Table
      aria-label='Champions Table'
      topContent={topContent}
      topContentPlacement='outside'
      bottomContent={
        <div className='flex w-full justify-center'>
          <Pagination
            isCompact
            showControls
            showShadow
            color='secondary'
            page={page}
            total={pages}
            onChange={page => setPage(page)}
          />
        </div>
      }
      bottomContentPlacement='outside'
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      classNames={{
        wrapper: 'min-h-[222px]'
      }}
    >
      <TableHeader columns={columns}>
        {column => (
          <TableColumn
            key={column.key}
            allowsSorting={column.allowSorting }
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items} emptyContent={'No champions to display.'}>
        {champion => (
          <TableRow key={champion.key}>
            {columnKey => <TableCell>{renderCell(champion, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
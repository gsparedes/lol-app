import React from 'react';
import {Select, SelectItem, Image} from '@nextui-org/react';
import { regions } from './regions';

type SelectProps = {
  setRegion: Function
}

export default function SelectRegion(props: SelectProps) {

  const { setRegion } = props;

  function handleSelectionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(event.target.value)
  }

  return (
    <Select
      isRequired
      label='Region'
      placeholder='Select a region'
      className='max-w-full'
      onChange={handleSelectionChange}
    >
      {regions.map((region) => (
        <SelectItem key={region.key} value={region.value} textValue={region.value}>
          <div className='flex gap-2 items-center'>
            <Image alt={region.value} width='24' height='24' src={region.flag} style={{borderRadius: 0}}/>
            <div className='flex flex-col'>
              <span className='text-small'>{region.value}</span>
            </div>
          </div>
        </SelectItem>
      ))}
    </Select>
  );
}

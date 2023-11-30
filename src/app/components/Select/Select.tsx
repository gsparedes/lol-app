import React from 'react';
import {Select, SelectItem} from '@nextui-org/react';
import { regions } from './regions';

type SelectProps = {
  setRegion: Function
}

export default function (props: SelectProps) {

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
        <SelectItem key={region.key} value={region.value}>
          {region.value}
        </SelectItem>
      ))}
    </Select>
  );
}

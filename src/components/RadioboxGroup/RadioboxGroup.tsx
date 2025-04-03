import './RadioboxGroup.css';

import { ChangeEvent, CSSProperties } from 'react';

import { Flex } from '../Flex';
import { Radiobox } from '../ui/Radiobox/Radiobox';

interface RadioGroupOptions {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface RadioGroupProps {
  title: string;
  name: string;
  options: RadioGroupOptions[];
  direction?: 'row' | 'column';
  style?: CSSProperties;
  className?: string;
}
export const RadioboxGroup = (
  {
    title,
    name,
    options,
    direction = 'column',
    className = '',
    style = {},
  }: RadioGroupProps) => {
  return (
    <div className={`radiobox-group ${className}`} style={style}>
      <h4>{title}</h4>
      <Flex direction={direction} gap="12px">
        {options.map(option => (
          <Radiobox key={option.value} label={option.label} name={name} value={option.value} onChange={option.onChange} />
        ))}
      </Flex>
    </div>
  );
};

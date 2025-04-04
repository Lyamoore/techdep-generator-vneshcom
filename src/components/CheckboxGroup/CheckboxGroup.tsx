import './CheckboxGroup.css';

import { ChangeEvent, CSSProperties } from 'react';

import { Flex } from '../Flex';

interface CheckboxGroupOptions {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface CheckboxGroupProps {
  title: string;
  name: string;
  options: CheckboxGroupOptions[];
  direction?: 'row' | 'column';
  style?: CSSProperties;
  className?: string;
}
export const CheckboxGroup = (
  {
    title,
    name,
    options,
    direction = 'column',
    className = '',
    style = {},
  }: CheckboxGroupProps) => {
  return (
    <div className={`checkbox-group ${className}`} style={style}>
      <h4>{title}</h4>
      <Flex direction={direction} gap="12px">
        {options.map(option => (
          // <Checkbox key={option.value} label={option.label} name={name} value={option.value} onChange={option.onChange} />
          // Заменить это на Checkbox, когда Checkbox будет готов
          <label key={option.value}>
            <input type="checkbox" name={name} value={option.value} onChange={option.onChange} />
            {option.label}
          </label>
        ))}
      </Flex>
    </div>
  );
};

import '../ui/Radiobox/Radiobox.css';
import './RadioboxGroup.css';

import { ChangeEvent, CSSProperties } from 'react';

import { Flex } from '../Flex';

interface RadioGroupOptions {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface RadioGroupProps {
  title: string;
  titleMarginBottom?: string;
  name: string;
  options: RadioGroupOptions[];
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  style?: CSSProperties;
  className?: string;
}
export const RadioboxGroup = (
  {
    title,
    titleMarginBottom = '10px',
    name,
    options,
    direction = 'column',
    justify = 'flex-start',
    align = 'flex-start',
    wrap = 'nowrap',
    gap = '10px',
    className = '',
    style = {},
  }: RadioGroupProps) => {
  return (
    <div className={`radiobox-group ${className}`} style={style}>
      <h4 style={{ marginBottom: titleMarginBottom }}>{title}</h4>
      <Flex direction={direction} justify={justify} align={align} wrap={wrap} gap={gap}>
        {options.map(option => (
          <label key={option.value} className="radibox-label">
            <input value={option.value} name={name} type="radio" />
            {option.label}
          </label>
        ))}
      </Flex>
    </div>
  );
};

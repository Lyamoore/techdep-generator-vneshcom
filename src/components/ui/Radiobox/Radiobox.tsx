import './Radiobox.css';

import { ComponentProps } from 'react';

interface RadioboxProps extends ComponentProps<'input'> {
  label: string;
}
export function Radiobox({ label, ...rest }: RadioboxProps) {
  return (
    <label className="radibox-label">
      <input type="radio" {...rest} />
      {label}
    </label>
  );
}

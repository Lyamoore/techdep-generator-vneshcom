import './ActionIcon.css';

import { ComponentProps, ReactNode } from 'react';

interface ActionIconProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant?: 'filled' | 'transparent';
  bg?: string;
  className?: string;
}
export const ActionIcon = ({ children, className = '', variant = 'transparent', bg = '', ...rest }: ActionIconProps) => {
  return (
    // говорит, что нельзя динамически определять тип кнопки
    // если решения не найдется, офаем правило от греха подальше)
    <button
      className={`button-action-icon ${className}`}
      // eslint-disable-next-line react/button-has-type
      type={rest.type ?? 'button'}
      style={{ backgroundColor: variant === 'filled' ? bg : '' }}
      {...rest}
    >
      {children}
    </button>
  );
};

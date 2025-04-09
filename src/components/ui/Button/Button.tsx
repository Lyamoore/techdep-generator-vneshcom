import './Button.css';

import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'main' | 'secondary';
  size?: 'full' | 'small';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button = ({ variant = 'secondary', size = 'full', children, disabled, type = 'button' }: IButton) => {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

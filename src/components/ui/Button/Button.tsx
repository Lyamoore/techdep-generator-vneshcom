import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'main' | 'secondary';
  size?: 'full' | 'small';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button = ({ variant = 'secondary', size = 'full', children, disabled, type = 'button' }: IButton) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]}`}
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'main' | 'secondary';
  size?: 'full' | 'small';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button = ({ variant = 'secondary', size = 'full', children, disabled, type = 'button' }: IButton) => {
  const buttonClasses = [styles.button, styles[`button--${variant}`], styles[`button--${size}`]].join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} type={type === 'submit' ? 'submit' : 'button'}>
      {children}
    </button>
  );
};

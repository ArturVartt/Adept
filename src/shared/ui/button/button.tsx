import { ButtonHTMLAttributes, FC } from 'react';
import './button.css';

export enum ThemeButton {
  DELETE = 'delete',
  ADD = 'add',
}

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ThemeButton;
  disabled?: boolean 
}

const Button: FC<buttonProps> = props => {
  const { className, children, theme, disabled, ...otherProps } = props;

  return (
    <button disabled={disabled} className={`${className} ${theme}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

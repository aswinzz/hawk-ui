import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: "primary" | "secondary" | "destructive";
  disabled?: boolean;
  theme?: "dark" | "light";
  customClassName?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, fullWidth, type, disabled, theme, customClassName, ...remainingProps }) => {
  const { theme: systemTheme } = useTheme();

  return (
    <button
        {...remainingProps}
        className={
            `${styles.button} 
            ${styles[type]} 
            ${disabled ? styles.disabled : ''} 
            ${styles[theme || systemTheme]} 
            ${fullWidth ? styles.fullWidth : ''}
            ${customClassName || ''}`
        }
        disabled={disabled}
    >
            {children}
    </button>
  );
};

export default Button;
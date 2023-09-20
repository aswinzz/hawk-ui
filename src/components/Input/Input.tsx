import React, { useEffect, useState, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Input.module.scss';
import Icon from '../Icon';

interface InputProps {
  type: 'text' | 'password';
  theme?: "dark" | "light";
  customClassName?: string;
  iconName?: string;
  placeholder?: string;
  status?: 'success' | 'failure';
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ status, disabled, placeholder, type, theme, customClassName }) => {
  const { theme: systemTheme } = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onShowPasswordToggle = useCallback(() => {
    setShowPassword((value) => !value);
  }, []);

  return (
    <div className={styles.wrapper}>
        <input
            disabled={disabled}
            type={showPassword ? 'text' : type}
            placeholder={placeholder}
            className={
                `${styles.input} 
                ${styles[theme || systemTheme]} 
                ${status ? styles[status] : ''} 
                ${customClassName || ''}
                ${disabled ? styles.disabled : ''}`
            }
        />
        {type === 'password' ? <Icon onClick={onShowPasswordToggle} customClassName={styles.icon} name={showPassword ? 'eye-off' : 'eye'} theme={theme || systemTheme} /> : null}
        {type !== 'password' && status ? <Icon customClassName={styles.icon} name={status === 'success' ? 'circle-check' : 'alert-circle'} theme={theme || systemTheme} /> : null}
    </div>
  );
};

export default Input;

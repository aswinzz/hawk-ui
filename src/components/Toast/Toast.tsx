import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Icon from '../Icon';
import styles from './Toast.module.scss';

interface ToastProps {
  title: string;
  type: "success" | "error" | "information" | "neutral";
  message?: string;
  theme?: "dark" | "light";
  customClassName?: string;
  actionText?: string;
  onActionClick?: () => void;
  iconName?: string;
  customIconTheme?: "dark" | "light";
}

const Toast: React.FC<ToastProps> = ({ title, theme, message, type, actionText, onActionClick, iconName, customIconTheme, customClassName }) => {
  const { theme: systemTheme } = useTheme();

  return (
    <div
        className={
            `${styles.toast} 
            ${styles[type]} 
            ${styles[theme || systemTheme]} 
            ${customClassName || ''}`
        }
    >
        <div className={styles.left}>
            {iconName && <Icon customClassName={styles.icon} name={iconName} theme={customIconTheme || theme || systemTheme} />}
            <div className={styles.text}>
                {title && <h3 className={styles.title}>{title}</h3>}
                <p className={styles.message}>{message}</p>
            </div>
        </div>
        {actionText && (
        <div className={styles.actionButton} onClick={onActionClick}>
            {actionText}
        </div>
        )}
    </div>
  );
};

export default Toast;

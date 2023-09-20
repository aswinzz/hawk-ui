import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Tab.module.scss';
import Icon from '../Icon';

interface TabProps {
  name: string;
  theme?: "dark" | "light";
  customClassName?: string;
  iconName?: string;
  count?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ name, theme, isSelected, customClassName, iconName, count, onClick, }) => {
  const { theme: systemTheme } = useTheme();

  return (
    <div
        className={
            `${styles.tab} 
            ${styles[theme || systemTheme]} 
            ${isSelected ? styles.selected: ''}
            ${customClassName || ''}`
        }
    >
        {iconName ? <Icon customClassName={styles.icon} name={iconName} theme={theme || systemTheme} /> : null}
        <span className={styles.name}>{name}</span>
        {count ? <div className={`${styles.count} ${styles[theme || systemTheme]}`}>{count}</div> : null}
    </div>
  );
};

export default Tab;

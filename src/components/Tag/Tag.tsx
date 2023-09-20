import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Tag.module.scss';
import Icon from '../Icon';

interface TagProps {
  name: string;
  theme?: "dark" | "light";
  customClassName?: string;
  iconName?: string;
  closable?: boolean;
  onClose?: () => void;
}

const Tag: React.FC<TagProps> = ({ name, theme, customClassName, iconName, closable, onClose, }) => {
  const { theme: systemTheme } = useTheme();

  const iconProps = closable && onClose ? { onClick: onClose } : {};

  return (
    <div
        className={
            `${styles.tag} 
            ${styles[theme || systemTheme]} 
            ${customClassName || ''}`
        }
    >
        {iconName ? <Icon customClassName={styles.icon} name={iconName} theme={theme || systemTheme} /> : null}
        <span className={styles.name}>{name}</span>
        {closable ? <Icon customClassName={styles.icon} name='cross' theme={theme || systemTheme} {...iconProps} /> : null}
    </div>
  );
};

export default Tag;

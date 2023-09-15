import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Chip.module.scss';

interface ChipProps {
  name: string;
  theme?: "dark" | "light";
  customClassName?: string;
}

const Chip: React.FC<ChipProps> = ({ name, theme, customClassName, ...remainingProps }) => {
  const { theme: systemTheme } = useTheme();

  return (
    <div
        className={
            `${styles.chip} 
            ${styles[theme || systemTheme]} 
            ${customClassName || ''}`
        }
        {...remainingProps}
    >
        {name}
    </div>
  );
};

export default Chip;

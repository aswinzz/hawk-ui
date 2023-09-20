import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Icon.module.scss';

interface IconProps {
  name: string;
  theme?: "dark" | "light";
  customClassName?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, theme, customClassName, ...remainingProps }) => {
  const { theme: systemTheme } = useTheme();

  let svgPath;

  try {
    svgPath = require(`../../images/icons/${name}-${theme || systemTheme}.svg`);
  } catch (error) {
    console.log(error);
  }

  if (!svgPath) {
    return <></>;
  }

  return (
    <img
        className={
            `${styles.icon} 
            ${styles[theme || systemTheme]} 
            ${customClassName || ''}`
        }
        {...remainingProps}
        src={svgPath}
        alt={name}
    />
  );
};

export default Icon;

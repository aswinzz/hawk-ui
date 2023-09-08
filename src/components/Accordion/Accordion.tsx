import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import UpArrowDark from '../../images/svg/up-arrow-dark.svg';
import UpArrowLight from '../../images/svg/up-arrow-light.svg';
import DownArrowDark from '../../images/svg/down-arrow-dark.svg';
import DownArrowLight from '../../images/svg/down-arrow-light.svg';

import styles from './Accordion.module.scss';

interface AccordionProps {
  children: React.ReactNode;
  title: React.ReactNode;
  // to be implemented
  disabled?: boolean;
  theme?: "dark" | "light";
  customClassName?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, isOpen, children, onToggle, disabled, theme, customClassName, ...remainingProps }) => {
  const { theme: systemTheme } = useTheme();

  let arrowImg = DownArrowLight;

  if (isOpen) {
    arrowImg = theme === 'dark' ? UpArrowDark : UpArrowLight;
  } else if (theme === 'dark') {
    arrowImg = DownArrowDark;
  }

  return (
    <div
        {...remainingProps}
        className={
            `${styles.accordion} 
            ${disabled ? styles.disabled : ''} 
            ${styles[theme || systemTheme]} 
            ${customClassName || ''}`
        }
        onClick={onToggle}
    >
        <div className={styles.titleContainer}>
            <div className={styles.title}>{title}</div>
            <img className={styles.arrow} src={arrowImg} alt="arrow" />
        </div>

        {isOpen && <div className={styles.content}>
            <div className={`${styles.hr} ${styles[theme || systemTheme]}`}/>
            <div className={styles.children}>{children}</div>
        </div>}
    </div>
  );
};

export default Accordion;
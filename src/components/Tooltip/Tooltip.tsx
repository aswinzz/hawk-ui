import React, { useCallback, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Tooltip.module.scss';

interface Ordering {
    title?: number;
    content?: number;
    media?: number;
}

interface TooltipProps {
  theme?: "dark" | "light";
  customClassName?: string;
  children: React.ReactNode;
  title?: string;
  content?: string;
  button?: React.ReactNode;
  tag?: React.ReactNode;
  media?: React.ReactNode;
  customOrdering?: Ordering;
  position?: 'up' | 'down' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ title, theme, customOrdering, customClassName, children, media, content, position = 'up', ...remainingProps }) => {
  const { theme: systemTheme } = useTheme();

  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const renderTooltipContent = useCallback(() => {
    return (
        <React.Fragment>
            {media ? <div style={{order: customOrdering?.media || 1 }} className={styles.media}>{media}</div> : null}
            {title ? <div style={{order: customOrdering?.title || 2 }} className={styles.title}>{title}</div> : null}
            {content ? <div style={{order: customOrdering?.content || 3 }} className={styles.content}>{content}</div> : null}
        </React.Fragment>
    );
  }, []);

  return (
    <div className={styles.wrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
        {isTooltipVisible ? <div
            className={
                `${styles.tooltip} 
                ${styles[theme || systemTheme]} 
                ${customClassName || ''}
                ${styles[position]}`
            }
            {...remainingProps}
        >
            {renderTooltipContent()}
        </div>:null}
    </div>
  );
};

export default Tooltip;

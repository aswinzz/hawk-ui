import React, { useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Card.module.scss';

interface Ordering {
    tag?: number;
    title?: number;
    content?: number;
    button?: number;
    media?: number;
}

interface CardProps {
  theme?: "dark" | "light";
  customClassName?: string;
  type: "horizontal" | "vertical";
  children?: React.ReactNode;
  title?: string;
  content?: string;
  button?: React.ReactNode;
  tag?: React.ReactNode;
  media?: React.ReactNode;
  customOrdering?: Ordering;
}

const Card: React.FC<CardProps> = ({ title, theme, customOrdering, tag, customClassName, children, media, content, button, ...remainingProps }) => {
  const { theme: systemTheme } = useTheme();

  const renderCardContent = useCallback(() => {
    return (
        <React.Fragment>
            {tag ? <div style={{order: customOrdering?.tag || 1 }} className={styles.tag}>{tag}</div> : null}
            {title ? <div style={{order: customOrdering?.title || 2 }} className={styles.title}>{title}</div> : null}
            {content ? <div style={{order: customOrdering?.content || 3 }} className={styles.content}>{content}</div> : null}
            {button ? <div style={{order: customOrdering?.button || 4 }} className={styles.button}>{button}</div> : null}
            {media ? <div style={{order: customOrdering?.media || 5 }} className={styles.media}>{media}</div> : null}
        </React.Fragment>
    );
  }, []);

  return (
    <div
        className={
            `${styles.card} 
            ${styles[theme || systemTheme]} 
            ${customClassName || ''}`
        }
        {...remainingProps}
    >
        {children ? children : renderCardContent()}
    </div>
  );
};

export default Card;

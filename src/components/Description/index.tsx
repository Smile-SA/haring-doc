import type { ReactElement, ReactNode } from 'react';

import styles from './styles.module.css';

interface IDescriptionProps {
  children: ReactNode;
}

/**
 * Displays text as a page description
 *
 * @prop children The HTML content to display
 */
export default function Description(props: IDescriptionProps): ReactElement {
  const { children } = props;
  return <div className={styles.description}>{children}</div>;
}

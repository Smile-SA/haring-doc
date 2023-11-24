import type { ReactNode } from 'react';

import CodeBlock from '@theme/CodeBlock';

import { GitHubLogo } from '@site/src/icons/GitHubLogo';

import styles from './styles.module.css';

interface IDescriptionProps {
  children: ReactNode;
  importExample: string;
  sourceLink: string;
}

/**
 * Displays text as a page description
 *
 * @prop children The HTML content to display
 */
export default function Description(props: IDescriptionProps): ReactNode {
  const { children, importExample, sourceLink } = props;
  return (
    <div className={styles.descriptionContainer}>
      <span className={styles.description}>{children}</span>
      <ul>
        <li>
          <span>Import</span>
          <CodeBlock className={styles.codeBlock} language="tsx">
            {importExample}
          </CodeBlock>
        </li>
        <li>
          <span>Source</span>
          <a href={sourceLink} rel="noreferrer" target="_blank">
            <GitHubLogo /> View Source Code
          </a>
        </li>
      </ul>
    </div>
  );
}

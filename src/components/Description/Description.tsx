import type { ReactElement, ReactNode } from 'react';

import CodeBlock from '@theme/CodeBlock';

import { GitHubLogo } from '@site/src/icons/GitHubLogo';
import { MantineLogo } from '@site/src/icons/MantineLogo';
import { NpmLogo } from '@site/src/icons/NpmLogo';

import styles from './styles.module.css';

interface IDescriptionProps {
  children: ReactNode;
  extendsLinks?: string[];
  extendsLogos?: ReactElement[];
  extendsTexts?: string[];
  importExample: string;
  packageLink: string;
  packageLogo?: ReactElement;
  packageText: string;
  sourceLink: string;
  sourceLogo?: ReactElement;
}

/**
 * Displays text as a page description
 *
 * @prop children The HTML content to display
 */
export default function Description(props: IDescriptionProps): ReactNode {
  const {
    children,
    extendsLinks,
    extendsLogos = [<MantineLogo key={0} />],
    extendsTexts,
    importExample,
    packageLink,
    packageLogo = <NpmLogo />,
    packageText,
    sourceLink,
    sourceLogo = <GitHubLogo />,
  } = props;
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
        {extendsTexts && extendsLinks ? (
          <li>
            <span>Extends</span>
            {extendsLinks.map((link, i) => (
              <a key={i} href={link} rel="noreferrer" target="_blank">
                {extendsLogos[i] ?? extendsLogos[0]} {extendsTexts[i]}
              </a>
            ))}
          </li>
        ) : null}
        <li>
          <span>Source</span>
          <a href={sourceLink} rel="noreferrer" target="_blank">
            {sourceLogo} View Source Code
          </a>
        </li>
        <li>
          <span>Package</span>
          <a href={packageLink} rel="noreferrer" target="_blank">
            {packageLogo} {packageText}
          </a>
        </li>
      </ul>
    </div>
  );
}

import type { ReactElement, ReactNode } from 'react';

import CodeBlock from '@theme/CodeBlock';

import { GitHubLogo } from '@site/src/icons/GitHubLogo';
import { MantineLogo } from '@site/src/icons/MantineLogo';
import { NpmLogo } from '@site/src/icons/NpmLogo';
import { StorybookLogo } from '@site/src/icons/StorybookLogo';

import styles from './styles.module.css';

interface IDescriptionExtends {
  label: string;
  link: string;
  logo?: ReactNode;
}

interface IDescriptionPackage {
  label: string;
  link: string;
  logo?: ReactElement;
}

interface IDescriptionSource {
  link: string;
  logo?: ReactElement;
}

export interface IDescriptionProps {
  children: ReactNode;
  extendsInfo: IDescriptionExtends[];
  importExample: string;
  packageInfo: IDescriptionPackage;
  sourceInfo: IDescriptionSource;
  storybookInfo?: string;
}

/**
 * Displays text as a page description
 *
 * @prop children The HTML content to display
 */
export default function Description(props: IDescriptionProps): ReactNode {
  const {
    children,
    extendsInfo = [],
    importExample,
    packageInfo,
    sourceInfo,
    storybookInfo,
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
        {extendsInfo.length > 0 ? (
          <li>
            <span>Extends</span>
            {extendsInfo.map(({ label, link, logo }, i) => (
              <a key={i + label} href={link} rel="noreferrer" target="_blank">
                {logo ?? <MantineLogo />} {label}
              </a>
            ))}
          </li>
        ) : null}
        <li>
          <span>Source</span>
          <a href={sourceInfo.link} rel="noreferrer" target="_blank">
            {sourceInfo.logo ?? <GitHubLogo />} View Source Code
          </a>
        </li>
        <li>
          <span>Package</span>
          <a href={packageInfo.link} rel="noreferrer" target="_blank">
            {packageInfo.logo ?? <NpmLogo />} {packageInfo.label}
          </a>
        </li>
        {Boolean(storybookInfo) && (
          <li>
            <span>Storybook</span>
            <a
              href={`https://smile-sa.github.io/react-front-kit/?path=/docs/${storybookInfo}`}
              rel="noreferrer"
              target="_blank"
            >
              <StorybookLogo style={{ width: 16 }} /> Storybook
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

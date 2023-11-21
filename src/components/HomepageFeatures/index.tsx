import type { ComponentProps, ComponentType, ReactElement } from 'react';

import Heading from '@theme/Heading';

import MountainSvg from '@site/static/img/undraw_docusaurus_mountain.svg';
import ReactSvg from '@site/static/img/undraw_docusaurus_react.svg';
import TreeSvg from '@site/static/img/undraw_docusaurus_tree.svg';

import styles from './styles.module.css';

interface IFeatureItem {
  Svg: ComponentType<ComponentProps<'svg'>>;
  description: JSX.Element;
  title: string;
}

const FeatureList: IFeatureItem[] = [
  {
    Svg: MountainSvg,
    description: (
      <>
        React Front Kit Connectors is easy to use and can integrate with any
        data fetching library you want.
      </>
    ),
    title: 'Easy and Flexible',
  },
  {
    Svg: TreeSvg,
    description: (
      <>
        React Front Kit Connectors lets you focus on your own business logic by
        managing all basic frontend logic for you.
      </>
    ),
    title: 'Focus on What Matters',
  },
  {
    Svg: ReactSvg,
    description: (
      <>
        Use dedicated components, hooks and functions or fallback to lower level
        APIs when they don&apos;t meet your needs.
      </>
    ),
    title: 'Powered by React',
  },
];

function Feature({ title, Svg, description }: IFeatureItem): ReactElement {
  return (
    <div className="col col--4">
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

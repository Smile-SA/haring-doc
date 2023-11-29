import type { IframeHTMLAttributes, ReactNode } from 'react';

const frameStyle = {
  '& > *': { padding: 0 },
  border: '1px solid #aaa',
};
const srcBasePath = 'https://smile-sa.github.io/react-front-kit/iframe.html';

interface IExampleProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  storyId: string;
}

/**
 * Embeds a Storybook example
 *
 * @prop storyId The story ID in the URL to navigate to
 */
export default function StorybookEmbed(props: IExampleProps): ReactNode {
  const { storyId, ...iframeProps } = props;
  return (
    // eslint-disable-next-line react/iframe-missing-sandbox
    <iframe
      height="1000"
      src={`${srcBasePath}?id=${storyId}`}
      style={frameStyle}
      title="Storybook Example"
      width="100%"
      {...iframeProps}
    />
  );
}

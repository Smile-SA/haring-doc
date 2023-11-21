import type { ComponentProps, ComponentType } from 'react';

declare module '*.svg' {
  const value: ComponentType<ComponentProps<'svg'>>;
  export default value;
}

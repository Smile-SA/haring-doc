# Icons

## `@phosphor-icons/react`

`@smile/haring-react` depends on `@phosphor-icons/react` for the icons.

You will need to install it as it required as a peer dependency.

Some components can take icons for some props. Example:

```jsx
<SummaryBox
  rightNode={
    <ActionIcon color="cyan" size={30} variant="subtle">
      <DownloadSimple size={24} />
    </ActionIcon>
  }
  titleNode={<strong>Ma carte de tiers payant</strong>}
/>
```

In that case you can import `DownloadSimple` from `@phosphor-icons/react` or you are free to use another icon of your choice.

Here is the list of available icons in `@phosphor-icons/react`:

<StorybookEmbed storyId="1-styleguide-icons--phosphor-icons" height="500" />

## `@tabler/icons-react`

`@smile/haring-react-table` depends on `mantine-react-table` that depends on the `@tabler/icons-react` icon library.

You will need to install `@tabler/icons-react` if you use components from `@smile/haring-react-table` but you can also customize the icons used by passing any icon you want in the props.

## `@smile/haring-react-shared`

the `@smile/haring-react-shared` expose some icons you can also import and use as you wish.

you can import then with:

```tsx
import { ColumnPlus } from '@smile/haring-react-shared';
```

Here is the list of available icons in `@smile/haring-react-shared`:

<StorybookEmbed storyId="1-styleguide-icons--custom-icons" height="200" />

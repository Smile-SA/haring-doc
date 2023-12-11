# Action Types

## `IAction<T>`

`T` is of any type

| Attribute         | Type                                                              | Description                                                                                                                       |
| ----------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| id <Required/>    | `number \| string`                                                | ID of action                                                                                                                      |
| label <Required/> | `string \| (item: T) => string`                                   | Label of action button                                                                                                            |
| icon              | `ReactNode \| (item: T) => ReactNode`                             | Icon of action button                                                                                                             |
| color             | `string`                                                          | Color of action button                                                                                                            |
| confirmation      | `boolean`                                                         | The action will open a [`ConfirmModal`](../components/confirm-modal) for confirmation or cancellation                             |
| isItemAction      | `boolean`                                                         | The action is an item action, for a single data object                                                                            |
| isMassAction      | `boolean`                                                         | The action is a mass action, for many data objects                                                                                |
| onAction          | `(item: T \| T[]) => void`                                        | Called when the action button is clicked, or when the `confirmation` modal is confirmed                                           |
| componentProps    | `Record<string, unknown> \| (item: T) => Record<string, unknown>` | Extra props for the [`ActionIcon`](https://v6.mantine.dev/core/action-icon/) element, only used in [`Table`](../components/table) |
| confirmModalProps | [`IActionConfirmModalProps<T>`](#iactionconfirmmodalpropst)       | Extra props for the [`ConfirmModal`](../components/confirm-modal) component opened on `confirmation`                              |

## `IActionConfirmModalProps<T>`

`T` is of any type

| Attribute | Type                         | Description                                                                                                                 |
| --------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| onCancel  | `(item: T) => false \| void` | Called when `confirmation` is modal is canceled                                                                             |
| onClose   | `() => void`                 | Called when `confirmation` is modal is closed                                                                               |
| onConfirm | `(item: T) => false \| void` | Called when `confirmation` is modal is confirmed                                                                            |
| ...       | -                            | Extends [`IConfirmModalProps`](../components/confirm-modal#props), omitting `onCancel`, `onClose`, `onConfirm` and `opened` |

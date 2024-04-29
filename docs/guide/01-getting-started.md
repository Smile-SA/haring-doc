# Getting started

## Introduction

Haring is a component library based on [Mantine](https://mantine.dev/) that helps you build frontend quickly.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.0 or above
- A [React](https://react.dev/) project version 18.0 or above.

Also check the getting started page of [Mantine](https://mantine.dev/getting-started/).

## Installation

### `@smile/haring-react`

Install `@smile/haring-react` on your React based project with:

```bash
npm i @smile/haring-react @mantine/core @mantine/hooks @phosphor-icons/react
```

Then wrap your application with [the Provider](./theme#custom-provider).

And import the styles:

```js
import '@mantine/core/styles.css';
import '@smile/haring-react-shared/style.css';
import '@smile/haring-react/style.css';
```

### `@smile/haring-react-dates`

If you need date related components you can install `@smile/haring-react-dates`.

You must install `@smile/haring-react` first and then add `@smile/haring-react-dates` with:

```bash
npm i @smile/haring-react-dates @mantine/dates
```

And import the styles:

```js
import '@mantine/dates/styles.css';
import '@smile/haring-react-dates/style.css';
```

### `@smile/haring-react-dropzone`

If you need dropzone related components you can install `@smile/haring-react-dropzone`.

You must install `@smile/haring-react` first and then add `@smile/haring-react-dropzone` with:

```bash
npm i @smile/haring-react-dropzone @mantine/dropzone
```

And import the styles:

```js
import '@mantine/dropzone/styles.css';
import '@smile/haring-react-dropzone/style.css';
```

### `@smile/haring-react-table`

If you need table related components you can install `@smile/haring-react-table`.

You must install `@smile/haring-react` first and then add `@smile/haring-react-table` with:

```bash
npm i @smile/haring-react-table @mantine/dates dayjs mantine-react-table@beta @tabler/icons-react
```

And import the styles:

```js
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';
import '@smile/haring-react-table/style.css';
```

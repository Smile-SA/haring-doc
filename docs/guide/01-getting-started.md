# Getting started

## Introduction

React Front Kit is a component library based on [Mantine](https://mantine.dev/) that helps you build frontend quickly.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.0 or above
- A [React](https://react.dev/) project version 18.0 or above.

Also check the getting started page of [Mantine](https://mantine.dev/getting-started/).

## Installation

### `@smile/react-front-kit`

Install `@smile/react-front-kit` on your React based project with:

```bash
npm i @smile/react-front-kit @mantine/core @mantine/hooks @phosphor-icons/react
```

Then wrap your application with [the Provider](./theme#custom-provider).

And import the styles:

```js
import '@mantine/core/styles.css';
import '@smile/react-front-kit-shared/style.css';
import '@smile/react-front-kit/style.css';
```

### `@smile/react-front-kit-dates`

If you need date related components you can install `@smile/react-front-kit-dates`.

You must install `@smile/react-front-kit` first and then add `@smile/react-front-kit-dates` with:

```bash
npm i @smile/react-front-kit-dates @mantine/dates
```

And import the styles:

```js
import '@mantine/dates/styles.css';
import '@smile/react-front-kit-dates/style.css';
```

### `@smile/react-front-kit-dropzone`

If you need dropzone related components you can install `@smile/react-front-kit-dropzone`.

You must install `@smile/react-front-kit` first and then add `@smile/react-front-kit-dropzone` with:

```bash
npm i @smile/react-front-kit-dropzone @mantine/dropzone
```

And import the styles:

```js
import '@mantine/dropzone/styles.css';
import '@smile/react-front-kit-dropzone/style.css';
```

### `@smile/react-front-kit-table`

If you need table related components you can install `@smile/react-front-kit-table`.

You must install `@smile/react-front-kit` first and then add `@smile/react-front-kit-table` with:

```bash
npm i @smile/react-front-kit-table @mantine/dates dayjs mantine-react-table@beta @tabler/icons-react
```

And import the styles:

```js
import '@mantine/dates/styles.css';
import 'mantine-react-table/styles.css';
import '@smile/react-front-kit-table/style.css';
```

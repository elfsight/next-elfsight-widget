# next-elfsight-widget

[![npm](https://img.shields.io/npm/dm/next-elfsight-widget)](https://www.npmjs.com/package/next-elfsight-widget)

Wrapper over [react-elfsight-widget](https://www.npmjs.com/package/react-elfsight-widget) that adds [Elfsight](https://elfsight.com/) Widget to a NextJS App t dynamic.

This package _DOES NOT_ contain any Elfsight Widgets itself.

## Installation

```
npm install next-elfsight-widget
```

## Usage

```tsx
import React from 'react';
import { ElfsightWidget } from 'next-elfsight-widget';

function Component() {
  return <ElfsightWidget widgetID="6f4fc62b-74c9-45da-87fa-b71eda360cc0" />;
}
```

_NOTE: There is no need to manually add Elfsight's `platform.js` script to a page, the component will do it for you.
But if you already have it on the page, it's okay, the script won't be added twice._

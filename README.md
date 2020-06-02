# SAMI Intro to UI at LLamasoft

## Prerequisites

### Install Node.js and NPM

[Download](https://nodejs.org/en/download/)

### Install Visual Studio Code

You are more than welcome to use whatever IDE or text editor that you want. The examples in this course will be using VS Code, which I highly recommend.

[Download](https://code.visualstudio.com/download)

### Install React Developer Tools browser extension(s)

Available for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Firefox]( https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Getting Started

### Create a basic React app using Create React App

```none
> npx create-react-app llama-ui --use-npm
```

### Open the app in VS Code

```none
> code llama-ui
```

### Run the initial project

```none
> npm start
```

## React Basics

### JSX Syntax

[React Docs](https://reactjs.org/docs/introducing-jsx.html)

#### Plain HTML

```html
<html>
  <head>
    <title>LLama UI</title>
  </head>
  <body>
    <h1>Hello LLamas!</h1>
  </body>
</html>
```

JSX

```js
import React from 'react';

const Header = () => (
  <h1>Hello LLamas!</h1>
);
```

```jsx
<html>
  <head>LLama UI</head>
  <body>
    <Header />
  </body>
</html>
```

### Component Props

```js
import React from 'react';

const Header = props => (
  <h1>Hello {props.user}!</h1>
);
```

```jsx
<html>
  <head>LLama UI</head>
  <body>
    <Header user={'SAMI'} />
  </body>
</html>
```

### Prop Types

[React Docs](https://reactjs.org/docs/typechecking-with-proptypes.html)

#### Header.js

```js
import React from 'react';
import { string } from 'prop-types';

const Header = props => (
  <h1>Hello {props.user}!</h1>
);

Header.propTypes = {
  user: string.isRequired
};
```

### Object Destructuring

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```jsx
import React from 'react';
import { string } from 'prop-types';

const Header = ({ user }) => (
  <h1>Hello {user}!</h1>
);

Header.propTypes = {
  user: string.isRequired
};
```

### Component State

```jsx
import React, { useState } from 'react';
import { string } from 'prop-types';

const Header = ({ user }) => {
  const [count, setCount] = useState(0);

  return (
    <h1>Hello {user}!</h1>
    <p>I've said hello {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Say Hello
    </button>
  );
};

Header.propTypes = {
  user: string.isRequired
};
```

### Application State

### Using LLamasoft Components

[Component Library Demo Site](http://ui.dev.supplychainsoft.com/)

[Component Library Repository](https://github.llamasoft.com/dev/web-ui-components)

## Other Resources

### LinkedIn Learning

[Learning React.js](https://www.linkedin.com/learning/learning-react-js-5)

### Pluralsight

[React: The Big Picture](https://app.pluralsight.com/library/courses/react-big-picture)

[Building Application with React and Redux](https://app.pluralsight.com/library/courses/react-redux-react-router-es6)

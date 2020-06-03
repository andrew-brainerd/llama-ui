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
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

const Heading = () => (
  <h1>Hello LLamas!</h1>
);
```

```jsx
<Heading />
```

### Component Props

```js
import React from 'react';

const Heading = props => (
  <h1>Hello {props.user}!</h1>
);
```

```jsx
<Heading user={'SAMI'} />
```

### Prop Types

[React Docs](https://reactjs.org/docs/typechecking-with-proptypes.html)

```js
import React from 'react';
import { string } from 'prop-types';

const Heading = props => (
  <h1>Hello {props.user}!</h1>
);

Heading.propTypes = {
  user: string.isRequired
};
```

### Object Destructuring

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```jsx
import React from 'react';
import { string } from 'prop-types';

const Heading = ({ user }) => (
  <h1>Hello {user}!</h1>
);

Heading.propTypes = {
  user: string.isRequired
};
```

### Component State

[useState Docs](https://reactjs.org/docs/hooks-state.html)

```jsx
import React, { useState } from 'react';
import { string } from 'prop-types';

const Heading = ({ user }) => {
  const [count, setCount] = useState(0);

  return (
    <h1>Hello {user}!</h1>
    <p>I've said hello {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Say Hello
    </button>
  );
};

Heading.propTypes = {
  user: string.isRequired
};
```

### Application State

Actions

```js
export const incrementCounter = { type: 'INCREMENT_COUNTER' };
export const decrementCounter = { type: 'DECREMENT_COUNTER' };
```

Reducers

```js
'INCREMENT_COUNTER': () => ({
  ...state,
  counter: state.counter + 1
}),
'DECREMENT_COUNTER': () => ({
  ...state,
  counter: state.counter - 1
}),
```
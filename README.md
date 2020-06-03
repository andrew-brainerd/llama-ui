# Intro to UI at LLamasoft

[React Basics](./REACT.md)

## Prerequisites

### Install Node.js and NPM

[Download](https://nodejs.org/en/download/)

### Install Visual Studio Code

You are more than welcome to use whatever IDE or text editor that you want. The examples in this course will be using VS Code, which I highly recommend.

[Download](https://code.visualstudio.com/download)

### Install React Developer Tools browser extension(s)

Available for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Firefox]( https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Getting Started

### Open the app in VS Code

```none
> cd /c/projects/llama-ui
> code .
```

### Install project dependencies

```none
> npm install
```

### Run the project

```none
> npm start
```

### Using LLamasoft Components

[Component Library Demo Site](http://ui.dev.supplychainsoft.com/)

[Component Library Repository](https://github.llamasoft.com/dev/web-ui-components)

#### Add Artifactory Package Source

```none
> npm config set @llamasoft:registry http://artifactory.llamadev.local:8081/artifactory/api/npm/npm-local/
```

### Install the Styles Package

```none
> npm install --save @llamasoft/styles
```

### Install the UI Button Package

```none
> npm install --save @llamasoft/ui-button
```

### Import the component style bundle

```js
import '@llamasoft/ui-button/bundle/bundle.css';
```

### Import the component

```jsx
import Button from '@llamasoft/ui-button';

<Button
  className={styles.randomizeButton}
  qaId={'RandomizeLLama_ButtonQAId'}
  onClick={() => loadImage()}
>
  Randomize
</Button>
```

## Other Resources

### LinkedIn Learning

[Learning React.js](https://www.linkedin.com/learning/learning-react-js-5)

### Pluralsight

[React: The Big Picture](https://app.pluralsight.com/library/courses/react-big-picture)

[Building Application with React and Redux](https://app.pluralsight.com/library/courses/react-redux-react-router-es6)

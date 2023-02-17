# Project Settings

## Vite

```
npm create vite@latest my-vue-app -- --template react
```

### vite.config.js

빌드 과정에서 path alias를 이용한 <code>import</code>가 처리되도록 한다

```js
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

## ESLint & Prettier

https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs

### _require() of ES Module not supported_

.eslintrc.js와 .prettierrc.js 설정 파일을 .eslintrc.json와 .prettierrc 형식으로 변경

### _error 'document' is not defined no-undef_

.eslintrc.json 설정 파일에 다음을 추가

```json
{
  "env": {
    "browser": true
  }
}
```

https://stackoverflow.com/questions/42377038/error-document-is-not-defined-eslint-react

### _'React' must be in scope when using JSX react/react-in-jsx-scope_

.eslintrc.json 설정 파일에 다음을 추가

```json
{
  "extends": ["plugin:react/jsx-runtime"]
}
```

https://stackoverflow.com/questions/64646248/eslintrc-js-for-react-17-and-jsx-without-import-react

### path alias 지원

패키지 설치

```
npm i eslint-import-resolver-alias
```

eslintrc.json

```json
{
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./src"]],
        "extensions": [".js", ".jsx"]
      }
    }
  }
}
```

## VSCode

### settings.json

```json
{
  "files.insertFinalNewline": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### jsconfig.json

path alias를 이용한 <code>import</code>에서 <kbd>ctrl</kbd>+<kbd>click</kbd>으로 소스코드를 볼 수 있게 한다

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Redux Toolkit

```
npm install @reduxjs/toolkit
```

## Router

```
npm install react-router-dom@6
```

## TailWinds

```
npm install -D tailwindcss
npx tailwindcss init
```



## Install Libraries

달력 사용을 위한 라이브러리 설치

```
npm add react-calendar
npm add moment
```


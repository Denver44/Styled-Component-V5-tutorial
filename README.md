# React

- React is Js library which is used for building user interfaces.
- It is a client side Js lib.
- All about building modern reactive user interfaces for the web.
- Declarative Component-focused approach.
- React can be used to control parts of HTML pages or entire pages.
- React can also be used to control the entire frontend of a web application.
- "Single-Page-Applications"(SPA) Approach. Server only sends one HTML Page, thereafter, React takes over and controls the UI.
- React want its custom components to start with CAPITAL Letter.
- props is parameters we accept in our function component. and this props is object type.
- onClick attribute can be added on any element of react.

# The App Function is a React Component.

- App component (Produces JSX and Handle user event) -> return JSX (set of instructions to tell React what content we want to show on the screen)

# JSX ELEMENTS

- Tell React to create a normal HTML Element like div, span, h1, table, hr etc.
- or
- Tell React to show another component like (Field, Languages, Translate)

# React

- Knows how to work with components
- called a 'reconciler'

# ReactDOM

- Knows how to take instructions on what we want to show and turn it into HTML.
- called a 'renderer'

# To create React Project commands

- npm i -g create-react-app (First)
- create-react-app <projectName>
- alternative method
- npx create-react-app <projectName>

# Babel

- It is compiler it compiler our programming from modern Js to ES5 Js so that browser can run those files.

# Project Directory

- src : Folder where we put all the source code we write
- public : Folder that stores static files, like images
- node_modules : Folder that contains all of our project dependencies
- package.json : Records our project dependencies and configure our project
- package-lock.json : Records the exact version of packages that we install.
- README.md - Instructions on how to use this Project.

# To start & stop project

- Control + c (to stop)
- type (npm start) in project directory on cmd

# JSX

- Special dialect of JS (its not HTML!)
- Browsers don't understand JSX code! We write JSX then run tools to turn it into normal JS.
- Very Similar in form and Functions o HTML with a couple differences.

# Props

- System for passing data from a parent component to a child component
- Goal is to customize or configure a child component

# IMP

- we can pass one component to another component also.
- <ApprovalCard> <CommentDetail author="Alex" content="I like the subject" > </ApprovalCard>
- we can destructure this in the same way we destructure the props.

# Rules of CLass Components

- Must be a Javascript Class
- Must extend (Subclass) React.Component
- Must define a 'render' method that returns some amount of JSX

# RUles of State

- Only usable with class components
- you will confuse props with state
- State is a JS Objects that contains data relevant to a component
- Updating state on a component causes the component to (almost) instantly re-render
- state must be initialized when a component is created.
- state can only be updated using the function 'setState' // IMPORTANT

# Hooks System

- useState -> Function that lets you use state in a functional component.
- useEffect -> Function lets you use something like lifecycle methods in a functional component.
- useRef -> Function that lets you create a 'ref' in a function component.

- NOTE : Hooks are a way to write reusable code, instead of more classic techniques like inheritance.

- We can create our custom hooks using the primitive hooks.

- Primitive Hooks
- useState , useEffect , useContext , useReducer , useCallback , useMemo , useRef , useImperativeHandle , useLayoutEffect , useDebugValue

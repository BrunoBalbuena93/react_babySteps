# React

## Basics

- Component based
- Declarative paradigm

##### Templates

You can create a component that works as a template for other things. In the example _task-manager_, the component Card is a "wrapper for the blocks of both Expenses component and ExpenseItem components

#### UseState

This React function enables the developer to create two key features:

`const [state, setState] = useState(initialValue)`

Where the state is the variable it is desired to store and setState is the function used to modify that variable. It is important to know that this function can be used (preferably this way) with the `prevState` argument, giving the developer the value of the state prior to the change. This is important since React can "misplace" the track of the states on how they are changing if they are related among them and could lead to bugs.

## Stylings

There are many ways to style your application, but there are a couple things to know beforehand.

If there is a `.css` file imported into any component, the classes included in such file will be added globally, this means that if component A has class X and component B has class X', either of those styles will prevail and the other won't manifest. As long as the developer is aware of the classes, it should not be a problem, but there are other solutions for these.

##### Third Party Packages

There are packages like _styled_ which are compound of inline css-ish code into the `.js` file. The styles to be used are declared as a function (shown below) and it is added to the environment encapsulating the styles for the component.

```
import styled from 'styled-components';
const Button = styled.button`
    font: inherit;
    border: 1px solid #8b005d;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    @media (min-width: 768px) {
        width: auto;
    }
`;
```

In the past example, the class itself is defined, and the "possible extras" like hovering the cursor or changing the media size are added with it's respective operators.

##### CSS Modules

By default, react enables the modular containerization of the styles, this means that if there is an import of a `.css` file, it can be replaced with a `.module.css` and being imported as an object, this means, the stylesheet is just renamed but the way to use it goes as `import styles from './*.module.css` instead of `import './*.css'`, and the styles are declared by `styles.[name of the class]`

##### Actual Wrappers

React has its own wrappers (under React.Fragment) which are elements that are only used to generate the appropiate JSX output, but they are not rendered in the DOM.

##### React Portals

As the name suggests, the portals are a component of _react-dom_ which are used to address a certain component to an object in the DOM. The syntax for such thing is the following:

```
{ReactDOM.}createPortal([Component to be displayed], [document element where it will be hung]);

ReactDOM.createPortal(<Backdrop onClick={some_function} />, document.getElementById('backdrop'))
```

##### React Refs

Just like the portals are able to hung components to specific elements of the dom, the refs are used to hang something to a component/part of the dom; it works to get access to data via the html itself and it is referenced

##### Effects / Side Effects

The effects are the tasks that does not relate to rendering something to the screen. Think it as the services in Angular, it is used for HTTP requests, timers, etc.

Using the effects goes with the syntax `useEffect(() => {}, [dependencies])`, where the function which should run is the first argument, and the dependencies which trigger such function are the second argument aranged in an array.

##### Reducers

It is a replacement for useState, think of it as a useState on steroids. To understand how it works we can take a closer look to the syntax

`const [state, dispatchFn] = userReducer(reducerFn, initialState, initFn)`

- State: Just like useState, it is the snapshot of the current state
- dispatchFn: Function to update the snapshot. This function works different to useState since it triggers an action, not a reassignment.
- reducerFn: Gets the latest snapshot and gets the action dispatched from dispatchFn.
- initialState: Initial value for the snapshot

##### Context

The use of context is a tool which works as a "global variable", as global as the user decides where to instance it. It should follow the respective structure (it usually works as a JS object wrapped in a React Structure). It can point to anything, from variables to functions.

As it has a lot of advantages, it also brings a few disadvantages:

There is no complex setup: You can end up nesting many context (as shown below):

```
return (
    <AuthContextProvider>
        <ThemeContextProvider>
            <PreferencesContextProvider>
            </PreferencesContextProvider>
        </ThemeContextProvider>
    </AuthContextProvider>
)
```

This nesting could lead to a heavy re-rendering

It is also suggested to be used if the changes are _not high frequency_ changes, i.e., the performance can be affected if the complexity and update-rate of the app grows.

##### Custom Hooks

Functions like the regular hooks which can contain stateful logic

### Redux

State management system for cross-component or app-wide states, i.e., similar to the context, it gives a general access to a state within the web application.

To understand how redux works we need to classify the _states_ into three kinds:

1. **Local State:** It belongs to a single component and it is only used within itself, f.e., a user input or a button that is listening to certain toogle, etc. Usually handled with _useState() / useReducer()_.

2. **Cross-component State:** A state that affects multiple components, this is where the _props-drilling_ comes in, so the data is shared across components. An example for this would be a control of a modal overlay, pop-up window which is triggered by a button.

3. **App wide:** Affects all components of an application. An example for this is the authentication. The alternative here would also be props drilling.

#### How it works?

ude
It is a state machine rebranded as _store_. The data is stored there and the components access to it via subscriptions which provide slices (copies) of the data, and when storing is needed, a reducer function is used with an action triggered by a component.

###### The reducer function

This function is called by the redux library and it receives two parameters and produces a single output: `Old State + Dispatched Action -> New state object`.

#### Redux Toolkit

This is a tool to make redux more "comprehensible" and handleable. There are a few tricks worth metioning, for instance, it is installed/imported as `@reduxjs/toolkit`.

###### Slices

The function `createSlice()` is a way to declare a _small piece_ of the general redux state, it should have a name, initial state value and a group of reducers to handle the state given. The actions are accessed as `.actions` of the slice; these are the ones that should be called with `useDispatch` within the components


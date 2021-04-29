# React

## Basics

- Component based
- Declarative paradigm

##### Wrapper

You can create a component that works as a template for other things. In the example, the component Card is a wrapper for the blocks of both Expenses component and ExpenseItem components

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

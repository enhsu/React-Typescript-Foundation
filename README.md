# React TypeScript

## References
- README
    - [readme - Default create-react-app README](./-default-create-react-app-readme.md)
    - [readme - Typescript foundation for beginner](./notes/typescript-foundation.md)
- Typescript Doc
    - [link - Typescript handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
    - [link - Typescript utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- FAQ
    - [link - Interface VS type in Typescript](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript)

## Environment Setup
- use template
    - `$ npx create-react-app <project-name> --template typescript`
- create project from scratch
    - [Setting up React + TypeScript app from scratch without create-react-app](https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph)

## Summary
- event
    - `React.MouseEvent`
    - `React.ChangeEvent`
- styles
    - `React.CSSProperties`
- HTML element
    - `HTMLButtonElement`
    - `HTMLInputElement`
- children
    - `React.ReactNode`
- pass component as prop
    - `React.ComponentType<SourceComponentType>`
- Class component
- Generic
    - `type CustomPropsType<T> = {}`
    - `const Component = <T extends {}>(props: CustomPropsType<T>) => {}`
- Restricting props
- Template literals & Exclude
    - `Exclude<UnionType, ExcludedMembers>`
- Wrapping HTML & Omit
    - `React.ComponentProps<htmlString | typeof CustomPropsType>`
    - `Omit<Type, Keys>`
- Extracting component prop type
- Polymorphic component

## Props
- basic
    - primitive value - [source code](./src/pages/Props/basic-primitive-value.tsx) - [source code](./src/pages/)
    - object - [source code](./src/components/props/basic-object.tsx)
    - array - [source code](./src/components/props/basic-array.tsx)
- advanced
    - status condional display - [source code](./src/components/props/advanced-status.tsx)
    - `children props` with `React.ReactNode` - [source code](./src/components/props/advanced-children.tsx)
        - @type/react version 16: import React at the top
        - @type/react version 17: just use it for typescript
    - `question mark '?'` for optional parameter - [source code](./src/components/props/advanced-optional.tsx)
    - NOTE: About `'?'`
        - To mention that a particular variable is optional.
        - To pre-check if a member variable is present for an object.
- event
    - `<button>`
        - click event, `React.MouseEvent` - [source code](./src/components/props/event-button.tsx)
        - NOTE: event more specific for html button - `React.MouseEvent<HTMLButtonElement>`
    - `<input>`
        - change event, `React.ChangeEvent` - [source code](./src/components/props/event-input.tsx)
- style
    - `React.CSSProperties`
- More
    - destructure properties
    - export type - [source code](./src/types/Person.type.ts)
    - import type - [source code](./src/components/props/basic-array.tsx)

## Hooks
- Conclution
- useState
    - future value - [source code](./src/components/hooks/useState-future-value.tsx)
        ```typescript
        const [user, setUser] = useState<UserType | null>(initialValue)
        const getValue = () => {
            const name = user?.name
        }
        ```
    - type assertion - [source code](./src/components/hooks/useState-type-assertion.tsx)
        - access `user.name` without a check
        - If we're confident `user` will be initialized soon after setup, and always have value after, we can use type assertion 
        ```typescript
        const [user, setUser] = useState<UserType>({} as UserType)
        const getValue = () => {
            const name = user.name
        }
        ```
- useReducer
    - [source code](./src/components/hooks/useReducer.tsx)
    - more specific: `union type` for `action.type`
    - handle having payload or not: `ActionType = UpdateType | ResetType`
- useContext
    - basic
        - provider - type for the children node `React.ReactNode`
        - [source code - create provider](./src/context/themeContext.tsx)
        - [source code - contain app](./src/components/hooks/useContext-basic.tsx)
        - [source code - use context](./src/components/hooks/useContext-basic-children.tsx)
    - future value
        - `type AuthUser` - user input
        - `type UserContextProviderType` - children component
        - `type UserContextType` - createContext
        - [source code - userContextProvider](./src/context/userContext.tsx)
        - [source code - contain app](./src/components/hooks/useContext-future-value.tsx)
        - [source code - use context](./src/components/hooks/useContext-future-value-children.tsx)
        - while createContext(), use `type assertion`, children don't have to check `userContext` while using it
            ```typescript
            // createContext
            const UserContext = createContext({} as UserContextType)
            ```
            ```typescript
            // children componet
            const userContext = useContext(UserContext)
            const setData = () => { userContext.setUser(null) }
            const getData = () => { console.log(userContext.user?.name) }
            ```
- useRef
    - html element
        - handle `useRef()` type
            - e.g. reference for input elemnt: `HTMLInputElement`
        - [source code - html element](./src/components/hooks/useRef-html-element.tsx)
    - mutable ref
        - handle `uesRef()` type
            - e.g. `const intervalRef = useRef<number | null>(null)`
        - check ref exist before clearInterval
            - e.g. `if (intervalRef.current) window.clearInterval(intervalRef.current)`
        - [source code - mutable ref](./src/components/hooks/useRef-mutable.tsx)

## Class Component
- handle type of the component's props & state
    ```typescript
    class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {}
    ```
- [source code](./src/pages/ClassComponent.tsx)

## Component as props
- pass in a component props - `React.ComponentType`
- the component itself accept props - `React.ComponentType<AcceptPropsType>`
- [source code - pass component as props](./src/components/component-as-prop/private.tsx)

## Generics
- mention generic type `T`(NOTE: use any lable is OK) after type variable
    - `type ListProps<T> = {}`
    - it means `ListProps` accepts a variable call `T`
- assign `T`
    - `type ListProps = { item: string[] | number[] }` -> `type ListProps<T> = { item: T[] }`
- use the type
    - `const ListComponent = (props: ListProps<T>) => {}`
- specify what `T` can be before the parentheses
    - `T` needs to extend a base type
    - `const ListComponent = <T extends {}>(props: ListProps<T>) => {}`
- then we can pass in an array of any type at `ListComponent`, and will not throw an error
- [source code - generic props](./src/components/List.tsx)

## Restricting props
- generate basic value type
    - `type ValueType = { value: number; }`
- extend type for `isPositive` etc.
    ```typescript
    type isPositiveType = ValueType & {
        isPositive: boolean;
        isNegative?: never;
        isZero?: never;
    }
    ```

- use in component props type
    - `type ComponentPropsType = isPositiveType | isNegativeType | isZeroType`
- [source code - restricting props](./src/pages/RestrictingProps.tsx)
- usage
    - `<RestrictingPropsComponent value={10} isPositive />`

## Template literals & Exclude
- build type for `horizontal` & `vertical`
    - `type HorizontalPosition = 'left' | 'center' | 'right';`
    - `type VerticalPosition = 'top' | 'center' | 'bottom';`
- exclude `center-center`
    - Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center`>
- add 'center`
    - `type Postion = ExclusivePostion | 'center'`
- [source code - template literals and exclude](./src/pages/TemplateLiteralsAndExclude.tsx) 

## Wrapping HTML & Omit
- wrapping
    - `type CustomButtonPropsType = { specificTypeEgTypeForClass: string } & React.ComponentProps<'button'>`
    - usage
        ```typescript
        const CustomButton = ({ classname, children, ...restProps }: CustomButtonPropsType) => {
            return <button className={classname} {...restProps}>{ children }</button>
        }
        ```

    - [source code - custom input](./src/components/wrapping-html-and-omit/cursom-input.tsx)
- Omit - omit takes an object type and removes the specific properties
    - scenario - restrict children type to just string
    - define `children` for string
    - omit the type we want to omit in `React.ComponentProps`
        ```typescript
        type ComponentPropsType = {
            className: 'primary' | 'secondary';
            children: string;
        } & Omit<React.ComponentProps<'button'>, 'children'>
        ```

    - [source code - omit button children](./src/components/wrapping-html-and-omit/custom-button.tsx)

## Extracting component prop type
- `React.ComponentProps<typeof Component>`
    ```typescript
    import SourceComponent from 'path/to/source/component'
    const AnotherComponent = (props: React.ComponentProps<typeof SourceComponent>) => {}
    ```

- [source code](./src/components/wrapping-html-and-omit/another-input.tsx)

## Polymorphic component
- scenario - passing a property controls what HTML element is rendered in the children component
    - goal
        ```typescript
        import Text from 'path/to/text/component'

        const App = () => {
            return (
                <Text as="h1">context</Text>
            )
        }

        // should be: <h1>context</h1>
        ```

- implement steps
    1. initialize
        ```typescript
        type TextPropsType = {
            size?: 'sm' | 'md' | 'lg';
            color?: 'primary' | 'secondary';
            children: React.ReactNode;
            as?: string
        }

        function Text({ size, color, children, as }: TextPropsType) {
            const Component = as || 'div'
            return (
                <Component className={`class-width-${size}-${color}`}>{ children }</Component>
            );
        }
        ```

        ```typescript
        // Error: Type '{ children: ReactNode; className: string; }' is not assignable to type 'IntrinsicAttributes'. Property 'children' does not exist on type 'IntrinsicAttributes'.
        ```

    2. `as` props can't be any random string -> `React.ElementType`
    3. improve - `label` should have `htmlFor` attribute
        ```typescript
        type TextOwnPropsType<E extends React.ElementType> = {
            size?: 'sm' | 'md' | 'lg';
            color?: 'primary' | 'secondary';
            children: React.ReactNode;
            as?: E
        }

        type TextPropsType<E extends React.ElementType> = TextOwnPropsType<E> & React.ComponentProps<E>
        ```

    4. children might collide with children with `div` tag -> omit the keys that are specified as part of the `TextOwnPropsType`
        ```typescript
        type TextPropsType<E extends React.ElementType> = TextOwnPropsType<E> & Omit<React.ComponentProps<E>, keyof TextOwnPropsType<E>>
        ```

    5. add generic type for component
        ```typescript
        const Text = <E extends React.ElementType = 'div'>({ size, color, children, as }: TextPropsType<E>) => {
            const Component = as || 'div'
            return (
                <Component className={`class-width-${size}-${color}`}>{ children }</Component>
            );
        }
        ```

    6. summary
        ```typescript
        type TextOwnPropsType<E extends React.ElementType> = {
            size?: 'sm' | 'md' | 'lg';
            color?: 'primary' | 'secondary';
            children: React.ReactNode;
            as?: E;
        }

        type TextPropsType<E extends React.ElementType> = TextOwnPropsType<E> & Omit<React.ComponentProps<E>, keyof TextOwnPropsType<E>>

        const Text = <E extends React.ElementType = 'div'>({ size, color, children, as }: TextPropsType<E>) => {
            const Component = as || 'div'
            return (
                <Component className={`class-width-${size}-${color}`}>{ children }</Component>
            );
        }
        ```
- [source code - polymorphic component]()
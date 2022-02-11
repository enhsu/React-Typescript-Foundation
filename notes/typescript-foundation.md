# TypeScipt Foundation

- [typescript handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

## Environment Setup

- install node.js
- install typescript globally - `$ npm i -g typescript`
    - command
        - `$ tsc <file>` - compile `*.ts` file to `*.js` file
        - `$ tsc <file> --watch` - compile `<file>` automatically while it changed

## Variable Declarations

`block scope` - `const` and `let`

## Variable Types

- type
    - basic type
        - `boolean`
        - `number`
        - `string`
        - `null` & `undefined`, are classified as subtypes of all other types
        ```typescript
        // declare variable
        const isCute: boolean = true;
        const appleReserve: number = 0;
        const animal: string = 'Redpanda';
        let isFeed: boolean = undefined;
        let nickname: string = null;
        ```
    - `array` type
        ```typescript
        // declare array type - 2 ways
        let listOne: number[] = [1, 2, 3]
        let listTwo: Array<number> = [1, 2, 3]
        ```
    - `tuple` type - array contains value with mixed type
        ```typescript
        // declare tuple type
        const animal: [string, number] = ['Redpanda', 42]
        ```
    - `enum` type - a way of giving more friendly names to a set of numeric value
        ```typescript
        // declare enum type and usage
        enum Color {Red, Green, Blue}
        const shoesColor: Color = Color.Green;
        console.log(shoesColor) // 1

        enum OtherColor {Black = 5, White, Yellow}
        const shirtColor: OtherColor = OtherColor.Yellow
        console.log(sirtColor) // 7
        ```
    - `any` type - unsure what a variable type would be
        ```typescript
        let randomValue: any = 10
        randomValue = true
        randomValue = 'a string'
        randomValue = { color: 'red' }
        console.log(randomValue.color)
        ```
    - `unknown` type
        - `unknown` is the type-safe counterpart of `any`
        - no operations are permitted on an unknown without first asserting or narrowing to a more specific type
        ```typescript
        let aObject = {
            key1: 'value'
        }
        console.log(aObject.key1) // occur an error: Object is of type 'unknown'.
        // fix error - narrowing to specific type
        function hasKey1(obj: any): obj is {key1: string} {
            return (
                !!obj &&
                typeof obj === 'object' &&
                'key1' in obj
            )
        }
        if (hasKey1(aObject)) {
            console.log(aObject.key1)
        }
        ```
    - `union` type
        ```typescript
        let multiType: number | boolean;
        multiType = 10
        multiType = true
        ```
- keyword
    - `question mark '?'`
        - To mention that a particular variable is optional.
        - To pre-check if a member variable is present for an object.
    - `as` keyword - assert
        - `as string` means consider the typed object as a JavaScrpt string.
        ```typescript
        let aValue = 10;
        (aValue as string).toUpperCase() // no typescript error
        ```
    - `is` keyword
        - [Reference](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

## Functions
- parameters type
- function return type
- optional parameter

```typescript
function add(num1: number, num2?: number): number {
    if (num2) return num1 + num2
    return num1
}
```

## Interface
- specify an object as a type

```typescript
interfact Person {
    firstname: string;
    lastname: string;
}

function fullName(person: Person) {
    console.log(`${person.firstname} ${person.lastname}`)
}
```

## Class & Access Modifiers

- Access Modifiers: set the accessibility of properties and methods in the class
    - public(default)
    - private - can NOT be accessed from outside of its containing class
    - protected - acts much like the private modifier, but can be accessed within deriving classes.

```typescript
class Employee {
    private employeeName: string;

    constructor(name: string) {
        this.employeeName = name
    }

    greet() {
        console.log(`Hi ${this.employeeName}`)
    }
}

class Manager extends Employee {
    protected currentTask: string;

    constructor(managername: string, currentTask: string) {
        super(managername)

        this.currentTask = currentTask;
    }

    delegateWork() {
        console.log(`Manager: ${this.employeeName}`) // occur error: Property 'employeeName' is private and only accessible within class 'Employee'
        console.log('Manager delegating tasks')
    }
}

const m1 = new Manager('Redpanda')
m1.greet() // Hi Redpanda
m1.delegateWork() // Manager delegating tasks
console.log(m1.currentTask) // occur error: Property 'currentTask' is protected and only accessible within class 'Employee' and its subclasses.
```
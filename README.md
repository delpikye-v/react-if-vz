### ✨ react-if-vz
---

[![NPM](https://img.shields.io/npm/v/react-if-vz.svg)](https://www.npmjs.com/package/react-if-vz)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-if-vz.svg)

---

### 🌟 Live Demo

👉 [Codesandbox](https://codesandbox.io/p/sandbox/dtknv4)

---

### Description
A set of React components for declarative and readable conditional rendering, including:
- Ifz / If / ElseIf / Else – for nested boolean conditions
- When / WhenAll / WhenAny / WhenNot – for single-line conditional rendering
- Switch / Case / Default – for discrete value matching
- Supports dynamic children, debug logging, and custom class/style

---

### Installation

install via npm:
```
npm i react-if-vz
```

---

### Usage

#####
```js
import { Ifz, If, Else, ElseIf, When, Case, Switch, Default } from 'react-if-vz';

const [role, setRole] = useState('admin');

// support function
const isAdmin = () => {
  return role === 'admin';
}

//******************************** */
<Ifz>
  <Ifz.If condition={() => isAdmin()} debug="Admin check">
    <p>Welcome Admin</p>
  </Ifz.If>
  <Ifz.ElseIf condition={user.role === 'user'}>
    <p>Welcome User</p>
  </Ifz.ElseIf>
  <Ifz.Else>
    <p>Welcome Guest</p>
  </Ifz.Else>
</Ifz>

//******************************** */
// advance
<Ifz>
  <If condition={x => x > 10} args={[5]} debug="x > 10">
    {(x: number) => <div>Value {x} is big</div>}
  </If>

  <ElseIfz> 
    <If condition={y => y < 5} args={[3]} debug="y < 5">
      <div>Nested check: y < 5</div>
    </If>
    <Else>
      {(args: unknown[]) => {
        const y = args[0] as number;
        return <div>Nested fallback: y = {y}</div>;
      }}
    </Else>
  </ElseIfz>

  <Else>
    {(args: unknown[]) => <div>Fallback content, args: {JSON.stringify(args)}</div>}
  </Else>
</Ifz>

//******************************** */
// Single => should use this instead of <If />
<When condition={isLoggedIn()}>
  <p>Welcome back!</p>
</When>

<WhenAll conditions={[isAdmin(), hasPermission()]}>
  <p>Admin panel</p>
</WhenAll>

<WhenAny conditions={[isAdmin(), isManager()]}>
  <p>Dashboard access</p>
</WhenAny>

<WhenNot condition={isGuest()}>
  <p>Non-guest content</p>
</WhenNot>

//******************************** */
<Switch value={user.role}>
  <Case value="admin">
    <p>Welcome Admin</p>
  </Case>
  <Case value="user">
    <p>Welcome Staff</p>
  </Case>
  <Default>
    <p>Welcome Guest</p>
  </Default>
</Switch>

//******************************** */
const [results, setResults] = useState(1);
<Switch>
  <Case value={() => results === 1}>
    <p>Welcome Admin</p>
  </Case>
  <Case value={() => results === 2}>
    <p>Welcome Staff</p>
  </Case>
  <Default>
    <p>Welcome Guest</p>
  </Default>
</Switch>

```

--- 

### 🔹 Props Summary

| Component       | Props                                                          | Description                     |
| --------------- | -------------------------------------------------------------- | ------------------------------- |
| `If` / `ElseIf` | `condition`, `children`, `args`, `className`, `style`, `debug` | Conditional block               |
| `Else`          | `children` (JSX or function), `args`, `className`, `style`     | Fallback block                  |
| `Ifz`           | `children`                                                     | Wrapper for nested conditionals |
| `When`          | `condition`, `children`, `args`                                | Simple conditional              |
| `WhenAll`       | `conditions`, `children`                                       | Render if all true              |
| `WhenAny`       | `conditions`, `children`                                       | Render if any true              |
| `WhenNot`       | `condition`, `children`                                        | Render if false                 |
| `Switch`        | `value`, `children`, `args`                                    | Discrete value switch           |
| `Case`          | `value`, `children`, `args`, `className`, `style`, `debug`     | Case block                      |
| `Default`       | `children`, `args`, `className`, `style`                       | Default block                   |

---

### 🔹 Advantages
- Readable nested conditions instead of deeply nested ternary operators
- Dynamic children support with function syntax
- Debugging: know which conditional branch is rendered
- Reusable args: pass values to multiple children / conditions
- Styling: className / style per block

---

### License

MIT

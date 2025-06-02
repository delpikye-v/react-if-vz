<div align="center">
    <h1>react-if-vz</h1>
    <a href="https://www.npmjs.com/package/react-if-vz">react-if-vz</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/p/sandbox/dtknv4">LIVE EXAMPLE</a></b>
</div>

<br />

[![NPM](https://img.shields.io/npm/v/react-if-vz.svg)](https://www.npmjs.com/package/react-if-vz)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-if-vz.svg)

---
## Description
+ React wrapper conditions
+ If/ElseIf/Else
+ Switch/Case

## Installation

install via npm:
```
npm i react-if-vz
```

## Usage

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
  <Ifz.If condition={() => isAdmin()}>
    <p>Welcome Admin</p>
  </Ifz.If>
  <Ifz.ElseIf condition={user.role === 'user'}>
    <p>Welcome user</p>
  </Ifz.ElseIf>
  <Ifz.Else>
    <p>Welcome Guest</p>
  </Ifz.Else>
</Ifz>

//******************************** */
// Single => should use this instead of <If />
<When condition={statez === 1}>
    when: statez === 1
</When>

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
<br />


## License

MIT

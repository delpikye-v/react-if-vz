# ✨ react-if-vz

[![NPM](https://img.shields.io/npm/v/react-if-vz.svg)](https://www.npmjs.com/package/react-if-vz) ![Downloads](https://img.shields.io/npm/dt/react-if-vz.svg)

🌟 [LIVE DEMO](https://codesandbox.io/p/sandbox/dtknv4)

---

**react-if-vz** is a lightweight, declarative conditional-rendering toolkit for React.

It helps you replace deeply nested ternaries and `&&` chains with **clear, readable JSX blocks**.

> Write conditions like logic, read JSX like a story.

---

## 📖 Why react-if-vz?

- **Ifz / If / ElseIf / Else** – nested boolean logic
- **When / WhenAll / WhenAny / WhenNot** – single-line conditions
- **Switch / Case / Default** – discrete value matching
- **Chain API** – fluent `Ifz.chain()` syntax
- **Hook API** – `useIfz()` for logic-first rendering
- Debug logging & StrictMode-safe design
- Function children & shared args
- Optional wrapper / className / style per block
- Perfect for dashboards, admin panels, feature flags, and UI with complex branching logic.

> Note: Wrappers are applied **only when explicitly provided**.  
> `className` and `style` do not trigger auto-wrapping.

---

## 📦 Installation

```bash
npm install react-if-vz
```

---

## 🚀 Usage

### Basic If / Else

```tsx
import { Ifz, If, ElseIf, Else } from "react-if-vz";

<Ifz>
  <If condition={isAdmin} debug="admin-check">
    <p>Welcome Admin</p>
  </If>

  <ElseIf condition={role === "user"}>
    <p>Welcome User</p>
  </ElseIf>

  <Else>
    <p>Welcome Guest</p>
  </Else>
</Ifz>
```

---

### Function children + args

```tsx
<Ifz>
  <If condition={(x: number) => x > 10} args={[15]}>
    {(x) => <div>{x} is large</div>}
  </If>

  <Else>
    {(args) => <div>Fallback: {args[0]}</div>}
  </Else>
</Ifz>
```

---

### Nested conditions

```tsx
<Ifz>
  <If condition={a}>
    A
  </If>

  <ElseIfz>
    <If condition={b}>B</If>
    <Else>C</Else>
  </ElseIfz>
</Ifz>
```

---

### Type inference with function conditions
```ts
<Ifz>
  <If
    condition={(user: { id: number; role: "admin" | "user" }) =>
      user.role === "admin"
    }
    args={[{ id: 1, role: "admin" }]}
  >
    {(user) => <div>Admin ID: {user.id}</div>}
  </If>

  <Else>
    {(args) => <div>User role: {args[0].role}</div>}
  </Else>
</Ifz>

```

---

### When helpers

```tsx
<When condition={isLoggedIn()}>
  <p>Welcome back!</p>
</When>

<WhenAll conditions={[isAdmin(), hasPermission()]}>
  <p>Admin panel</p>
</WhenAll>

<WhenAny conditions={[isAdmin(), isManager()]}>
  <p>Dashboard</p>
</WhenAny>

<WhenNot condition={isGuest()}>
  <p>Members only</p>
</WhenNot>
```

---

### Switch / Case

```tsx
<Switch value={user.role}>
  <Case value="admin">
    <p>Admin</p>
  </Case>

  <Case value="user">
    <p>User</p>
  </Case>

  <Default>
    <p>Guest</p>
  </Default>
</Switch>
```

### Boolean Switch (no value)

```tsx
<Switch>
  <Case value={() => result === 1}>One</Case>
  <Case value={() => result === 2}>Two</Case>
  <Default>Other</Default>
</Switch>
```

---

### Chain API

```tsx
Ifz.chain({ trace: true })
  .when(isAdmin, <Admin />)
  .when(isUser, <User />)
  .else(<Guest />);
```

- Ifz.chain only supports zero-argument conditions.

---

### Hook API

```tsx
const { when, else: otherwise } = useIfz([value]);

return when(v => v > 10, <Big />)
  .when(v => v > 5, <Medium />)
  .else(<Small />);
```

---

## 🧩 Props Summary

| Component | Key Props |
|--------|-----------|
| If / ElseIf | condition, children, args, className, style, wrapper, debug |
| Else | children |
| When | condition, children, args |
| Switch | value, children, args |
| Case | value, children, args, className, style, wrapper |
| Default | children, args, className, style |

---

## ✅ Advantages

- Declarative & readable JSX
- No ternary hell
- Works with StrictMode & SSR
- Optional debug tracing
- Tiny, dependency-free core

---

## 📊 Conditional Rendering Libraries Comparison

| **Criteria**                 | **react-if-vz** | **react-if**  | **jsx-control-statements**  |
| ---------------------------- | :-------------: | :----------:  | :------------------------:  |
| Declarative JSX              |        ✅        |       ✅      |              ✅             |
| Native JSX (no compile step) |        ✅        |       ✅      |              ❌             |
| If / Else                    |        ✅        |       ✅      |              ✅             |
| ElseIf                       |        ✅        |       ❌      |              ✅             |
| Switch / Case                |        ✅        |       ✅      |              ❌             |
| Boolean Switch (no value)    |        ✅        |       ❌      |              ❌             |
| Function children            |        ✅        |  ⚠️ (manual)  |              ❌             |
| Shared args                  |        ✅        |       ❌      |              ❌             |
| TypeScript inference         |   ✅ **Strong**  |   ⚠️ Basic    |              ❌             |
| Hook API                     |   ✅ `useIfz()`  |       ❌      |              ❌             |
| Chain / Fluent API           |        ✅        |       ❌      |              ❌             |
| Async condition handling     |  ❌ (by design)  |       ✅      |              ❌             |
| Wrapper control              |    ✅ Explicit   |  ❌ Implicit  |              ❌             |
| Debug / trace                |        ✅        |       ❌      |              ❌             |
| StrictMode safe              |        ✅        |      ⚠️       |             ⚠️              |
| SSR safe                     |        ✅        |      ⚠️       |              ❌             |
| Build-time dependency        |        ❌        |       ❌      |      ✅ (Babel plugin)      |
| Bundle size                  |     🟢 Small     |   🟢 Small    |        🟢 Very small        |
| Design philosophy            |   Logic-first    | Feature-rich |        Template-like        |
| Actively evolving            |        ✅        |      ⚠️       |              ❌             |


<br />

<b>react-if-vz</b>

Designed for TypeScript-first applications with complex UI logic, where predictable and explicit render control matters.

<b>react-if</b>

A good fit for scenarios that require async conditions or Promise-based UI flows.

<b>jsx-control-statements</b>

A template-style approach relying on compile-time transforms; less commonly used in modern TypeScript-centric React codebases.

<b> Why not async conditions?</b>

- react-if-vz keeps rendering pure and synchronous by design.
- Async conditions in JSX make renders unpredictable and harder to debug.
- Async logic belongs in hooks or data layers, not in render flow.
- This keeps UI logic explicit, predictable, and TypeScript-friendly.

> Async belongs to data, not JSX.

---

## 📄 License

MIT

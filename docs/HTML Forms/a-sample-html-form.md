---
sidebar_position: 14
keywords: [html, sample html, basic html]
---

# A Sample HTML Form

Before starting out to discuss about HTML Forms, let's take a look at the same HTML form.

```html title=sample-form.html
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Document</title>
  </head>
  <body>
    <h1>This is my first HTML Form.</h1>
    <form>
      <label for="username">Username</label>
      <input type="text" placeholder="john123" id="username" />
      <label for="password">Password</label>
      <input type="password" placeholder="********" id="password" />
      <button type="submit">Login</button>
    </form>
  </body>
</html>
```

## Explanation

The code above is a simple example of a login form.

- `<form>` is the declaration of the form in HTML.
- `<label>` give the label to the particular input box.
- `<input>` is the element that allows user to input certain values to them.
- `<button>` lets the user to submit the form once the form is filled.

The output of the following code is as follows:

---

<label for="username">Username</label>
<input type="text" placeholder="john123" id="username" />
<label for="password">Password</label>
<input type="password" placeholder="********" id="password" />
<button>Login</button>

---

More depth description about HTML forms are in the later pages.

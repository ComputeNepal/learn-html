---
sidebar_position: 9
keywords: [html, html comments, comments in html, use of comment in html, syntax for comment in html]
---

# HTML Comments

Comments in HTML are the statement that are not executed/ parsed by the browser. Comments are not rendered in user's browsers but are visible in source codes.

## Syntax

You can add comment as the following in you code.

```html title="comments.html"
<someCodes></someCodes>

<!-- Your comment here -->

<moreCodes></moreCodes>
```

You can add your custom comment inside `<!--` and `-->`.

:::tip quick tip
If on VS Code, you can use the keyboard shortcut `Ctrl` + `/` to quickly add comments.
:::

## Use Case

Question may rise, if the comments are not shown on browser why do we need them. But there are few use cases of comments.

### Add Notes

One of the pretty common use case of comments is to add some notes to the developer itself.

Let's say you are developing an application and you want to just draft some feature and have a subtle remainder as a `TODO`. In such case you could use comment as follows.

```html title="add-note.html"
<someCodes></someCodes>

<!-- TODO: This feature needs to be developed. -->

<upcommingFeature></upcommingFeature>
```

### Debugging

Another common use case of comments is to help in debugging.

Let's say you get an unexpected result while coding. In such case, you can comment some lines of codes and then see if the results are expected and find out the error code.

```html title="debugging.html"
<someCodes></someCodes>

<!-- <errorCodes></errorCodes> -->

<workingCode></workingCode>
```

:::danger Important
Comments are one of the most important part of coding. It is always a best practice to write descriptive comments.
:::

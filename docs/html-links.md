---
sidebar_position: 10
keywords: [html, links, html links, anchor tag in html, link in html, href attribute, open in new tab, a in html]
---

# HTML Links

Web is all about links and linking different web pages. HTML links allows to link different web pages.

Links are called **hyperlinks** in HTML. You can click on a link to go to a new web page.

By default, the browser adds some formatting like underline and color to the link but you can always customize that to your own liking.

:::info note
Link doesn't need to be text, any HTML element can be a link including images, texts, buttons, etc.
:::

## `<a>` Tag

The HTML `<a>` tag defines a link. The syntax for `a` tag is as following.

```html title="a-tag.html"
<a href="https://example.com">Example</a>
```

You can use any HTML element instead of `Example` text.

### `href` Attribute

In the above example, you can see the usage of the `href` attribute. While on the topic of links, `href` is the most important attribute.

The use of `href` attribute is to **define the destination** of the link.

:::tip tip
Instead of using an _url_ in the `href` attribute, you can use the _id_ of any element in HTML to scroll to that element. It is also called **bookmarks** in HTML. More on _id_ later.
:::

### `target` Attribute

Talking about links, another most important attribute is the `target` attribute. The `target` attribute defines where the link is opened, either it be on same page or new tab or other location.

The following are some possible values of the `target` attribute.

- `_self` : Opens the document in the same window.
- `_blank` : Opens the document in the new tab.
- `_parent` : Opens the document in the parent frame.
- `_top` : Opens the document in the full body of the window.

Among all, the most common use case of target is to open in new tab.

```html title="open-in-new-tab.html"
<a href="https://computenepal.com" target="_blank">ComputeNepal</a>
```

Output of the above code is as follows:

---

<a href="https://computenepal.com" target="_blank">ComputeNepal</a>

---

:::info information
By default, the link target is setup to open in the same window/ tab.
:::

## Paths

While linking different documents, you can use either of absolute path or relative path.

The **absolute path** starts with `https://` or `http://`, whereas the **relative path** doesn't start with `https://` or `http://`.

## More Usage

Link not only links two web pages, but they are also useful to link _mail address_, _telephone_, etc.

```html title="link-use.html"
<!-- Linking email address -->

<a href="mailto:john@example.com">Email John</a>

<!-- Linking telephone -->

<a href="tel:9800000000">Call me</a>
```

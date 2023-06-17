---
sidebar_position: 6
---

# HTML Paragraphs

A paragraph is a block element of HTML which is usually used to render a block of text. It always starts in a new line.

Usage example of paragraph is shown below:

```html title="paragraph.html"
<p>This is the first paragraph</p>
<p>This is the second paragraph</p>
```

## Paragraph display

The HTML Paragraph will remove all the extra spaces you add in between words, and render the formatted text.

Consider this example:

```html title="paragraph-spaces.html"
<p>
This   paragraph       contains alot of     whitespaces.
  But   the whitespace   is removed by   the browser.
</p>
```

The above example contains a lot of whitespaces but the paragraph will rendered as the following:

***
<p>
This   paragraph       contains alot of     whitespaces.
  But   the whitespace   is removed by   the browser.
</p>

***

### The Problem

Now we know that the white spaces are removed by the browser but what if you want to really display the white spaces in your HTML page? In order to achieve this we have a special tag in HTML called as `<pre>`.

## pre Tag 

The `pre` tag renders the text inside it as it is including all the white spaces. This can sometimes be useful when you want to show the text as you have typed in the code editor.

```html title="pre-tag.html"
<pre>
This   paragraph       contains alot of     whitespaces.
  But   the whitespace   is removed by   the browser.
</pre>
```

The above example contains a lot of white spaces but due to the use of `pre` tag unlike `p` tag, the white spaces will be rendered as it is.

***
<pre>
This   paragraph       contains alot of     whitespaces.
  But   the whitespace   is removed by   the browser.
</pre>

***

:::tip Tip 
The `pre` tag can be used to render the source codes by using along with `code` tag. More on that later.
:::

## br Tag 

Let's say you have a paragraph and you want a new line after certain text, then at that case you need to use the `<br>` tag. It is a **singular tag**, so it don't need a closing tag.

```html title="br-tag.html"
<p>This is the first line.<br>This is the second line</p>
```

The above code will render two lines of text. You can try it in your own local development environment.

## hr Tag 

Let's say you want a new line along with a separator, in that case you can use the `<hr>` tag instead of `<br>` tag. This will also render a separator in between two blocks.

```html title="hr-tag.html"
<p>This is the first line.<hr>This is the second line</p>
```

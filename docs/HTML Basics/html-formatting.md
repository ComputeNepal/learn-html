---
sidebar_position: 7
---

# HTML Formatting

There are several different types of HTML formatting tags that gives certain meaning to the content in it.

Some of the examples of HTML formatting Tags are:
- `<b>`: Bold Text
- `<strong>`: Important Text
- `<i>`: Italic Text
- `<em>`: Emphasized Text
- `<mark>`: Marked Text 
- `<small>`: Smaller Text 
- `<del>`: Deleted Text 
- `<ins>`: Inserted Text 
- `<sub>`: Subscript Text 
- `<sup>`: Superscript Text 

```html title="formatting.html"
<b>This is bold text.</b>
<br>
<strong>This is important text.</strong>
<br>
<i>This is italic text.</i>
<br>
<em>This is Emphasized text.</em>
<br>
<mark>This is marked text.</mark>
<br>
<small>This is small text.</small>
<br>
<del>This is deleted text.</del>
<br>
<ins>This is inserted text.</ins>
<br>
This is <sub>Subscript</sub>.
<br>
This is <sup>Superscript</sup>.
```

Copy the above example and see the corresponding output of the code. You will find some similarities between some tags, like `b` and `strong` both makes the text bold, `i` and `em` both makes the text italics but they are functionally different. While `b` and `i` are mainly for visuals, `strong` and `em` are semantically important.

:::tip Useful
It is a better idea to use `<strong>` and `<em>` instead of `<b>` and `<i>` as they have semantic meanings.
:::

## `<strong>` VS `<b>`

While both the tags may produce same visual outputs, they are completely different. The `<b>` tag only makes the text bold but don't mark it as important whereas the `<strong>` tag makes the text bold as well as mark it as important. If you want to make a text bold because the text is important, then semantically use of `strong` is preferred.

## `<em>` VS `<i>`

While both the tags produce same visual outputs, they are also completely different as `strong` and `b`. The `<i>` tag makes the text wrapped inside it italic but don't add a semantic meaning whereas the `<em>` tag makes the text italic as well as add semantic meaning to the text. The text wrapped inside `em` is emphasized. This can be more clear when the screen reader reads your text, when you use the `<i>` tag the reader don't emphasize the text while it emphasize the text wrapped in `<em>` tag.

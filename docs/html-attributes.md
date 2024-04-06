---
sidebar_position: 4
keywords: [html, html attributes, basic html, absolute and relative path, href attribute, src attribute, attributes in html]
---

# HTML Attributes

HTML attributes are special keywords that you can use to provide extra information regarding the HTML tag.

:::tip Important
Attributes always comes in name value pair like: `name="value"`, and are always defined in HTML **_start tag_**.
:::

## src Attribute

The `src` attribute can be used to give the path of the image that we want to display. This attribute is used with the `<img>` tag.

```html title="src-attribute.html"
<img src="path/to/image.jpg" />
```

**_You will learn more about `<img>` tag in the upcoming chapters._**

### Absolute And Relative Paths

There are two types of path that you can use namely: Absolute and Relative paths.

- Absolute path links to an external image from another website. It starts with **https://**.
- Relative path links to a internal image from same website. It starts with **/path/to/image.jpg**.

You can also use relative paths to link internal images from the same website.

:::danger Keep In Mind
Although you can use absolute path to link internal images but it's not recommended as it may break the image if the url of the website is changed.
:::

## href Attribute

The `href` attribute is used for hyperlinking. It is used along with `<a>` tag. The main purpose of web is to link from one page to another page, so `href` is the most important attribute.

```html title="href-attribute.html"
<a href="path/to/page/">Click Here to go to next page</a>
```

**_More about `<a>` tag on upcoming chapter.s_**

## height and width Attributes

The `height` and `width` attributes are used to determine the height and width of the HTML element. It assigns height and width of the element in the unit called `px` (**pixels**).

```html title="height-width.html"
<img src="path/to/image.jpg" height="500" width="500" />
```

## alt Attribute

When it comes to images, `alt` is one of the most important attribute. If for some reason the image is not rendered then the text in `alt` attribute is displayed to the user so that the user knows what the image was about. It is also used by screen readers to describe the content.

```html title="alt-attribute.html"
<img
  src="path/to/image.jpg"
  height="500"
  width="500"
  alt="Displayed if the image is not rendered"
/>
```

:::danger Important
`alt` is the most important attribute when it comes to images. It is the best practice to use `alt` every time you render image.
:::

## style Attribute

The `style` attribute is used to add styles to an element.

```html title="style-attribute.html"
<p style="color:white; background-color:black;">
  This is a black and white paragraph.
</p>
```

## title Attribute

The `title` attribute is used to set the title of an element and provide extra information about the element. The value of this attribute is displayed as a tooltip.

<button title="This is by the title Attribute">Hover me to see the tooltip</button>

The following is the code for the above button.

```html title="title-attribute.html"
<button title="This is by the title Attribute">
  Hover me to see the tooltip
</button>
```

:::tip tip
Although HTML is case insensitive and you can use either lowercase or uppercase, we recommend to use lowercase for attributes.
:::

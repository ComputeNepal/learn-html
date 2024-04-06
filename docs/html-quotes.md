---
sidebar_position: 8
keywords: [html, quotes, html quotes, quotes in html, blockquote, cite, abbr, html q]
---

# HTML Quotes 

This chapter covers HTML quotation and citation elements.

Some of the HTML quotation and citation elements are listed below:
- `<abbr>`: This defines an abbreviation or acronym.
- `<address>`: This defines contact information.
- `<bdo>`: This defines the text direction.
- `<blockquote>`: This defines a section that is quoted from another source.
- `<cite>`: This defines the title of the work.
- `<q>`: This defines a short inline quotation.

## `<blockquote>` Tag

The `blockquote` tag in HTML defines a section that is quoted from another source.

:::info info 
Browsers usually indent `blockquote`.
:::

```html title="blockquote.html"
 <p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote> 
```

The following is the output:

***
 <p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote>

***

## `<q>` Tag 

The `q` tag in HTML defines a short quote.

:::info info 
Browsers usually add quotation marks around the text wrapped in `<q>` tag.
:::

```html title="short-quote.html"
The main aim of ComputeNepal is: <q>Provide Quality Education<q>.
```

## `<abbr>` Tag 

The `abbr` tag in HTML is used for abbreviation or acronyms.

Using `abbr` can help in better Search Engine Optimization, give information to translation system, and more.

The `title` is shown as tooltip on hover.

```html title="abbr.html"
This is <abbr title="World Health Organization">WHO</abbr>.
```

The output is as follows:

***
This is <abbr title="World Health Organization">WHO</abbr>.

***

## `<address>` Tag 

The `address` tag is used to give the contact information about the address of a person or organization.

The information can be email address, URL, physical address, phone number, social media, etc.

:::info info 
Generally the block inside `<address>` is rendered in *italics*. And browser adds line breaks before and after the `address` tag.
:::

```html title="address.html"
<address>
Visit us at: ... <br>
example.com <br>
Street, City, Post Code <br>
Country
</address>
```

The output is as follows:

***
<address>
Visit us at: ... <br/>
example.com <br/>
Street, City, Post Code <br/>
Country
</address>

***

## `<cite>` Tag

The `cite` tag is used to define the title of a creative work like books, paintings, sculptures, poem, song, etc.

Usually, `cite` is rendered in italics.

```html title="cite.html"
<cite>Rich Dad Poor Dad</cite> by Robert, is the best seller in personal finances.
```

The output is as follows:

***
<cite>Rich Dad Poor Dad</cite> by Robert, is the best seller in personal finances.

***

## `<bdo>` Tag

BDO stands for Bi-Directional Override.

`bdo` tag is used to override the configured text direction.

```html title="bdo.html"
<bdo dir="rtl">This is right to left.</bdo>
```

The output is as follows:

***
<bdo dir="rtl">This is right to left.</bdo>

***

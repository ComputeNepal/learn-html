---
sidebar_position: 14
keywords: [html, sample html, basic html]
---

# Semantic HTML

Semantic HTML refers to the use of specific HTML tags that convey meaning beyond their appearance. By using semantic elements, you provide clearer structure and context to your web content, which improves accessibility, SEO, and overall understanding of your document's hierarchy.

## Header `<header>`

The `<header>` tag represents introductory content at the beginning of a document or section. It typically includes logos, navigation menus, and other introductory elements.

```html title="header.html"
<header>
    <h1>My Website</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
```

## Navigation `<nav>`

The `<nav>` tag defines a section of navigation links. It's used to group together links for navigating within the website or to external pages.

```html title="nav.html"
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/services">Services</a></li>
    </ul>
</nav>
```

## Main Content `<main>`

The `<main>` tag represents the main content of the document. It should contain the central content unique to the page.

```html title="main.html"
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here...</p>
    </article>
</main>
```

## Section `<section>`

The `<section>` tag defines a thematic grouping of content, typically with a heading. It helps to organize content into distinct sections.

```html title="section.html"
<section>
    <h2>Section Title</h2>
    <p>Section content goes here...</p>
</section>
```

## Article `<article>`

The `<article>` tag represents a self-contained piece of content that could be distributed and reused independently.

```html title="article.html"
<article>
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
</article>
```

## Aside `<aside>`

The `<aside>` tag is used for content tangentially related to the main content, such as sidebars, pull quotes, or advertisements.

```html title="aside.html"
<aside>
    <h3>Related Articles</h3>
    <ul>
        <li><a href="/article1">Article 1</a></li>
        <li><a href="/article2">Article 2</a></li>
    </ul>
</aside>
```

## Footer `<footer>`

The `<footer>` tag represents a footer for its nearest section or the document as a whole. It typically contains authorship information, copyright notices, and links to related documents.

```html title="footer.html"
<footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>
```

Using semantic HTML elements like these enhances the clarity and structure of your web documents, making them more accessible to both users and search engines.

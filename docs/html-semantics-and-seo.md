---
sidebar_position: 20
keywords: [html, sample html, basic html]
---

# HTML Semantics and SEO

HTML semantics refer to the use of HTML elements to convey meaning and structure to both browsers and search engines. Proper use of semantic elements can improve the accessibility and search engine ranking of your website.

## Semantic Elements

HTML5 introduced several semantic elements that provide meaning to the content structure.

### `<header>`

```html title="header.html"
<header>
    <h1>Welcome to My Website</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
```

### `<article>`

```html title="article.html"
<article>
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
</article>
```

### `<section>`

```html title="section.html"
<section>
    <h2>Section Title</h2>
    <p>Section content goes here...</p>
</section>
```

## Semantic HTML5 Tags

Using semantic HTML5 tags can improve the structure and readability of your code, making it easier for search engines to understand your content.

### `<main>`

```html title="main.html"
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here...</p>
    </article>
</main>
```

### `<footer>`

```html title="footer.html"
<footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>
```

### `<nav>`

```html title="nav.html"
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/services">Services</a></li>
    </ul>
</nav>
```

## SEO Best Practices

Improving your website's search engine optimization (SEO) involves optimizing various HTML elements for better visibility and ranking in search engine results pages (SERPs).

### Title Tag

```html
<head>
    <title>My Website - Home</title>
</head>
```

### Meta Description

```html
<meta name="description" content="Welcome to My Website. Learn about our products and services.">
```

### Heading Tags

```html
<h1>My Website</h1>
<h2>About Us</h2>
<h3>Our Products</h3>
```

### Alt Attribute for Images

```html
<img src="image.jpg" alt="Description of the image">
```

### Proper Use of Links

```html
<a href="/about">About Us</a>
<a href="/contact">Contact Us</a>
```

### Schema.org Markup

```html
<div itemscope itemtype="https://schema.org/LocalBusiness">
    <h1 itemprop="name">My Business</h1>
    <p itemprop="description">Description of my business.</p>
    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        <span itemprop="streetAddress">123 Main Street</span>,
        <span itemprop="addressLocality">City</span>,
        <span itemprop="addressRegion">State</span>
    </div>
</div>
```

By incorporating semantic HTML elements and following SEO best practices, you can improve the accessibility, readability, and search engine ranking of your website.

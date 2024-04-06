---
sidebar_position: 18
keywords: [html, sample html, basic html]
---

# Accessibility in HTML

Ensuring accessibility is essential for making web content usable by people with disabilities. HTML provides several features and best practices to improve accessibility and ensure inclusivity for all users.

## Semantic Elements

Using semantic HTML elements properly helps screen readers and other assistive technologies understand the structure and context of the content.

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

### `<main>`

```html title="main.html"
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here...</p>
    </article>
</main>
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

## ARIA Roles and Attributes

The Accessible Rich Internet Applications (ARIA) specification provides additional attributes to enhance the accessibility of HTML elements.

### `role` Attribute

```html
<div role="navigation">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/services">Services</a></li>
    </ul>
</div>
```

### `aria-label` Attribute

```html
<button aria-label="Close">X</button>
```

## Form Accessibility

Forms should be accessible to users with disabilities, providing clear labels and error messages.

### Labeling Inputs

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

### Error Messages

```html
<input type="email" id="email" name="email" required aria-describedby="email-error">
<span id="email-error" role="alert">Please enter a valid email address</span>
```

## Keyboard Accessibility

Ensure all interactive elements can be accessed and operated using the keyboard alone.

### Focus Styles

```css
:focus {
    outline: 2px solid blue;
}
```

### Tabindex Attribute

```html
<div tabindex="0">Focusable Div</div>
```

## Testing and Validation

Regularly test your website with screen readers and other assistive technologies to ensure it's accessible to all users.

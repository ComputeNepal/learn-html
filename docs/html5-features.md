---
sidebar_position: 17
keywords: [html, sample html, basic html]
---


# HTML5 Features

HTML5 introduces several new features and improvements over previous versions, enabling developers to create more dynamic, interactive, and accessible web applications.

## Semantic Elements

HTML5 introduces new semantic elements that provide clearer structure and meaning to web content, enhancing accessibility and SEO.

### `<header>`

Represents introductory content or navigation links at the beginning of a document or section.

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

Represents a self-contained piece of content that could be distributed and reused independently.

```html title="article.html"
<article>
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
</article>
```

### `<section>`

Defines a thematic grouping of content, typically with a heading.

```html title="section.html"
<section>
    <h2>Section Title</h2>
    <p>Section content goes here...</p>
</section>
```

## Form Enhancements

HTML5 introduces several new form elements and attributes to improve form usability and user experience.

### `<input>` types

HTML5 adds new input types like `email`, `url`, `tel`, `date`, `number`, and `color` for better data validation and user interface.

```html title="input-types.html"
<input type="email" name="email" placeholder="Enter your email">
<input type="date" name="birthdate">
<input type="color" name="favorite-color">
```

### `required` Attribute

Specifies that an input field must be filled out before submitting the form.

```html title="required-attribute.html"
<input type="text" name="fullname" required>
```

## Multimedia

HTML5 introduces native support for audio, video, and graphics without the need for third-party plugins.

### `<audio>`

Embeds audio content into a web page with built-in controls.

```html title="audio.html"
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### `<video>`

Embeds video content into a web page with built-in controls.

```html title="video.html"
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

## Canvas

The `<canvas>` element allows for dynamic, scriptable rendering of 2D shapes and bitmap images.

```html title="canvas.html"
<canvas id="myCanvas" width="200" height="100"></canvas>
```

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 80);
```

## Local Storage

HTML5 introduces the `localStorage` object for storing key-value pairs locally in the browser.

```javascript
localStorage.setItem('username', 'john_doe');
var username = localStorage.getItem('username');
```

HTML5 brings a wealth of new features and enhancements that empower developers to create more powerful and engaging web applications.

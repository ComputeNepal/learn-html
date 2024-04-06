---
sidebar_position: 22
keywords: [html, sample html, basic html]
---


# HTML Frameworks and Libraries

HTML frameworks and libraries provide pre-designed and reusable components to streamline the process of building responsive and visually appealing web applications. These tools offer a foundation of CSS and JavaScript resources that simplify the development process and ensure consistency across projects.

## Bootstrap

Bootstrap is one of the most popular HTML, CSS, and JavaScript frameworks for building responsive and mobile-first web projects. It provides a wide range of components, such as navigation bars, buttons, forms, and modal dialogs, along with a responsive grid system.

```html title="bootstrap-example.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Example</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>Hello, Bootstrap!</h1>
        <button class="btn btn-primary">Click me</button>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
```

## Foundation

Foundation is a responsive front-end framework developed by ZURB. It offers a comprehensive set of customizable UI components, including grids, navigation menus, buttons, and forms, along with built-in accessibility features.

```html title="foundation-example.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foundation Example</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/css/foundation.min.css">
</head>
<body>
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell">
                <h1>Hello, Foundation!</h1>
                <button class="button primary">Click me</button>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/js/foundation.min.js"></script>
</body>
</html>
```

## Semantic UI

Semantic UI is a development framework that uses human-friendly HTML to create responsive and intuitive user interfaces. It provides a variety of UI components and themes, along with a concise and readable syntax.

```html title="semantic-ui-example.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic UI Example</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
</head>
<body>
    <div class="ui container">
        <h1 class="ui header">Hello, Semantic UI!</h1>
        <button class="ui primary button">Click me</button>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
</body>
</html>
```

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes to style your HTML directly. It enables rapid development and allows for easy customization without writing custom CSS.

```html title="tailwind-css-example.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Example</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mx-auto">
        <h1 class="text-4xl font-bold">Hello, Tailwind CSS!</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me</button>
    </div>
</body>
</html>
```

## Bulma

Bulma is a modern CSS framework based on Flexbox. It offers a clean and modular architecture with a set of responsive and customizable components, making it easy to create beautiful and consistent web interfaces.

```html title="bulma-example.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulma Example</title>
    <
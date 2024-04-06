---
sidebar_position: 16
keywords: [html, sample html, basic html]
---

# HTML Forms Handling

Handling forms in HTML involves collecting user input and submitting it to a server for processing. Understanding different attributes and methods associated with HTML forms is crucial for creating interactive and functional web applications.

## Form Submission

Forms can be submitted using two HTTP methods: `GET` and `POST`.

### GET Method

The `GET` method submits form data as URL parameters. It's suitable for small amounts of data and retrieving information.

```html title="get-form.html"
<form action="/submit-form.php" method="get">
  <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>
```

### POST Method

The `POST` method submits form data in the request body. It's suitable for sensitive or large amounts of data.

```html title="post-form.html"
<form action="/submit-form.php" method="post">
  <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>
```

## Form Elements

HTML provides various form elements to collect different types of user input.

### Text Input

```html
<input type="text" name="username" />
```

### Password Input

```html
<input type="password" name="password" />
```

### Checkbox Input

```html
<input type="checkbox" name="subscribe" value="1" />
```

### Radio Input

```html
<input type="radio" name="gender" value="male" />
<input type="radio" name="gender" value="female" />
```

### Select Dropdown

```html
<select name="country">
  <option value="usa">United States</option>
  <option value="uk">United Kingdom</option>
</select>
```

### Textarea

```html
<textarea name="message"></textarea>
```

## Form Validation

HTML5 introduced built-in form validation attributes to ensure data integrity and improve user experience.

### Required Attribute

```html
<input type="text" name="fullname" required />
```

### Pattern Attribute

```html
<input type="text" name="zipcode" pattern="\d{5}" />
```

## Client-Side Scripting

You can use JavaScript to enhance form functionality and perform client-side validation.

```html
<script>
  function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }
</script>

<form name="myForm" onsubmit="return validateForm()">
  <input type="email" name="email">
  <input type="submit" value="Submit">
</form>
```

## Server-Side Processing

After form submission, the data is typically processed on the server using server-side scripting languages like PHP, Python, or Node.js.

```php
<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Process form data...
?>
```

Understanding these concepts and techniques allows you to create robust and interactive forms that efficiently collect and process user input in web applications.

---
sidebar_position: 13
keywords: [html, sample html, basic html]
---

# HTML Forms

HTML forms are integral for user interaction on the web. They allow users to input data and interact with web applications. Below, we'll cover various aspects and attributes related to HTML forms.

## Form Structure

Forms are enclosed within `<form>` tags and consist of various input elements.

```html
<form action="/submit-form.php" method="post">
  <!-- Form fields will be here -->
</form>
```

### Action Attribute

The `action` attribute specifies where to send the form-data when submitted.

### Method Attribute

The `method` attribute defines the HTTP method for sending form-data.

## Input Elements

Input elements are fundamental for gathering user input.

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

### File Input

```html
<input type="file" name="file" />
```

## Select Dropdowns

Select elements are used for dropdown lists.

```html
<select name="country">
  <option value="usa">United States</option>
  <option value="uk">United Kingdom</option>
</select>
```

### Multiple Selection

```html
<select name="colors" multiple>
  <option value="red">Red</option>
  <option value="green">Green</option>
</select>
```

## Buttons

Buttons trigger actions within forms.

### Submit Button

```html
<button type="submit">Submit</button>
```

### Reset Button

```html
<button type="reset">Reset</button>
```

### Custom JavaScript Action

```html
<button onclick="myFunction()">Click me</button>
```

## Form Attributes

Various attributes enhance the functionality of forms.

### Name Attribute

The `name` attribute identifies form data when submitted.

### Value Attribute

The `value` attribute sets initial values for input fields.

### Required Attribute

```html
<input type="text" name="fullname" required />
```

### Placeholder Attribute

```html
<input type="text" name="username" placeholder="Enter your username" />
```

### Disabled Attribute

```html
<input type="text" name="city" disabled />
```

## Form Layout

Proper layout enhances form usability and aesthetics.

### Fieldset and Legend

```html
<fieldset>
  <legend>Contact Information</legend>
  <!-- Form fields here -->
</fieldset>
```

### Label Element

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

### Grouping Controls

```html
<fieldset>
  <legend>Payment Method</legend>
  <!-- Radio buttons or other inputs -->
</fieldset>
```

## Accessibility

Ensuring forms are accessible is essential for users with disabilities.

### Labeling Inputs

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

### ARIA Roles

```html
<input type="text" name="search" role="searchbox" />
```

## Conclusion

HTML forms are versatile tools for collecting user data and interacting with web applications. Understanding the various input elements and attributes allows developers to create intuitive and user-friendly forms.
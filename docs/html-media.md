---
sidebar_position: 15
keywords: [html, sample html, basic html]
---

# Media in HTML

HTML provides various elements to embed media content such as images, audio, and video into web pages. Utilizing these elements allows you to enhance the visual and auditory experience for your website visitors.

## Image `<img>`

The `<img>` tag is used to embed images into a web page. It is a self-closing tag and requires the `src` attribute to specify the image file's URL.

```html title="image.html"
<img src="image.jpg" alt="Description of the image">
```

## Audio `<audio>`

The `<audio>` tag is used to embed audio content into a web page. It supports various audio formats such as MP3, OGG, and WAV. You can use the `controls` attribute to add audio controls like play, pause, and volume.

```html title="audio.html"
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

## Video `<video>`

The `<video>` tag is used to embed video content into a web page. Like the `<audio>` tag, it supports multiple video formats and can also have controls added using the `controls` attribute.

```html title="video.html"
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

## Picture `<picture>`

The `<picture>` tag allows you to define multiple image sources based on different conditions such as screen size or device resolution. This helps in delivering the most appropriate image for the user's device.

```html title="picture.html"
<picture>
  <source srcset="image-large.jpg" media="(min-width: 1024px)">
  <source srcset="image-medium.jpg" media="(min-width: 768px)">
  <img src="image-small.jpg" alt="Description of the image">
</picture>
```

## Embed `<embed>`

The `<embed>` tag is used to embed external content such as plugins, interactive media, or other non-HTML content into a web page. It requires the `src` attribute to specify the URL of the content.

```html title="embed.html"
<embed src="plugin.swf" type="application/x-shockwave-flash">
```

## Iframe `<iframe>`

The `<iframe>` tag is used to embed another HTML document within the current document. It's commonly used for embedding maps, social media content, or other web pages.

```html title="iframe.html"
<iframe src="https://www.youtube.com/embed/video-id" width="560" height="315" frameborder="0" allowfullscreen></iframe>
```

By utilizing these HTML elements, you can seamlessly integrate various media types into your web pages, enriching the user experience and making your content more engaging and interactive.

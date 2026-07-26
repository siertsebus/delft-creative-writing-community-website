# Delft Creative Writing Group

A one-page static site for the Delft Writing Group. Plain HTML, CSS and JavaScript
— no build step, no dependencies.

## Structure

```
index.html          the whole page
css/styles.css      styling and design tokens
js/main.js          entry point, page setup
js/hero-image.js    shows the hero image or its placeholder
assets/             images
```

## Adding the header image

Save the picture as `assets/hero.jpg`. It appears automatically. Until then, a
plain "Image coming soon" box is shown instead of a broken image.

Landscape works best (roughly 3:2). Around 1600px wide is plenty; anything much
larger just makes the page slower to load.

## Viewing it locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Editing the text

All the text lives directly in `index.html` inside `<section class="prose">`.
Edit it there; no templating involved.

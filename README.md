# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) alongside with [Build a Multi-Page Webiste with HTML and CSS on Scrimba](https://scrimba.com/build-a-space-travel-website-c014).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Screen shot of Challenge](./public/static/images/screenshot/Screenshot%202025-09-09%20at%2012.28.11 PM.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/ajkendal/frontend-mentor-space-tourism)
- Live Site URL: [Amanda Kendal-Brown | Frontend Mentor Space Tourism](https://frontend-mentor-space-tourism-eight.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Figma](https://www.figma.com/) - Design & prototyping tool
- [Vercel](https://vercel.com/) - Platform for frontend deployment & hosting

### What I learned

While working with `display: grid` on the `<body>` element, I ran into an issue where the grid would not expand to cover the full viewport. To resolve this, I created a `.page` class and applied it to the outer `<div>` of each page. Although it felt redundant to duplicate styles between the `body` and `.page`, this approach was the only reliable way I found to achieve full-page grid layouts in a Next.js/React environment.

```css
body,
.page {
  font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  line-height: 1.5;
  min-height: 100vh;

  display: grid;
  grid-template-rows: min-content 1fr;
  background-size: cover;
  background-position: bottom center;
}
```

## Author

- Website - [Amanda J Kendal-Brown](https://ajkendal.github.io/)
- LinkedIn - [@akendalb](https://www.linkedin.com/in/akendalb)
- GitHub - [@ajkendal](https://github.com/ajkendal/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ajkendal)
- Scrimba - [@ajkendal](https://scrimba.com/@ajkendal)

## Acknowledgments

This project is based on the **Space Tourism Challenge** provided by [Scrimba](https://scrimba.com) and [Frontend Mentor](https://www.frontendmentor.io).
Special thanks to both platforms for supplying such a fun and engaging challenge.

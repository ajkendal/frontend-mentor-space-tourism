# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) alongside with [Build a Multi-Page Webiste with HTML and CSS on Scrimba](https://scrimba.com/build-a-space-travel-website-c014).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

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

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

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

# jencorbett.dev

This is my personal web app project [jencorbett.dev](https://jencorbett.dev), bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [deployed with vercel](https://github.com/ajenstory/portfolio/deployments).

As you can see, this is **very much** a work-in-progress, :flushed: but here's what's currently happening with it:

## Specs and features

- **Architecture**: [JamStack](https://jamstack.org/)
- **Framework**: [Next.js](https://nextjs.org/)
- **UI Theme**: [Next Themes](https://github.com/pacocoursey/next-themes)
- **Data fetching**: [React Hooks for Data Fetching](https://swr.vercel.app/)
- **Content SDK**: [ContentLayer](https://www.contentlayer.dev/)
- **Site Deployment**: [Vercel](https://vercel.com)
- **Spotify Web Api**: [Spotify](https://developer.spotify.com/documentation/web-api)

## TODO list
- fix code style issues and remove unused variables
- fix and improve ui accessibility
- set up tests with Jest, React Testing Library and msw
- implement testing and error handling in spotify player
- implement content-layer in main
- implement blog in main 
- implement projects page in main with image loading optimisation
- improve and optimise / refactor css, animations etc
- implement full colour theme
- add resume :blush:

## Credits and inspiration

- **style**:

  - [create next app](https://nextjs.org/docs/api-reference/create-next-app)

- **blog**:

  - [nextjs blog tutorial](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website)
  - [content layer blog tutorial](https://www.contentlayer.dev/docs/getting-started)

- **Dark Mode Button**:

  - [Alireza M - Dark & light mode button](https://codepen.io/alireza82/pen/poRqBOq)

- **Spotify API**:
  - [How to show Now Playing in Spotify with Next.js - Theodorus Clarence](https://theodorusclarence.com/blog/spotify-now-playing)
  - [How to use Spotify API with Next.js - Jatin Sharma](https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5)
  - [Next js beginner tutorial using spotify API - Salma Alam-Naylor](https://whitep4nth3r.com/blog/next-js-beginner-tutorial-using-spotify-api/)

## Using this code

If you are taking inspiration from this setup please review the licence and remove all personal information (name, blog posts, images, etc.).

I don't take any responsibility for the code in its current state. It is a project and I am still learning as I go. Be kind. Learn well, and credit where credit is due.

## Running locally

First, switch to the app directory.
Then run the development server:

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

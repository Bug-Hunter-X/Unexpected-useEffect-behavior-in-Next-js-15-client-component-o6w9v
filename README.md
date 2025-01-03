# Next.js 15 useEffect Hook Unexpected Behavior

This repository demonstrates an unusual behavior observed in a Next.js 15 application when using the `useEffect` hook within a client component. The `useEffect` hook logs messages upon mounting and unmounting, but these messages are logged even during the initial render, which is unexpected.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Observe the console logs.  You'll see that the component's mount and unmount messages are printed during initial render, indicating that the component is being unmounted and remounted when it shouldn't.

## Expected Behavior

The `useEffect` hook's cleanup function should only be called when the component is actually unmounted from the DOM.  In this case, we expect the 'Component unmounted' log to appear only when the component is removed from the page, not on the initial render.

## Actual Behavior

The `useEffect` hook's cleanup function is called immediately after the component's initial render. This is unexpected and suggests potential issues with how the component lifecycle is managed within Next.js 15.

## Possible Solutions (See bugSolution.js)

The issue could be related to how the component is being rendered or updated in Next.js 15's new App Router.  Possible solutions are explored and implemented in `bugSolution.js`.
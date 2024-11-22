# React Router Project

This project demonstrates the use of React Router to create a multi-page React application. The app includes features like route nesting, dynamic routes, and data loading using `loader` functions.

## Features

- **Nested Routes**: Uses `Layout` as a common layout for pages like `Home`, `About`, and `Contact`.
- **Dynamic Routes**: Supports dynamic routes for user-specific pages (`/user/:userid`).
- **Loader Functionality**: Fetches data dynamically for the GitHub page using a loader (`githubInfoLoader`).


---

## Available Routes

1. `/` - **Home** page.
2. `/about` - **About** page.
3. `/contact` - **Contact** page.
4. `/user/:userid` - **Dynamic User** page.
5. `/github` - **GitHub Info** page (uses `githubInfoLoader`).
___

## `Layout` Component

The `Layout` component in this project provides a consistent structure across all pages. It acts as a wrapper for the application's main content, ensuring that common elements like the header and footer are present on every route.

---

### Component Code

```jsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
```
_ _ _
## What is `Outlet`?

The `<Outlet>` in React Router is like a **placeholder** for the content of child routes. It allows you to create a layout (e.g., a header, footer, or sidebar) that stays the same across different pages, while the middle part (the child route) changes based on the current route.

---

### Simple Example

Imagine a website with a **header**, a **footer**, and different pages like **Home**, **About**, and **Contact**. The header and footer stay the same, but the content in the middle changes. That’s where `<Outlet>` comes in!
___

## Use of `githubInfoLoader`

The `githubInfoLoader` is a data loader function used with React Router. It allows you to fetch data before rendering a component, ensuring that the necessary information is available when the component is displayed.

---


### `githubInfoLoader` Implementation

The `githubInfoLoader` function is designed to fetch GitHub-related information (e.g., user data, repositories, etc.) and provide it as props to the `Github` component.

Here's an example implementation:

```jsx
// Example githubInfoLoader.js
    export async function githubInfoLoader() {
    const response = await fetch('https://api.github.com/users/exampleUser');

    return response.json(); // Returns the GitHub user data
}
```

## Key Code Highlights

### Setting up the Router (METHOD - 1)

```jsx
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='user/:userid' element={<User/>}/>
            <Route 
                loader={githubInfoLoader}
                path='github'
                element={<Github/>}
            />
        </Route>
    )
);
```
### Setting up the Router (METHOD - 2)

```jsx
const router = createBrowserRouter([
    {
        path: '/', // main path
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home/>
            }, 
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            }
        ]
    }
])
```
___
## What is `RouterProvider` in React Router?

The `RouterProvider` is a React Router component that helps manage your app's routing. It connects your app to the routes you've defined and makes sure the right page (component) is shown based on the current URL.

---

### Basic Usage

#### 1. Create a Router

To start, create a router. Think of this as the "map" for your app. It tells React Router which component to show for each URL.

```jsx
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

// Define the routes
const router = createBrowserRouter([
    {
        path: '/', // The root URL ("/")
        element: <Home />, // Show the Home component here
    },
    {
        path: '/about', // The URL "/about"
        element: <About />, // Show the About component here
    },
]);
```
#### 2. Use `RouterProvider` to Supply the Router

After creating your router, you need to tell your app how to use it. This is done by wrapping your app with the `RouterProvider` and passing your `router` as a prop.

---

### Example Code

```jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';

// Assume we already created a router
function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
```

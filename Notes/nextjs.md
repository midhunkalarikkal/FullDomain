# `Next.js`
===============
It uses react for building user interfaces
Provides additional features that enable you to build production ready applications.
These features includes file based routing, optimized rendering, date fetching, bundling, compiling, styling, Api routing,


# `Creating Nextjs app`
========================
npx create-next-app@latest


# `React Server Components`
============================
React server compoenents is a new architechture that introduced by hte react team and quickly adopted by Next.js

This architechture introduces a new approach to creating react compoenents by dividing them in two distinct  types

-Server Components
-Client Components

Server Components
-------------------
By default Next.js tereats all compoenents as server compoenents

These components can perform server side tasks like reading files or fetching data directly from a databse

But they cant use React hooks or handle user interaction


Client Components
--------------------
To create a client compoenent, we need to add the "use  client" directive at the top of the compoenent file.

While client compoenent cant perform server side tasks like reading files, they can use hooks and handle user interactions


# `Exporting`
=============
Next.js looks for default exports in page.tsx or layout.tsx files to render the route.

so from page.tsx file we need to export default function functionName, not as like export default { functionName}

Because

If we export like 

export default function functionName () {...}

or

function functionName () {...}
export default functionName

the routing can simply access the compoenent or page directly by the funtionName like -> import functionName from './pathname'

This works because Next.js knows how to pick up the default exported component and render it as the route.

if we export like

function Page() {
  return <h1>Hello World</h1>;
}

export default { Page };

This exports an object with Page inside it, not the component itself. So Next.js can't auto-detect it as the route component.

the routing cant directly access the page or component 
only accessible by importing an object from the path andme the calling the funtionNamwe like object.functionName

in Next.js we cant export the pages like this but can export the small compoenent and then we need to import them in the page and the default export the page


# `Routing`
==============
Next.js has a file system based routing system
URLs we can access in our browser are determined by how we organize our files and folders in our code


# `Layout ile`
===============
The layout file will automatically create while we access the root route, if we delete it.


# `Routing Convention`
=======================
All routes must live inside app app folder in the src directory

Route files must be named either page.jsx or page.tsx

Each folder represents a segment of the URL path

When these conventions are followed, the file automatically becomes available as a route

routing
-------
app/                   ← 🌐 Base App Directory (starts at '/')
│
├── page.tsx           ← Renders the homepage ('/')
│
├── about/
│   └── page.tsx       ← Renders '/about'
│
├── profile/
│   └── page.tsx       ← Renders '/profile'
│
├── blog/              ← Parent route: '/blog'
│   ├── page.tsx       ← Optional: Renders '/blog'
│   ├── first/
│   │   └── page.tsx   ← Renders '/blog/first'
│   └── second/
│       └── page.tsx   ← Renders '/blog/second'
│
├── products/
│   └── page.tsx       ← Renders '/products'
│
└── [productId]/       ← Dynamic route: matches any slug like '/abc123'
    └── page.tsx       ← Renders '/:productId'

In Next.js App Router, the parameters (params) passed to a server component or page might sometimes come as a promise (especially if you’re doing some advanced routing or loading them asynchronously). But typically, it's not a Promise by default


# `Catch all Segments`
========================
Keeping all the dynamic routes inside a single folder

create a docs folder inside apps folder

create "[...slug]" named folder inside docs folder

create a page.tsx file inside [...slug] named folder

which will maintain the url which is having /docs path

Which is use full for documentation websites

example routing
----------------
Feature 1
	content 1
	content 2
	content 3
Feature 2
	content 1
	content 2
	content 3
Feature 3
Feature 4
Feature 5

now we will get a an error page for /docs only url path

but we can make the slug segments optional by updating the "[...slug]" filename to "[[...slug]]" wrap the slug file name inside another r array.

So if we do like this the /docs only path will show the default page like the else block statement of the conditional block


# `Not Found Page`
====================
For creating a not found page we can create a file in the app folder with name "not-found.tsx" this will act as the global not found page

this will be imported as names import from next/navigation

And also we create custom not found pages for each route liek inside reviews or products, and then we call the notFound() function in the compoenent it will trigger the immediate not found from the same location if exist, otherwise it will trigger the global not found page.

By default we cant directly call params in the not found page, we need to use usePathname hook from next/navigation

And for using the usePathanem we need to make our component also a client compoenent by specifying a 'use client' directive, because by default all the compoenents in Next.js is server side component


# `File Colocation`
=====================
Putting all route-related files (components, styles, metadata, loading UI, etc.) inside the same folder as the page.tsx.

Each route is a folder, and inside that, you colocate everything needed for that route.

Keeps your project organized by features/routes, not by file types.

Reduces global imports — you can use relative imports within the same route folder.

example
--------
app/
└── products/
    ├── page.tsx         ← main route file
    ├── ProductCard.tsx  ← local component (specific to this page)
    ├── styles.css       ← page-specific CSS
    ├── loading.tsx      ← loading state for this route
    ├── error.tsx        ← error boundary for this route
    └── metadata.ts      ← route-specific metadata

# `Private Folder`
==================
A way to tell Next.js hey this folder is just for internal stuff-dont include it in the routing system

the folder and all its subfolders are excluded from routing

To create a private folder we need to add and underscore _ at the beginning of the folder name.

if we create a page.tsx file inside the private folder and we try to access that route, Next.js will return the global not found page


# `Route Group`
====================
Route Groups are folder names wrapped in parentheses ( ) used only to organize your folders without affecting the URL structure (route path).

so if we move the folders login register forotpassword in to `(auth)` named folder we can make a group but the url will not include the auth folder name

This is used for organizing the related routes


## `Nested Layout` ##
======================
We can create a layout.tsx file inside a id folder and call childre as params

Here the page.tsx will be the children of layout.tsx







===============
## `STEPS` ##
===============

1. Create a next.js application using `npx create-next-app@latest routing-demo`

2. deleted the app folder and created one

3. create a page.tsx file and inside it create a Home functional component with default export

    home page root route / `localhost://3000`

4. run the app with npm run dev, and accessed the localhost://300, while the app created the layout.tsx

5. `Routes` Create a aboute route and profile route

    `localhost://3000/about` and `localhost://3000/profile`

    5. 1. Create an about folder with page.tsx file and defaut export a About functional compoenent
    5. 2. Create a profile folder with page.tsx file and default export a Profile  functional component

6. `Nested Routes` Create nested routes

    `localhost://3000/blog` , `localhost://3000/blog/first` , `localhost://3000/blog/second`

    6. 1. Create a blog named folder in the app folder with a page.tsx file and default export a Blog functional compoenent, this will help to create the `/blog` route
    6. 2. Create a first named folder inside the blog foldew with a page.tsx and default export a First functional compoenent, this will help to create the `/blog/first` route
    6. 3. Create a second named folder inside the blog foldew with a page.tsx and default export a Second functional compoenent, this will help to create the `/blog/Second` route

7. `Dynamic Routes` Create dynamic routes

    `localhost://3000/products` show the products list
    `localhost://3000/products/id` show the product Details
    `localhost://3000/products/1` show the product 1 details
    `localhost://3000/products/2` show the product 2 details

    for achieving this we can use the previous techniq the nested routing like we can create different folders isndie the products folder for the produtId 1, 2, 3, 4, 5 so what if there are a 100 or millions of products, so we cant create an maintain the individual folders, there is the use of dynamic folder

    7. 1. Create a products folder with a page.tsx and default export a ProductsList functional component this will provide the `localhost://3000/products` route
    7. 2. Create a `[productId]` named folder inside the products folder with a page.tsx and default export a ProductDetail functional compoenent

    So now if we access any route after the `/products/*` will be served by the page.tsx inside the `[productId]` folder
    this is the dynamic folder wil handles the dynamic routing

8. `Nested Dynamic Routes` Create nested dynamic routes

    `localhost://3000/products/1` will give the product 1 details page [dynamic route]
    `localhost://3000/products/1/reviews/1` this will give yout the first review of the product 1
    `localhost://3000/products/1/reviews/2` this will give you the second review of the product 1
    
    8. 1. Create reviews folder inside the [productId] folder with a default export ProductReviews functional compoenent, this will serve the `localhost://3000/products/1/reviews`
    8. 2. Create a `[reviewId]` named folder inside the reviews folder witha a page.tsx and default export a Product review functional compoenent, this will serve any route that `localhost://3000/products/1/reviews/*`

9. `Catch-all-segments` 

    `localhost://3000/docs/feature1/concept1`
    `localhost://3000/docs/feature1/concept2`
    `localhost://3000/docs/feature1/concept3`
    `localhost://3000/docs/feature1/concept4`

    like this if we have 20 features and for each 20 features which is having 20 concepts it will be 400 routes, what if after the concept it is having another route for example /example1, it will mess up the routing

    so here is the `[...slug]` named folder comes to picture

    9. 1. Create a `docs` named folder in the app folder
    9. 2. Create a `[...slug]` named folder inside the docs folder with a page.tsx file with some default export functional compoenent
    9. 3. If we access any url that starts with docs it will show the page.tsx file in the `[...slug]` named folder
        for example `localhost://3000/docs/feature`
    9. 4. So that using the params we can retrieve the feature id, concept id example id and fetch the data from the databse and then we can show it
    9. 5. But if we access `localhost://3000/docs` it will show the default 404 error page of nextjs
    9. 6. If we need to show the home page which accessing the `localhost://3000/docs` we can wrap the `[...slug]` foldername again inside a square brackets liek `[[...slug]]`
    
10. `Custom Not Found Page`

    10. 1. Create a `not-found.tsx` named file in the app folder and default export a NotFOund functional component and this will show instead of the next.js default 404 page when we access invalid not found urls

    10. 2. Created a `not-found.tsx` named file in the the reviewId folder for specific not found page for reviewId and added a condition for checking using params, and used `notFound()` from next/navigation to trigger the specific `not-found1 page for the test condition

    10. 3. In the `not-found.tsx` page we cant use params, So for getting the params we need to use `usePathname` hook from `next/navigation` and extract the params;

11. `File Colocation`

    10. 1. Created a `dashboard` named folder and inside it created a `line-chart.tsx` file but this will not make the `/dashboard` url accessible for that we need tocreate a `page.tsx` file and default a functional compoenent.

    10. 2. So the other tsx file we creating inside the folder can be used for small compoenents that is used by the `page.tsx` file

12. `Private Folder`

    12. 1. Private  folders are used to tell Next.js, Hey this folder is just for internal stuff, not include in the routing system

    12. 2. The folder and its subfolders will be excluded from the routing system

    12. 3. To create an `Private Folder` we need to add an `underscore _` in the begining of the folder anem

    12. 4. We can use this private folder for groupoing the ul logic or something like that

13. `Route Grouping`

    13. 1. Create three folders `register login and forgot-password` with theri own page.tsx files.

    13. 2. Move these folders to an `auth` named folder, now the urls will be 
        `localhost://3000/auth/register`
        `localhost://3000/auth/login`
        `localhost://3000/auth/forgot-password`
    
    13. 3. Then we wrap the `auth` named folder in a parenthesis like `(auth)` this will make the `register login and forgot-password` in toa auth routing group and remove the `/auth` from the url, now the urls will be
    `localhost://3000/register`
    `localhost://3000/login`
    `localhost://3000/forgot-password`

    13. 4. It also helps us to create multiple root layout for different routing groups like auth route group, customer route group, provider route group, admin route route group

14. `Layout`

    14. 1. The `layout.tsx` file in the app folder is the file that render the ui page

    14. 2. The `page.tsx` file in the app folder is the children that goes to the `layout.tsx` file in the root route

    14. 3. When we access any other route the children in the `layout.tsx` file will be replaced with that routes `page.tsx` file

    14. 4. Create a custom `layout.tsx` for the `[productId]` folder

15. `Multiple Root Layout`

    15. 1. We can create multiple route layout for differnet route groups

    15. 2. Create two folders `(aut)` and `(marketing)` route groups

    15. 3. In `(auth)` route group there will be routes like register login and a `layout.tsx` file and in the `(marketing)` route group there will be routes like customer products `layout.tsx` file and `page.tsx` like that

    15. 4. remove the `layout.tsx` and `page.tsx` file from the root directory and add them in the `(auth)` and `(marketing)` route groups with custome layouts

    15. 5. So now we access the root route the page.tsx in the `(marketing)` route group will be show this is because only the `(marketing)` route group have the page.tsx file for layout.tsx not in the `(auth)` route group

    15. 6. If we access `localhost://3000/` show the `(marketing)` route groups `page.tsx` file with its `layout.tsx` file

    15. 7. If we access `localhost://3000/register` show the `(auth)` route groups `layout.tsx` with register folders `page.tsx` file

16. `Routing Metadata`

    16. 1. The metadata API in Next.js is a powerfull feature that  lets us define metadata for each page

    16. 2. Metadata ensures our content looks great when its shared or indexed by search engines

    16. 3. Two ways to handle metadata in layout.tsx file or page.tsx file

        16. 3. 1. Export a static metadata object

        16. 3. 2. export a dynamic generateMetadata function

    `Metadata Rules`
    ----------------

    16. 4. Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all its pages, ehile page metadata is specific to that page

    16. 5. Metadata follows a top-down order, starting from the root level

    16. 6. When metadata exist in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties

    16. 7. Metadata will not work with pages which is having `use client` directive

    `Title Metadata`
    ---------------

    16. 8. We can add metaData title as a string or an object

    16. 9. If we are using an object the object will have three properties, `default`, `template` and `absolute`

    16. 10. `default` is used for the fallback title like it will show for all routes that doesnt have an title

    16. 11. `template` is used for pre or post string for the titles

        for example : template: "%s | AppName" for post and template : "AppName | %s" for pre titles

    16. 12. `absolute` is for making a string as the title of the page just like a simple title

17. `Link`

    17. 1. Is a component that is used to navigate to another page using `href` attribute and also if we use `replace`
    attribute in the link compoenent the previos history will be removed and then if we click the back button we will go to the home page.

18. `Active Links`

    18. 1. Created a `(auth)` route group gor login register and forgot password and create a layout for the `(auth)` route group and by using usePathname hook implemented the active link

19. `Params and SearchParams`

    19. 1. `Params` is a promise  that resolves to an object containing the dynamic route parameters (like id)

    19. 2. `SearchParams` is a promise that resolves to an object containing the query parameters(like filters and sorting)

    19. 3. Created an `articles` folder and then `[articleId]` folder for trying this scenario

    19. 4. in the server compoenents we can use asyn await for the params and searcParams resolving and in the client compoenents we need to use `use` hook from the react.

    19. 5. While page.ts has access to both params and searchParams and the layout.tsx only has to access the params

20. `Navigatin programmatically`

    For eaxmple: if we place an order , we need to redirect to another page with new content

    20. 1. By using `useRouter` from next/navigation and creating an instance and can push and pass the route to which we want to navigate, and also we can use redirect method from next/navigation

21. `Templates`

    20. 1. `Templates` are similar to layouts because they allow you to share common UI between multiple pages in your app. For example, you might have the same header or sidebar across different pages.

    20. 2. However, when a user navigates between pages that use the same template, the page is treated as a completely new load.

        20. 2. 1. a new template component instance is mounted
        20. 2. 2. DOM elements are recreated
        20. 2. 3. State is cleared
        20. 2. 4. effects are re-synchronized
    
    20. 3. Can create a template by exporting a default React component from a file named template.js or template.tsx inside the route folder.

    20. 4. Just like layouts, templates should accept a children prop so that the nested pages can be displayed inside the template.

22. `Loading UI`

    shimmer or skeleton

23. `Error handling`

    23. 1. It automatically wraps route segments and their nested children in a React Error Boundary

    23. 2. Can create custom error UI's for specific segments using the file system hierarchy

    23. 3. It isolates errors to affected segments while keeping the rest of your app functional

24. `Recovering from Error`

    24. 1. Adding a reset with the error props in Error Boundary and use the startTransition from react and use thereset function inside the startTransition function will give an error recovering solution

    1:45
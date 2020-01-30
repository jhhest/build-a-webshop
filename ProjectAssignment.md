# Project briefing: building a web shop

To practise and explore Redux, we'll work on a project for the next 3 days

## What are we building?

We are building a **Web Shop**. A webshop shows products to customers which they can add to their cart. The contents of the cart are dynamic state ttat can be **changed** on many pages and we might need to **display** it on multiple pages as well. As such using a state management library like redux makes a lot of sense. What is your shop selling? Completely up to you!

## Some common features of webshops

- Displaying products to the user in various ways
- Users can add products to their cart or remove products from their cart
- Users can go to a checkout page that shows their total
- Users can finalize their order by filling out a form with their personal information
- Users can search the webshop for a specific product

## Learning Objectives

- Setting up Redux
- Get the state of the Redux store adn using it in your component
- Dispatching actions to the Redux store to change its state
- Writing reusable actions (action creators - functions that return actions)
- Using async actions (thunks)
- If you refresh any page your app shouldn't crash (each component should be able to fetch its own data)
- (If resfreshing empties your shoppingcart that's fine)

> ### A note on setState
>
> Since a lot of the learning revolves around state management with redux, avoid using `setState` during this project for practice reasons. When you've mastered Redux you can make a pragmatic choices about mixing using local and redux state.

## Getting started

**Ideation**

(take some time to brainstorm)

1. What shop are you building? What products does it contain? (this is totally up to you as a team!)
1. What features do you want to build?
1. Draw some simple designs on a piece paper (a.k.a. a wire frame)

Wireframe example:

![Wireframe](https://www.comentum.com/images/wireframes-sample/ecommerce/product-listing.png)

**The programming**

1. Make a new react app using create-react-app
2. Setup the redux store together with your teammate - including

   - store.js with redux-devtools & redux-thunk
   - a ./reducers folder with an index.js that combines all your reducers usinig combineReducers()
   - At least 1 reducer with an initial state
   - Wrapping your app in the `<Provider>` component in index.js
   - npm start your app and check redux-devtools to see if you've got an initial state

3. Setup json-server for products

   - npm install -D json-server
   - in your root folder (the one with the package.json) add make a file: `db.json`
   - In your package.json add a script to start your server

   ```
     "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "api": "npx json-server db.json --delay 500 --port 4000"
    },
   ```

   - Add this code to `db.json`:

   ```
    {
        "products": [
            {
                "id": 1,
                "categoryId": 4,
                "name": "Product 1",
                "imageUrl": "https://picsum.photos/400?image=696",
                "inStock": true,
                "price": "3432"
            },
            {
                "id": 2,
                "categoryId": 1,
                "name": "Product 2",
                "imageUrl": "https://picsum.photos/400?image=230",
                "inStock": false,
                "price": "2374"
            },
            {
                "id": 3,
                "categoryId": 4,
                "name": "Product 3",
                "imageUrl": "https://picsum.photos/400?image=277",
                "inStock": false,
                "price": "1942"
            },
            {
                "id": 4,
                "categoryId": 3,
                "name": "Product 4",
                "imageUrl": "https://picsum.photos/400?image=963",
                "inStock": true,
                "price": "2367"
            },
            {
                "id": 5,
                "categoryId": 3,
                "name": "Product 5",
                "imageUrl": "https://picsum.photos/400?image=637",
                "inStock": false,
                "price": "1991"
            },
            {
                "id": 6,
                "categoryId": 3,
                "name": "Product 6",
                "imageUrl": "https://picsum.photos/400?image=811",
                "inStock": true,
                "price": "1956"
            },
            {
                "id": 7,
                "categoryId": 2,
                "name": "Product 7",
                "imageUrl": "https://picsum.photos/400?image=616",
                "inStock": false,
                "price": "2005"
            },
            {
                "id": 8,
                "categoryId": 4,
                "name": "Product 8",
                "imageUrl": "https://picsum.photos/400?image=522",
                "inStock": false,
                "price": "1358"
            },
            {
                "id": 9,
                "categoryId": 3,
                "name": "Product 9",
                "imageUrl": "https://picsum.photos/400?image=615",
                "inStock": false,
                "price": "2345"
            },
            {
                "id": 10,
                "categoryId": 1,
                "name": "Product 10",
                "imageUrl": "https://picsum.photos/400?image=601",
                "inStock": false,
                "price": "1823"
            },
            {
                "id": 11,
                "categoryId": 1,
                "name": "Product 11",
                "imageUrl": "https://picsum.photos/400?image=314",
                "inStock": true,
                "price": "1752"
            },
            {
                "id": 12,
                "categoryId": 4,
                "name": "Product 12",
                "imageUrl": "https://picsum.photos/400?image=442",
                "inStock": true,
                "price": "2196"
            },
            {
                "id": 13,
                "categoryId": 4,
                "name": "Product 13",
                "imageUrl": "https://picsum.photos/400?image=338",
                "inStock": true,
                "price": "3276"
            },
            {
                "id": 14,
                "categoryId": 4,
                "name": "Product 14",
                "imageUrl": "https://picsum.photos/400?image=739",
                "inStock": false,
                "price": "1454"
            },
            {
                "id": 15,
                "categoryId": 4,
                "name": "Product 15",
                "imageUrl": "https://picsum.photos/400?image=901",
                "inStock": false,
                "price": "1368"
            },
            {
                "id": 16,
                "categoryId": 3,
                "name": "Product 16",
                "imageUrl": "https://picsum.photos/400?image=372",
                "inStock": false,
                "price": "2087"
            },
            {
                "id": 17,
                "categoryId": 1,
                "name": "Product 17",
                "imageUrl": "https://picsum.photos/400?image=264",
                "inStock": true,
                "price": "2523"
            },
            {
                "id": 18,
                "categoryId": 1,
                "name": "Product 18",
                "imageUrl": "https://picsum.photos/400?image=133",
                "inStock": true,
                "price": "1118"
            },
            {
                "id": 19,
                "categoryId": 2,
                "name": "Product 19",
                "imageUrl": "https://picsum.photos/400?image=359",
                "inStock": false,
                "price": "1966"
            },
            {
                "id": 20,
                "categoryId": 1,
                "name": "Product 20",
                "imageUrl": "https://picsum.photos/400?image=354",
                "inStock": false,
                "price": "2569"
            }
        ],
    "categories": [
        {
            "id": 1,
            "name": "Category 1"
        },
        {
            "id": 2,
            "name": "Category 2"
        },
        {
            "id": 3,
            "name": "Category 3"
        },
        {
            "id": 4,
            "name": "Category 4"
        }
    ]
   }

   ```

   - Test your api with the command `npm run api`

4. Make a new repository on GitHub and add it as a remote to your react app
5. Push to the master branch of GitHub
6. Make a new branch **`development`** and push it to GitHub as well
7. Add your teammate as a collaborator (in the settings of your repository)
8. On Github in settings/branches make the **`development`** your default branch
9. Make a branch an start making small components, actions & reducers
10. When you've finished a part of the app - push your branch to github
11. Make a pullrequest to **`development`** to merge your work
12. When you have a working version, test development locally. Then make a pullrequest from development to master to ship your new version

## Some webshops for inspiration

#### [Amazon](https://www.amazon.com/)

#### [Coolblue](https://www.coolblue.nl/)

#### [Bol](https://www.bol.com/nl/)

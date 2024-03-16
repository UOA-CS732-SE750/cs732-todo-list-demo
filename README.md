# CS732/SE750 Demo - My Todo List

This project will contain a complete full-stack todo list app, using the MERN stack (MongoDB, Express, React, Node.js). The project is divided into [frontend](./frontend/) and [backend](./backend/) sub-folders.

Each video in the tutorial series will be associated with a `git` branch, containing the end-point of that video. The branches are as follows:

## Branches

1. **main:** The starting point for the project. The frontend is a stripped-down version of the starter React project created using `npm create vite@latest`. The backend is a barebones Node.js "Hello World" app with the reommended folder structure, but no content.

2. **step-1-displaying-todos:** In this step, we create some dummy data using ChatGPT, and then create a `<ul>` in `App.jsx`to display todo items in a list. We use JavaScript arrays' `map()` function to dynamically render a `<li>` for each todo item.

3. **step-2-react-components:** In this step, we refactor our initial todo list to use two _React components_:

   - `TodoList`: Is responsible for displaying a list of todo items.

   - `TodoListItem`: Is responsible for displaying a single todo item.

4. **step-3-dayjs:** In this step, we use the `dayjs` _npm package_ to help us display our todo items' due dates in a more user-friendly way. We also use it to calculate whether a todo item is _overdue_ (i.e. its due date is in the past), and display a todo item's status of either "Complete", "Pending" (incomplete but with a due date still in the future), or "Overdue" (incomplete with a due date in the past).

5. **step-4-styling-1:** In this step, we create two _CSS modules_ - one for `App.jsx` and one for `TodoList.jsx`. We add some styes to these modules to make our todo list look a little prettier.

6. **step-5-styling-2:** In this step, we complete the styling of todo items by making their status buttons change color depending on the status.

7. **step-6-completing-deleting:** In this step, we show how to use `useState()` to create a _stateful_ value in React. We also show how we can _propagate_ events - such as button clicks - up the component hierarchy using event props. Finally, we show how we can appropriately call the stateful value's _setter_ function to modify and remove todo items.

8. **step-7-adding-todos:** In this step, we add a new component `NewTodoForm` - which lets users specify the description and due date of a new todo item. We also style this component, and hook up its functionality so that new todos can be successfully added to our app.

9. **step-8-searching:** In this step, we add a search bar to our todo list, so we can easily filter the list according to the todos' descriptions. This is the final frontend-focused video in the series.

10. **step-9-backend-intro:** In this step, we introduce the backend project and the goals for the second half of the videos. We also setup a basic Node.js / Express server with some useful middleware, use of an `.env` file, and a "Hello world" route.

11. **step-10-routes-get-todos:** In this step, we separate our route handling code from `app.js` using Express routers, we create a Data Access file to handle the data access of our todo items, and we create a route to `GET` all todo items on a request to `/api/todos`.

12. **step-11-complete-rest-api:** In this step, we complete the REST API - to create todos (using a `POST` request), update todos (using `PATCH`), and delete todos (using `DELETE`).

13. **step-12-error-checking:** In this step, we add some more error checking to our REST API to help ensure that we return appropriate HTTP error codes rather than corrupting our database.

14. **step-13-mongoose:** In this step, we use MongoDB instead of a JavaScript array in our backend to store our todos. We use the `mongoose` package to hook up our Express backend to MongoDB.

15. **step-14-fetch:** In this step, we hook up the frontend to the backend with "fetch" statements (actually using the `axios` package). We use optimistic updates so that the UI on the frontend is updated immediately, optimistically assuming the backend request will succeed. Then, if the backend request fails, the UI is reverted to its prior state.

16. **step-15-frontend-cleanup:** In this step, we use the [React signals package](https://github.com/preactjs/signals) to help refactor our code. We move all the todo-handling logic out of `App.jsx`, allowing it to focus on presentation. We instead create a hook called `useTodos()` which encapsulates the create / retrieve / update / delete (CRUD) todo functionality. We can import and use this hook in any React component that needs to access or modify todo items.

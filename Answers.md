# Answers

What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

**React is a library built by Facebook to build reusable UI components and manage complex state. It gives us a fast/performant way to maniulate the DOM without using querySelectors or getElementby methods.**

What does it mean to think in react?

**"Thinking in React" involves the thought process of breaking our application down into separated components. We have to look at our information architecture and think about how each piece of our application will interact with each other, if they'll need to manage their own state, etc.**

Describe state.

**State refers to the data that our components will have access to. We can pass this state around for our components to use.**

Describe props.

**Props aka "properties" are like attributes that we can use in our JSX and they are immutable aka read-only. They are objects that we can consume as parameters inside functional components.**

What are side effects, and how do you sync effects in a React component to state or prop changes?

**Side-effects happen when a fucntion tries to modify anything outside the scope of itself. If a function has side-effects it's considered "unpure." Examples of side-effects could be making an API request or modifying global variables from inside a function. We use useEffect to sync effects in a React component to state or prop changes.**

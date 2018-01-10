
![design logo](https://kironroy.github.io/react2.svg)
*   [How to learn React](https://www.lullabot.com/articles/how-to-learn-react)
* **[React](https://reactjs.org/)**
  * [React Glitch example](https://glitch.com/edit/#!/create-react-app-sample?path=README.md:1:0)
    * [React Glitch](https://glitch.com/react)
  * [Virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

## JSX

* **JSX** is a syntax extension for JavaScript.
  It was written to be used with React.
  JSX code looks a lot like HTML.

* A basic unit of JSX is called a **JSX element**.

* JSX elements are treated as JavaScript expressions.
  They can go anywhere that JavaScript expressions can go.

* That means that a JSX element can be saved in a variable,
  passed to a function, stored in an object or array...you name it.

* JSX is not valid JavaScript. Web browsers can't read it!

* If a JavaScript file contains JSX code, then that file will have to be compiled.
  That means that before the file reaches a web browser,
  a JSX compiler will translate any JSX into regular JavaScript.

## Components
  * React applications are made out of components.

  * A **component** is a small,
    reusable chunk of code that is responsible for one job.
    That job is often to **render** some HTML.

  * React components interact with one another.
    A React application can contain dozens, or even hundreds, of components.
    When combined, however, they can
    form enormous complex ecosystems of information.

  * A component can pass information to another component.
    Information that gets passed from one component
    to another is known as **props**

  * Props is a way to store and update dynamic information
    in a React component.

    * Every component must come from a component class.

    * A component class is like a factory that creates components.
      If you have a component class, then you can use
      that class to produce as many components as you want.

    * To make a component class,
      you use a base class from the React library: React.Component

    * React.Component is a JavaScript class. To create your own component class,
      you must **subclass** React.Component.
      You can do this by using the syntax class
      **`YourComponentNameGoesHere extends React.Component {}`**

    * A component's props is an **object**.
      It holds **information** about that component.
      To see a component's props object, you use the expression **this.props**

      * Passing a prop by giving an attribute to a component instance
      * Accessing a passed-in prop via this.props.prop-name
      * Displaying a prop
      * Using a prop to make decisions about what to display
      * Defining an event handler in a component class
      * Passing an event handler as a prop
      * Receiving a prop event handler and attaching it to an event listener
      * Naming event handlers and event handler attributes according to convention
        **`this.props.children`**
        **`getDefaultProps`**

## State
* Unlike props, a component's **state** is not passed in from the outside.
A component decides its own state.
To make a component have state, give the component a state property.
This property should be declared inside of a constructor method, like this:

1. A stateful component class stores information as state.
2. A stateless component class displays that state.
3. different stateless component class displays a way to change that state.

**It's a common pattern used by React programmers.
Recognizing it can help you make sense of
React programs that you encounter,
and can also help you build better React programs yourself.**

* With **props** and **state** you can create dynamic content in a React component.
  Updating state from any component to make your applications fully interactive.
  props and state are all that you need to set up an ecosystem of
  interacting React components.

* A React component should use **props** to store information that can be changed,
   but can only be changed by a different component.

* A React component should use **state** to store information
  that the component itself can change.

* A React app is basically just a lot of components,
* setting state and passing props to one another.

* A child component updates its parent's state,
  and the parent passes that state to a sibling component

***

JSX Elements
```
// Here's an example of a JSX element being saved in a variable:

const navBar = <nav>I am a nav bar</nav>;

// Here's an example of several JSX elements being stored in an object:

const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```

Outer Elements
```
// this WILL WORK
const paragraphs = (
  <div id="i-am-the-outermost-element">  // need an outer element!
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// this won't work
const paragraphs = (
  <p>I am a paragraph.</p>
  <p>I, too, am a paragraph.</p>
);
```
***

className
```
// In JSX, you can't use the word class! You have to use className instead:

  <h1 className="big">Hey</h1>
// This is because JSX gets translated into JavaScript,
and class is a reserved word in JavaScript.

When JSX is rendered, JSX className
attributes are automatically rendered as class attributes.
```
***

close tags, no self-closing tags in JSX
```
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" /> // close image tags
    <article>
      I LIKE TO SIT
      <br>
      JENKINS IS MY NAME
      </br>  // close tags
      THANKS A LOT
    </article>
  </div>
);
```
***

React Components Breakdown
```
import React from 'react'; // creates a Js object
// the object contains properties that are needed to make React work  
such as: React.createElement() and React.Component
import ReactDOM from 'react-dom'; // this object contains
methods that help React with the DOM such as ReactDOM.render()

class MyComponentClass extends React.Component
{ // everything in between these curly-braces is
  instructions for how to build components

  render() {
    return <h1>Hello world</h1>;
  }
}

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
```
***

How instructions work to make Components
```
/*
  - Whenever a component is made, the component
    inherits all of the methods of its component class
  - MyComponentClass has one method:
    - MyComponentClass.render().
  - Therefore, <MyComponentClass/> has a method named render
*/

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(
  <MyComponentClass/>,
  document.getElementById('app')
);
```
***

multi-line JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
    <blockquote>
  <p>
    What is important now is to recover our senses.
  </p>
  <cite>
    <a target="_blank"
      href="http://bit.ly/1LvSLUA">
      Susan Sontag
    </a>
  </cite>
</blockquote>
    );
  }
};

ReactDOM.render(
<QuoteMaker/>,
 document.getElementById('app')            
);
```
***

Parent - child
```
A <Parent /> is supposed to pass its state to a <Child />.
Before a <Parent /> can pass anything to a <Child />,
you need to import Child into Parent.js.
```
***
Requests
* **GET** requests receive information from other sites by sending a query.
* A GET request is like a search. If you navigate to
  Google and search for something

* **POST** requests can change information on another site
  and will receive information or data in response.
* POST requests, on the other hand,
  introduce new information to another website
Promise
* A **Promise** is an object that acts as a placeholder for data
  that has been requested but not yet received.
  Eventually, a Promise will resolve to the value
  requested or to a reason why the request failed.
* If the requested information or any error
  except a network error is received, the Promise is **fulfilled**
  and calls a function to handle the response.
  If there is a network error, the Promise is
  **rejected** and will call a function to handle the error.

* **fetch() function** uses Promises to handle requests.

The fetch() function

1. creates a request object using the information provided to it
2. sends that request object to the URL provided
3. returns a Promise that ultimately resolves to a response object,
   which contains a lot of information,
   including (if everything went well), the information requested.
* Because fetch() is a web API, not all browsers support it.
  To ensure that all users can run code that uses fetch,
  we can add a **polyfill** that will be used if a user
  doesn't have fetch() support in their browser.
```
// sends request
fetch('https://api-to-call.com/endpoint').then(
response => {
// converts response object to JSON
	if (response.ok) {
   return response.json();
  }
// handles errors
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => jsonResponse);
// code to execute with jsonResponse
```

```
// GET

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);
xhr.send();


// POST

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
}); // one for more constant variable is added to
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);

```
Get (in detail)
```
const xhr = new XMLHttpRequest(); // creating XMLHttpRequest(); object
const url = 'http://api-to-call.com/endpoint'; // url in a constant variable

xhr.responseType = 'json'; // json type (format)
xhr.onreadystatechange = function () { // event handler -> anonymous function
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // Code to execute with response
  }
};

xhr.open('GET', url);
/*
   open .method with two arguments: get (type of request)
   url, url we are querying
   .open() creates and structures the request.
   It tells the request what method to use,
   GET or POST, and what URL to query.
*/
xhr.send();

/*
  .send() method on our xhr object and pass it no arguments.
   This is because data sent in GET requests
   is sent as part of the URL. Calling the .send()
   method sends the xhr object with its relevant information to the API URL
*/
```
Post (in Detail)
```
const xhr = new XMLHttpRequest(); // creates a new object
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'}); // converts data to a string

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
   // code to execute with response   
  }
};

xhr.open('POST', url);
xhr.send(data);
```
AJAX (Asynchronous JavaScript and XML)
```
// jQuery GET

$.ajax({
  // settings
  url: 'http://api-to-call.com/endoint',
  type: 'GET',
  dataType: 'json',
  // handles response if successful
  success(response) {
    // code to execute with response on success
   },
   // handles response if unsuccessful
  error(jqXHR, status, errorThrown) {
    // code to execute with response on failure
   }
  });

```

```
// jQuery POST
$.ajax({
  url: 'http://api-to-call.com/endpoint',
  type: 'POST',
  data: JSON.stringify({id: '200'}),
  dataType: 'json',
  success(response) {
    // code to execute with response on success
  },
  error(jqXHR, status, errorThrown) {
     // code to execute with response on failure
  }
 });

```
***

React server
```
1. npm install -g create-react-app
2. mkdir react_app_dir && cd react_app_dir
3. create-react-app react_app_one  // any name lowercase
4. cd react_app_dir/ && npm start // automatically -> http://localhost:3000/
5. control c // stops server
```

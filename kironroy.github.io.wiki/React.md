
![design logo](https://kironroy.github.io/react2.svg)
* [React](https://reactjs.org/)
  * [React Glitch example](https://glitch.com/edit/#!/create-react-app-sample?path=README.md:1:0)
    * [React Glitch](https://glitch.com/react)
  * [Virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

## JSX

* **JSX** is a syntax extension for JavaScript.
  It was written to be used with React.
  JSX code looks a lot like HTML.

* JSX is not valid JavaScript. Web browsers can't read it!

* If a JavaScript file contains JSX code, then that file will have to be compiled.
  That means that before the file reaches a web browser,
  a JSX compiler will translate any JSX into regular JavaScript.

  ## React : Components | Props | State (basics)

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
    to another is known as **props
    state** is a way to store and update dynamic information
    in a React component.

  * Every component has something called props.
    A component's props is an object.
    It holds information about that component.
    To see a component's props object, you use the expression this.props

  * Every component must come from a component class.

  * A component class is like a factory that creates components.
    If you have a component class, then you can use
    that class to produce as many components as you want.

  * To make a component class,
    you use a base class from the React library: React.Component

  * React.Component is a JavaScript class. To create your own component class,
    you must **subclass** React.Component.
    You can do this by using the syntax class
    **YourComponentNameGoesHere extends React.Component {}**

    * With **props** and **state** you can create dynamic content in a React component.
      Updating state from any component to make your applications fully interactive.

      props and state are all that you need to set up an ecosystem of
      interacting React components.

    *  A React component should use **props** to store information that can be changed,
       but can only be changed by a different component.

    * A React component should use **state** to store information
      that the component itself can change.

***

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

React server
```
1. npm install -g create-react-app
2. mkdir react_app_dir && cd react_app_dir
3. create-react-app react_app_one  // any name lowercase
4. cd react_app_dir/ && npm start // automatically -> http://localhost:3000/
5. control c // stops server
```

React Editor
 ===
 
 ## Description
 
Simple "get started" react assignment. Use [`create-react-app`](https://github.com/facebookincubator/create-react-app) 
to get up and running.
 
Create a WYSIWYG editor that allows user to set properties 
and those changes are reflected in the display. This is a very, very simple example:
 
![image](https://cloud.githubusercontent.com/assets/478864/26072382/2249f0c6-3960-11e7-9d7f-d5bc9e283fd3.png)
 
You should aim to add 5-10 different settings the user can change.
 
For this assignment:
 
* You start with a single `App` component, but split into multiple components if it starts to get too big.
Consider separating out the controls from the display
* Your state will likely need to live in the `App` component. Initialize state using `this.state = {}` in the constructor 
(don't forget to call `super()`) filling in default property values
* Write JSX in the `render` method of the `App` component
  * Use `this.state.<name of state>` to access state values
  * Use `e => { this.someMethod(e.target.value) }` (or whatever you need from the event object) to call
  a method you create on the component that in turn calls `this.setState({ prop: newValue })` to update the value
* Use destructuring and other advanced javascript techniques to keep the code clean and easier to read.
  
## Rubric
  
* Works **2.5pts**
* Curiosity/Going Beyond What we did in class **2.5pts**
* Clean code - using destructuring and other techniques to reduce duplication and redundancy **2.5pts**
* Clean-up stuff you didn't use from `create-react-app` default **2.5pts**

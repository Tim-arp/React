#Virtual DOM
It is a blueprint of a real webpage. When a change is made in react code, it builds a new virtual DOM(blueprint in memory). React then compares the new virtual DOM and old virtual DOM(both are in memory, not in real browser yet).React then finds the difference between them and react applies only those changes to the real DOM(actual webpage).
Without virtual DOM browser touches the real DOM directly and even small changes can force browser to repaint the page.Which makes user experience slow.

#Reconciliation
It is idea and set of rules react follows to figure out the change in the virtual DOM.

#React Fiber 
Fiber is the new engine that runs the reconciliation algorithm in a smarter way (splitting work, prioritizing tasks, and many more). 
Fiber makes reconciliation smarter by:
Splitting work into small units
Prioritizing urgent updates over less urgent ones
Allowing updates to pause/resume

Reconciliation is an algorithm and react fiber is an new implementation of that same algorithm.

#Hydration 
It is a process where react takes the server server rendered HTML and attaches event listeners + react state so the page becomes interactive.
Before Hydration server creates HTML and sends it to the browser that HTML is fast to show(which is good for SEO) but it is just a static page the browser doesnot know what to do when we click on the button or type in an input. So to solve this problem hydration is needed because SSR only gives static HTML, hydration connects React's JavaScript to that HTML so the page becomes interactive.
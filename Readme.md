# React Concepts Explained

This README explains some key React concepts including **Virtual DOM**, **Reconciliation**, **React Fiber**, and **Hydration**.

---

## Virtual DOM
The **Virtual DOM** is a blueprint of a real webpage.  

- When a change is made in React code, it builds a **new Virtual DOM** (blueprint in memory).  
- React then compares the **new Virtual DOM** with the **old Virtual DOM** (both are in memory, not in the real browser yet).  
- React finds the **differences** between them and applies **only those changes** to the **real DOM** (the actual webpage).  

> Without the Virtual DOM, the browser would touch the **real DOM directly**, and even small changes could force the browser to repaint the page, which slows down user experience.

---

## Reconciliation
**Reconciliation** is the idea and set of rules React follows to figure out what changes occurred in the Virtual DOM.  

- It is essentially the **algorithm** that decides how to update the UI efficiently.

What happens during reconciliation?

  When something changes (state / props):

1. React creates a new virtual tree
2. Compares it with the previous virtual tree
3. Finds what changed
4. Updates only those parts in the real DOM

This comparison process = Reconciliation

---

## React Fiber
**React Fiber** is the **new engine** that runs the reconciliation algorithm in a smarter way.  

Fiber improves reconciliation by:  
- Splitting work into **small units**  
- **Prioritizing** urgent updates over less urgent ones  
- **Allowing updates to pause and resume**  

> In short, Reconciliation is the algorithm, and React Fiber is the new implementation of that algorithm.

---

## Hydration
**Hydration** is the process where React takes **server-rendered HTML** and attaches **event listeners + React state**, making the page interactive.  

- Before hydration, the server creates HTML and sends it to the browser.  
- This HTML is **fast to display** (good for SEO) but is **static**, meaning:  
  - Buttons do not respond  
  - Inputs do not update state  

- Hydration solves this problem by connecting React’s JavaScript to the static HTML, so the page becomes fully interactive.  

> **Key takeaway:** SSR gives you **static HTML** for fast load, and Hydration makes it **interactive**.

---


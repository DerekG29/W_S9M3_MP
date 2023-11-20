# Sprint 9 Module 3 Project

## Introduction

Welcome to Module 3 Project! In this module you learned what stateful logic is, how to build custom hooks, and how to compose multiple hooks together. In your project you will demonstrate proficiency of these subjects and principles.

## Instructions

In this project you'll take this crypto currency tracker app and build two custom hooks that, when composed together, will allow users to set and persist their dark mode preference.

### 💾 Setup

**Here are the steps to set up this project:**

1. Clone this repository to your computer.

2. Within your terminal, navigate to the project folder and execute `npm install`.

3. After successful installation execute `npm run dev`.

4. You will load the app in Chrome by navigating the browser to `http://localhost:3003`.

**❗ Note:** In the event of NPM errors during setup, delete the `node_modules` folder and the `package-lock.json` file, and retry `npm i` and `npm run dev`.

### 🥷 Tasks

The app has a dark mode toggle in the Navbar component, but the preference does not survive page reloads. You will fix this by going through your tasks below.

**Notes about your tasks:**

- There is no need to install any NPM dependencies nor work outside of these files.
- Keep in mind that there are many ways to solve a given programming problem.
- Check out the **Solution Video** of this project if you need help getting unstuck. Have fun!

#### 👉 TASK 1 - Build a useDarkMode hook

1. Create a new folder called `hooks`.

2. Create a file called `useDarkMode.js`.

3. Build a hook that ONLY setups a boolean state value. This value governs if dark mode is on or off.

4. Return the slice of state created and the state modification function.

5. Replace the darkMode state definition with useDarkMode in App.js.

#### 👉 TASK 2 - Build a useLocalStorage hook

1. Create a file called `useLocalStorage.js`.

2. Build a hook called that takes in a key value and an initialValue.

3. Use the code from the learning objective to build the the hook.

#### 👉 TASK 3 - Compose useLocalStorage around useDarkMode

1. Import useLocalStorage into the useDarkMode hook.

2. Confirm that when clicking the dark mode switch on the ui that the correct value is saved to localStorage.

3. Confirm that dark mode persists when reloading the app.

**Important:**

- ❗ Please check the relevant chapter of the Solution Video if you get stuck.

👋 Have fun!

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Check out the Solution Video for this project in your learning platform. In it, an industry expert will walk you through their thinking in detail while they solve the tasks. The Solution Videos are highly recommended even if you are not stuck: you will learn lots of tricks.

</details>

<details>
  <summary>I am getting errors when I run npm install. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Sometimes Node can be installed but misconfigured. Try deleting `node_modules` and running `npm install`. If that fails, try deleting both `node_modules` and `package-lock.json` before reinstalling. If all fails, please request support!

</details>

<details>
  <summary>Do I need to install extra libraries with NPM?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>Can I edit the HTML or the CSS?</summary>

That's probably not a great idea. Why do you want to do that?

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Remember to use console.logs and breakpoints to troubleshoot your code. Do not panic if you see errors in the console, just read them carefully looking for clues.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

There are no automatic tests in this project. Feel free to write some, though! All necessary libraries are installed in the project.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. Make a commit after each test. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well. Research how to reset --hard to a specific commit.

</details>
<br/>

**Project created with [@bloomtools/react@0.1.25](https://github.com/bloominstituteoftechnology/npm-tools-react)**

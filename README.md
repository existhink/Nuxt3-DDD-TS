# 🌟 Nuxt3 - DDD - TS

This project built with Vue, Nuxt, TypeScript, TailwindCSS, and much more.

## Starter Introduction

This application use DDD pattern. Here you can learn a little about DDD pattern, [Visit me](https://www.geeksforgeeks.org/domain-driven-design-ddd)

---

## 🏆 Tips

Here's my opinions for write our code more clean and readable. So, you can follow it or ignore it.

1. Always using namespacing on your custom hooks, constants, etc on your domain. Example:

```bash
export const useAuthenticationService = () => {
  /**
   * @description Reactive data binding
   */
  const authentication_formData = reactive({
    email: '',
    password: ''
  });
  const authentication_isLoading = ref(false);
  ...
```

Reason: We normally read things from left to right, top to bottom. As a result, when using namespacing, we should be able to directly determine who owns variables, functions, and so on.

Side Effect: The use of namespacing can sometimes result in longer naming of variables, functions, and so on. However, we still have code that is easier to read than if we did not utilize namespacing at all.

2. Order naming your variables, function, etc to ascending.

```bash
export const useAuthenticationService = () => {
  /**
   * @description Reactive data binding
   */
  const authentication_formData = reactive({
    email: '',
    password: ''
  });
  const authentication_isLoading = ref(false);

  /**
   * @description Handle business logic when user submit the form
   */
  const authentication_onSubmit = () => {
     // Do something here
  }

  return {
    authentication_formData,
    authentication_isLoading,
    authentication_onSubmit
  }
```

Reason: One of the most important reasons for creating variables, functions, and so on in ascending sequence is to make things easier while troubleshooting or adding features.

Side Effect: -

### Conclusion:

Actually, there are plenty other approaches to make our code cleaner and easier to read for humans. However, at this time, I'd want to underline the two points listed above. Because, as previously said, I am using the same code approach in my project.

As a result, I ask any creators who want to participate in this project to keep the previously created code consistent.

## 📖 Notes

When we wish to include a new package or library into this project. I ask that you first conduct some study on the package or library that you intend to utilize.

When it comes to adding a new package or library, there are various factors to consider. Among them are:

1. Is the package or library frequently updated by its creator?
2. Is the package or library popular with other developers?
3. Does the package or library have a lot of issues?
4. Is the package or library small in size?
5. Is the package or library simple to use and has a big impact on our project? etc.

I believe we can add the desired package or library once it has passed the five criteria outlined above. However, if you wish to start a conversation regarding the package or library you want to add, please do so in the project's discussion thread on GitHub.

## 🎖️ Web Technologies

| Technology  | Description                                                                         | Version |
| ----------- | ----------------------------------------------------------------------------------- | ------- |
| Nuxt        | Nuxt is an open source framework that makes web development intuitive and powerful. | ^3.15.3 |
| TailwindCSS | A utility-first CSS framework for rapidly building custom user interfaces.          | ^4.0.0  |
| Typescript  | JavaScript with syntax for types                                                    | ^5.7.3  |
| Vitest      | A blazing fast unit test framework powered by Vite                                  | ^3.0.4  |
| VueJS       | The progressive JavaScript framework for building modern web UI.                    | ^3.5.13 |

## 🏅 Dependencies & Libraries

| Library                         | Description                                                                                                       | Version |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| @commitlint/cli                 | Lint our commit messages                                                                                          | ^19.6.1 |
| @commitlint/config-conventional | Shareable commitlint config enforcing conventional commits                                                        | ^19.6.0 |
| @nuxt/eslint                    | All-in-one ESLint module for Nuxt, provides project-aware, easy-to-use, extensible and future-proof integrations. | ^0.7.5  |
| @nuxt/image                     | Optimised images for Nuxt, with progressive processing, lazy-loading, real-time resizes and providers support.    | "1.9.0  |
| @nuxt/kit                       | Toolkit for authoring modules and interacting with Nuxt                                                           | ^3.15.3 |
| @nuxt/test-utils                | Test utilities for Nuxt                                                                                           | ^3.15.4 |
| @pinia/nuxt                     | The Vue Store that you will enjoy using                                                                           | ^0.9.0  |
| @vue/test-utils                 | Component testing utils for Vue 3.                                                                                | ^2.4.6  |
| @vueuse/nuxt                    | VueUse Nuxt Module                                                                                                | 12.5.0  |
| eslint                          | An AST-based pattern checker for JavaScript.                                                                      | ^9.18.0 |
| happy-dom                       | Happy DOM is a JavaScript implementation of a web browser without its graphical user interface                    | ^16.7.3 |
| husky                           | Modern native Git hooks made easy                                                                                 | ^9.1.7  |
| nuxt                            | Nuxt is an open source framework that makes web development intuitive and powerful.                               | ^3.15.3 |
| nuxt-security                   | Security Module for Nuxt based on HTTP Headers and Middleware                                                     | 2.1.5   |
| pinia                           | Intuitive, type safe and flexible Store for Vue.                                                                  | ^2.3.1  |
| playwright-core                 | A high-level API to automate web browsers                                                                         | ^1.50.0 |
| tailwindcss                     | A utility-first CSS framework for rapidly building custom user interfaces.                                        | ^4.0.0  |
| typescript                      | JavaScript with syntax for types                                                                                  | ^5.7.3  |
| vite-plugin-compression         | Use gzip or brotli to compress resources.                                                                         | ^0.5.1  |
| vite-plugin-remove-console      | A vite plugin that remove the types of console in the production environment                                      | ^2.2.0  |
| vite-plugin-svg-icons           | Vite Plugin for fast creating SVG sprites.                                                                        | ^2.0.1  |
| vitest                          | Next generation testing framework powered by Vite.                                                                | ^3.0.4  |
| vue                             | The progressive JavaScript framework for building modern web UI.                                                  | ^3.5.13 |
| vue-router                      | Expressive, configurable and convenient routing for Vue.js                                                        | ^4.5.0  |

## 🛠️ Setup Project

To get this project up and running in your development environment, follow these step-by-step instructions.

### 🍴 Prerequisites

We need to install or make sure that these tools are pre-installed on your machine:

- [NodeJS](https://nodejs.org/en/download/): It is a JavaScript runtime build.
- [Git](https://git-scm.com/downloads): It is an open source version control system.

## 🔍 Usage

### How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

### 🚀 Install Project

1. Clone the Repository

```bash
git clone https://github.com/existhink/Nuxt3-DDD-TS.git
```

2. Install dependencies using bun

```shell
bun or bun install
```

3. Change **.env.local.example** to **.env.local**

You must change the .env.local.example to .env.local and match it with you local machine.

4. Run project for development

```shell
bun start:dev
```

---

## 🎉 Build The App

1. Build the app

```shell
bun build
```

## 🧪 Test

Run test across all files

```shell
bun test:unit
```

---

## 📂 Folder Structure

Project structure for this react starter

```javascript

.husky                                    // Husky configuration
|   |_______commit-msg
|   |_______pre-commit
app                                       // Entry point for the app.
|   |_______middlewares                   // Middleware for the app.
|   |_______src                           // Source folder for the app.
|   |   |_______core                      // Contain all core files for the app.
|   |   |   |_______assets                // Contain all assets for the app.
|   |   |   |_______components            // Global components for the app.
|   |   |   |   |_______base              // Base components for the app.
|   |   |   |   |_______common            // Common components for the app.
|   |   |   |   |_______layouts           // Layout components for the app.
|   |   |   |_______composables           // Contain all composable for the app.
|   |   |   |_______constants             // Contain all constants for the app.
|   |   |   |_______helpers               // Contain all helpers for the app.
|   |   |   |_______stores                // Global stores for the app.
|   |   |_______modules                   // Contain all modules for the app.
|   |   |   |_______authentication        // Authentication module.
|   |   |   |   |_______components        // Contain all components for authentication module.
|   |   |   |   |_______constants         // Contain all constants for authentication module.
|   |   |   |   |_______interfaces        // Contain all interfaces for authentication module.
|   |   |   |   |_______services          // Contain all services for authentication module. Please use this folder to store all business logic.
|   |   |   |   |_______store             // Configuration for store in authentication module.
|   |   |   |   |_______views             // Contain all views for authentication module.
|   |   |   |_______{module-name}         // Example module.
|   |   |_______plugins                   // Contain all plugins for the app.
|   |_______tests                         // Contain all unit test files for the app.
|   main.css                              // Global style for the app.
|   router.options.ts                     // Router configuration for the app.
public                                    // Public folder for the app.
|   |_______favicon.ico
|   |_______robots.txt
server

```

### 📩 Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/existhink/Nuxt3-DDD-TS/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/existhink/Nuxt3-DDD-TS/issues/new). Please include sample queries and their corresponding results.

## 📜 Credits

List your collaborators, if any, with links to their GitHub profiles.

I'd like to acknowledge my collaborators, who contributed to the success of this project. Below are links to their GitHub profiles.

Furthermore, I utilized certain third-party assets that require attribution. Find the creators' links in this section.

If I followed tutorials during development, I'd include the links to those as well.

👦 Rafi Khoirulloh <br>
Email: khoirulloh.rafi2@gmail.com <br>
GitHub: @apiiyu

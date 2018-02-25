# Cake Hacking Guide

Cake is a tiny and hackable CSS library. You can modify whatever you want or add more components using SCSS.

### Requirements

* Node.js (current LTS will be fine)
* npm

Install all the dependencies using `npm install`. That installs `node-sass`, a lib that Cake needs to build.

### Hacking!

1. Get the actual `.scss` file in the `src` folder, or create a new one (if you really need it!).
2. Write your code. You can use `test/quickfix.css` and `test/index.html` files for testing/development purposes.
3. There are 2 possible ways:
  * **New file created**. Add the new file to `src/cake.scss` under the list of modules. The last one will be your new module.
  * **File modified**. Just sit down and admire your job.
4. Run the building script!
  ```
    $ npm run cook
  ```
5. Take a coffee, you deserve it.

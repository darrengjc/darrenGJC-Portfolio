Personal Notes on Build:
----------------------------------

Prettier is an opinionated code formatter 
It removes all original styling* and ensures that all outputted code conforms to a consistent style. 
Prettier takes your code and reprints it from scratch by taking the line length into account.
Prettier enforces a consistent code style (i.e. code formatting that won’t affect the AST) across your entire codebase because it disregards the original styling* by parsing it away and re-printing the parsed AST with its own rules that take the maximum line length into account, wrapping code when necessary.
https://prettier.io/docs/en/index.html

Use .prettierignore to ignore (i.e. not reformat) certain files and folders completely.
https://prettier.io/docs/en/ignore.html
----------------------------------

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

ESLint uses Espree for JavaScript parsing.
ESLint uses an AST to evaluate patterns in code.
ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.
https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats
----------------------------------
To run site: npm run dev
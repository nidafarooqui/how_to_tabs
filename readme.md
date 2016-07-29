How To: Tabs
=============
This series is by James Shore's [Let's Code: Test-Driven Javascript screencast](http://www.letscodejavascript.com).

"How To: Tabs" is focused on showing beginning programmers how work is done in a professional environment.

This series covers a wide range of topics, including:

* Version Control
* Reproducible builds
* Static code analysis (linting)
* Cross-browser testing
* Javascript modules
* Test-driven development of front-end code
* The Document Object Model
* Design and Refactoring

These techniques are used to develop a tab-switching effect.

To Try the code on Your Computer:
----------------------------------

1. Install [Node.js  5.1.1] (http://nodejs.org/dist/v5.1.1/).
2. Install [Git] (http://git-scm.com/downloads).
3. Open a command prompt.
4. Change to the directory that will contain the project. In your command prompt,
   type `cd <directory>` (where `<directory>` is the directory that will contain the project).
5. Copy the source repository to your computer: `git clone https://github.com/nidafarooqui/how_to_tabs.git`
6. Change to the project directory: `cd how_to_tabs`

To run the build:

1. Install jake: `npm install jake -g`
2. Run jake: `jake`


What We Learned:
----------------

A build tool needs:

1. Self Documentation
2. Command-Line Processing
3. Dependency Resolution
4. Code, Not Configuration
5. Straightforward and Simple

Gulp doesn't have command-line processing and Grunt
tends to focus more on configuration than code.

We will use [Jake] (jakejs.com).

There are two dependency management strategies:

1. Automatically install dependencies from somewhere else.
   (Prevents repository bloat)

2. Include dependencies in the source code repository
    (Ensures correct dependency version is available)








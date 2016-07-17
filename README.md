gitbook-plugin-typogr
====

Typogr plugin for GitBook: a set of functions which automatically apply various transformations to plain text in order to yield typographically-improved HTML.

Typogr does the following (and more):

* Straight quotes ( " and ' '") into “curly” quote HTML entities (‘ | ’ | “ | ”)
* Backticks-style quotes (``like this''') into “curly” quote HTML entities (‘ | ’ | “ | ”)
* Dashes (“--” and “---”) into n-dash and m-dash entities (– | —)
* Three consecutive dots (“...”) into an ellipsis entity (…)
* replaces the space between the last two words in a string with &nbsp; to avoid a final line of text with only one word.



refer to https://github.com/ekalinin/typogr.js for more information about Typogr.

## Installation

1. Add the plugin to your book.json file in the root directory of your book.
```
{
  "plugins": ["typogr"]
}
```
1. Install the plugin
```
gitbook install
```

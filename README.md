# rec-problem-sets

Solutions for the four given problems. The solution for each problem is put into separate folders, named by the problem number.

## Contents

* problem1 contains solution for the caesar cypher problem.
* problem2 contains solution for the minimun cost of flower purchase problem.
* problem3 contains solution for the sorting an array of integer-string pair problem.
* problem4 contains an ERD of a sample business.
* clihelper contains helper functions to allow taking command line arguments.

## Running on local machine

You need to have node.js installed in your local machine to run these scripts/solutions. 

First, cd into one of the problem directories.

Then, run `node` against the `.js` file in it, followed by a `.txt` file in the same directory. 
Each solution takes the contents of the `.txt` file as input. 
The content should follow the format/limitation specified for each problem.

Each problem directory has an `input.txt` file to put input into.

Example for the caesar problem:

```
~/problem1$ node caesar.js input.txt
```

Alternatively, create a separate `.txt` file and run the script against it:

```
~/problem2$ node flower.js myowninput.txt
```

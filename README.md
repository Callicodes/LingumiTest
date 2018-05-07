Technical Challenge #1 - Word Stickers


How does the algorithm work from a high-level perspective?

I decided on a while loop to create an endless loop to prompt the user to search request data. Inside the loop ask for a word to search the records. I let the user know they can exit the program by typing quit. I use toLowerCase() in case there are capitalisations. The solution I came up with is a function called:

startSearching(){}

Each time through the loop compare the current value of the word with the object and if a match is found; print it to the page.

Why did you choose to implement the algorithm in this way?

I created a scenario where the user will be searching for information around the word. This information I decided to store as objects. Then looped through the objects and return the final string in the foundStudent variable.

How could you improve/evolve the algorithm if given more time?

If you type a word that does not exist, a message could pop up to inform the user.

Running a test case.

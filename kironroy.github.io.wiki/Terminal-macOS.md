
![apple logo](https://kironroy.github.io/apple.svg)

`command + k` = clear the screen

`command + ,` = open preferences for terminal

`cd` = change directory

`pwd` = present working directory

`ls`  = list files

`cd ..` = go up one directory

`mkdir` = make directory

`rmdir` = remove directory

`touch` = make a new file

`atom .` = open files in atom editor

`touch ex{1,2,3,4,5,6,7}.rb` = make multiple files in series: ex1.rb ex2.rb ...

`cd booklist && touch server.rb` = cd into booklist and creating server.rb file

`echo "This is a text file etc." > test.txt` fills an exisiting text file with more text

`cat test.txt` shows a preview

`open -a Safari index.html` open a html file in a browser

`cp essay.txt essayv2.txt` copy contents from one file to another

`cp -r projects kironroy` copy contents of one dir to another

`tree` see your directory and files with branches

`mv essay.txt article.txt`  rename a file

`rm` remove file

`rm -i` remove file "flag, remove my file?"

`rm -r` remove folders, subfolders, files *EVERYTHING* (THIS IS FINAL!)

`lpr file.txt` print a file from printer

`lp -o landscape -o` fit-to-page filename.jpg printing options

Show Hidden Files

`defaults write com.apple.finder AppleShowAllFiles TRUE`

To see the change you need to restart the Finder

execute the following line in the Terminal:

`killall Finder`

`defaults write com.apple.finder AppleShowAllFiles FALSE`

`sudo rm -rf = delete something from trash can`

`rm -r ~/Library/Messages/chat.*` Delete iMessages archive

`~/Library/Caches` = clean caches

`history` view history of terminal

`history -c` clear terminal's current history

`rm ~/.bash_history` clear history from the beginning

`echo "" > ~/.zsh_history & exec $SHELL -l` clear history for zsh history on unix systems

***

![vim logo](https://kironroy.github.io/vimm.svg)

* [Vim](https://hashrocket.com/blog/posts/elm-by-example-soup-to-nuts-part-1)

* [Vim Myth](https://robots.thoughtbot.com/the-vim-learning-curve-is-a-myth)

`vimtutor` enter vim tutor mode

| Vim basic commands | Result       |
|--------------|:--------------------|
|`i`           | insert              |
|`wq`          | save & quit         |
|`q`           | quit  no save       | 
|`:update`     | save & stay	     |
|`a`           | append              |
|`:%y`         | select all          |
| `dw`         | delete	             |
| `dd`         | delete whole line   |
| `p`          | place line          |
| `r`	       | replace 1 letter    |
| `ce`         | replace >1 letters  |
| `2dd`        | delete 2 lines      |
| `u`          | undo                |
| `0`          | move first of line  |
| `1w`         | move first word     |
| `2w`         | move 2nd word       |
| `:$`         | bottom of page      |

1. Position the cursor where you want to begin cutting.
2. Press v to select characters (or uppercase V to select whole lines).
3. Move the cursor to the end of what you want to cut.
4. Press d to cut (or y to copy).
5. Move to where you would like to paste.
6. Press P to paste before the cursor, or p to paste after.

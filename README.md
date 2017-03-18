# scabble-exercise

## Overview
A Scrabble word finder application

##  Setup
- from command prompt, in application directory
- Install Node
	- on OSX install brew - [home brew](http://brew.sh/) and when done type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/) 
    - Read here for some [tips on Windows](http://jpapa.me/winnode)
    - open command prompt as administrator
        - type `choco install nodejs`
        - type `choco install nodejs.install`
- On OSX you can alleviate the need to run as sudo by [following these instructions](http://jpapa.me/nomoresudo). 
I highly recommend this step on OSX
- switch to the application directory

run `npm install`

## Development
1. To run application: `npm run serve` (from the root of the project)
2. The first search can be very slow if a rack and word selection are selected.  Looking at preloading the dictionary to improve performance from cache or perhaps using more optimized search methods (32 bit) may improve. Underscore.js has been of limited help in this regard. 

# Game Rules

## INPUT
The application must accept the following inputs:
 - rack: a string containing the letters on a player’s rack
 - word: (optional) a word that currently exists on the board that a player may be considering building off of
  
## RULES
The application must obey the following rules:
 - Player must have a minimum of 1 letter on their rack
 - Player must have a maximum of 7 letters on their rack
 - Words must be at least 2 letters long
 - Words must be 15 letters or less
 - Words must be in the (supplied) dictionary
  
## 
For this exercise, the following things may be ignored:
 - Blank tiles
 - Bonuses (double/triple word/letter scores)
 - Board layout
 - Word positioning
 - Any other things I forgot to mention
  
## CONSTANTS
The application must consider the following known constants (supplied):
 - Pre-defined word list – supplied as a simple text file with a single word per line
 - The number of each letter in the game (ex: there are 9 A’s but only 1 Z)
 - The score value of each letter




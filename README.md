# react-dice-game

Single page application that implements a client-side provably fair dice game. There is no server-side component to this application, it is all on the client.

### Background Information on Dice Games
Dice games are a simple form of online gambling. A user deposits funds and may place bets on the outcome of a randomly generated number, usually from 1 to 100. The player chooses a bet amount, a number from 1 to 100, and bets Hi or Lo on the outcome. 
For example, if the player chooses 50 and bets Hi, they will win if the number is greater than 50, and lose if the number is less than 50.

### Installation
```sh
$ npm install
$ node start
```

After the start the project will be available at http://localhost:8080/

### Tests
```sh
$ node test
```
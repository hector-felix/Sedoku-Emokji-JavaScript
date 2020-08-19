const board1 = [
  [2, 1, 7, 5, 4, 8, 9, 3, 6],
  [5, 9, 4, 1, 6, 3, 7, 2, 8],
  [3, 6, 8, 9, 7, 2, 4, 5, 1],
  [1, 7, 3, 4, 5, 6, 2, 8, 9],
  [6, 8, 5, 7, 2, 9, 3, 1, 4],
  [9, 4, 2, 3, 8, 1, 6, 7, 5],
  [4, 5, 1, 6, 3, 7, 8, 9, 2],
  [8, 3, 9, 2, 1, 4, 5, 6, 7],
  [7, 2, 6, 8, 9, 5, 1, 4, 3]
]

const board2 = [
  [1, 2, 3, 5, 7, 6, 9, 4, 8],
  [8, 5, 9, 4, 2, 1, 3, 6, 7],
  [7, 4, 6, 9, 8, 3, 1, 2, 5],
  [2, 6, 1, 8, 5, 7, 4, 9, 3],
  [9, 3, 8, 6, 4, 2, 5, 7, 1],
  [5, 7, 4, 3, 1, 9, 6, 8, 2],
  [3, 9, 7, 1, 6, 8, 2, 5, 4],
  [4, 1, 2, 7, 9, 5, 8, 3, 6],
  [6, 8, 5, 2, 3, 4, 7, 1, 9]
]

const board3 = [
  [2, 1, 6, 3, 4, 7, 5, 8, 9],
  [9, 3, 4, 8, 2, 5, 1, 7, 6],
  [5, 8, 7, 9, 6, 1, 3, 2, 4],
  [3, 5, 9, 6, 8, 2, 4, 1, 7],
  [7, 4, 8, 5, 1, 3, 9, 6, 2],
  [6, 2, 1, 7, 9, 4, 8, 5, 3],
  [4, 7, 5, 1, 3, 6, 2, 9, 8],
  [1, 9, 3, 2, 7, 8, 6, 4, 5],
  [8, 6, 2, 4, 5, 9, 7, 3, 1]
]

const board4 = [
  [8, 2, 7, 1, 5, 4, 3, 9, 6],
  [9, 6, 5, 3, 2, 7, 1, 4, 8],
  [3, 4, 1, 6, 8, 9, 7, 5, 2],
  [5, 9, 3, 4, 6, 8, 2, 7, 1],
  [4, 7, 2, 5, 1, 3, 6, 8, 9],
  [6, 1, 8, 9, 7, 2, 4, 3, 5],
  [7, 8, 6, 2, 3, 5, 9, 1, 4],
  [1, 5, 4, 7, 9, 6, 8, 2, 3],
  [2, 3, 9, 8, 4, 1, 5, 6, 7]
]

const board5 = [
  [1, 2, 6, 4, 3, 7, 9, 5, 8],
  [8, 9, 5, 6, 2, 1, 4, 7, 3],
  [3, 7, 4, 9, 8, 5, 1, 2, 6],
  [4, 5, 7, 1, 9, 3, 8, 6, 2],
  [9, 8, 3, 2, 4, 6, 5, 1, 7],
  [6, 1, 2, 5, 7, 8, 3, 9, 4],
  [2, 6, 9, 3, 1, 4, 7, 8, 5],
  [5, 4, 8, 7, 6, 9, 2, 3, 1],
  [7, 3, 1, 8, 5, 2, 6, 4, 9]
]

const board6 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

const board7 = [
  [3, 8, 9, 1, 6, 7, 5, 4, 2],
  [2, 1, 5, 9, 3, 4, 8, 7, 6],
  [6, 7, 4, 5, 2, 8, 3, 9, 1],
  [4, 2, 8, 6, 5, 1, 9, 3, 7],
  [5, 9, 1, 7, 8, 3, 2, 6, 4],
  [7, 6, 3, 4, 9, 2, 1, 8, 5],
  [9, 5, 7, 8, 1, 6, 4, 2, 3],
  [8, 3, 6, 2, 4, 5, 7, 1, 9],
  [1, 4, 2, 3, 7, 9, 6, 5, 8]
]

const board8 = [
  [9, 6, 5, 2, 8, 4, 1, 3, 7],
  [8, 7, 1, 9, 3, 6, 5, 2, 4],
  [2, 4, 3, 7, 5, 1, 9, 6, 8],
  [7, 5, 9, 3, 6, 8, 2, 4, 1],
  [1, 2, 4, 5, 9, 7, 6, 8, 3],
  [3, 8, 6, 1, 4, 2, 7, 9, 5],
  [4, 3, 7, 6, 1, 9, 8, 5, 2],
  [6, 1, 8, 4, 2, 5, 3, 7, 9],
  [5, 9, 2, 8, 7, 3, 4, 1, 6]
]

const board9 = [
  [1, 7, 5, 6, 3, 8, 2, 9, 4],
  [4, 9, 3, 2, 1, 5, 7, 6, 8],
  [6, 8, 2, 7, 4, 9, 5, 1, 3],
  [8, 1, 7, 9, 5, 2, 3, 4, 6],
  [2, 3, 4, 8, 6, 1, 9, 5, 7],
  [5, 6, 9, 4, 7, 3, 8, 2, 1],
  [7, 2, 1, 3, 9, 6, 4, 8, 5],
  [9, 4, 6, 5, 8, 7, 1, 3, 2],
  [3, 5, 8, 1, 2, 4, 6, 7, 9]
]
let globalBoard = [board1, board2, board3, board4, board5, board6, board7,board8, board9];
 
let solutionBoard = [];

let copyOfUserBoard = []

let userInput = '';

let seeingCheese = false;

let help = {
  'a': '(A)dd a number\n',
  'c': '(C)heck answer\n',
  'd': '(D)elete a number\n',
  'h': '(H)elp\n',
  'r': '(R)eplace answer\n',
  'q': '(Q)uit\n'
}

let value = {
  'x': 5, // for class
  'e': 30,
  'm': 45,
  'h': 61
}

let pic = {
'0' :'✨✨✨✨✨✨✨⬛️⬛️☁️⬛️⬛️✨✨✨✨✨✨✨',
'1' :'✨✨✨✨✨✨✨⬛️🅰️☁️🅰️⬛️✨✨✨✨✨✨✨',
'2' :'✨✨✨✨✨✨⬛️🅰️🅰️☁️🅰️🅰️⬛️✨✨✨✨✨✨',
'3' :'✨✨✨⬛️⬛️⬛️🅰️🅰️🅰️☁️🅰️🅰️🅰️⬛️⬛️⬛️✨✨✨',
'4' :'✨⬛️⬛️🚹🚹🚹🚹🅰️🅰️☁️🅰️🅰️🚹🚹🚹🚹⬛️⬛️✨',
'5' :'⬛️🚹🚹🚹🚹🚹🚹⬛️⬛️☁️⬛️⬛️🚹🚹🚹🚹🚹🚹⬛️',
'6' :'⬛️🚹🚹🚹🚹🚹⬛️✨✨☁️✨✨⬛️🚹🚹🚹🚹🚹⬛️',
'7' :'✨⬛️🚹🚹🚹🚹🚹⬛️⬛️☁️⬛️⬛️🚹🚹🚹🚹🚹⬛️✨',
'8' :'✨✨⬛️🚹🚹🚹🚹🚹🚹☁️🚹🚹🚹🚹🚹🚹⬛️✨✨',
'9' :'✨✨✨⬛️🚹🚹🚹🚹🚹☁️🚹🚹🚹🚹🚹⬛️✨✨✨',
'10' :'✨✨✨✨⬛️⬛️⬛️⬛️⬛️☁️⬛️⬛️⬛️⬛️⬛️✨✨✨✨',
'11' :'✨✨✨✨⬛️🅰️🅰️🅰️⬛️☁️⬛️🅰️🅰️🅰️⬛️✨✨✨✨',
'12' :'✨✨✨⬛️🅰️🅰️🅰️🅰️⬛️🅰️⬛️🅰️🅰️🅰️🅰️⬛️✨✨✨',
'13' :'✨✨⬛️🅰️🅰️🅰️🅰️🅰️⬛️🅰️⬛️🅰️🅰️⁣🅰️🅰️🅰️⬛️✨✨',
'14' :'✨✨⬛️🅰️🅰️🅰️⬛️⬛️🅰️🅰️🅰️⬛️⬛️🅰️🅰️🅰️⬛️✨✨',
'15' :'✨⬛️🅰️🅰️🚹⬛️🚹🅰️🅰️🅰️🅰️🅰️🚹⬛️🚹🅰️🅰️⬛️✨',
'16' :'⬛️🅰️🅰️🚹⬛️🚹🅰️⬛️⬛️⬛️⬛️⬛️🅰️🚹⬛️🚹🅰️🅰️⬛️',
'17' :'⬛️🅰️🚹⬛️🅰️🅰️⬛️🅰️🅰️🅰️🅰️🅰️⬛️🅰️🅰️⬛️🚹🅰️⬛️',
'18' :'⬛️🅰️⬛️🅰️🅰️⬛️🅰️🅰️🅰️🅰️🅰️🅰️🅰️⬛️🅰️🅰️⬛️🅰️⬛️',
'19' :'⬛️🅰️⬛️🅰️⬛️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️⬛️🅰️⬛️🅰️⬛️',
'20' :'✨⬛️⬛️⬛️⬛️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️⬛️⬛️⬛️⬛️✨',
'21' :'✨✨✨✨⬛️🅰️🅰️⬛️⬛️🅰️⬛️⬛️🅰️🅰️⬛️✨✨✨✨',
'22' :'✨✨✨✨⬛️🅰️⬛️☁️⬛️🅰️⬛️☁️⬛️🅰️⬛️✨✨✨✨',
'23' :'✨✨✨✨⬛️🅰️⬛️☁️⬛️🅰️⬛️☁️⬛️🅰️⬛️✨✨✨✨',
'24' :'✨✨✨✨⬛️🅰️⬛️⬛️⬛️🅰️⬛️⬛️⬛️🅰️⬛️✨✨✨✨',
'25' :'✨✨✨✨⬛️🅰️⬛️🅰️🅰️🅰️🅰️🅰️⬛️🅰️⬛️✨✨✨✨',
'26' :'✨✨✨✨⬛️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️⬛️✨✨✨✨',
'27' :'✨✨✨✨✨⬛️🅰️🅰️🅰️🅰️🅰️🅰️🅰️⬛️✨✨✨✨✨',
'28' :'✨✨✨✨✨✨⬛️⬛️🅰️🅰️🅰️⬛️⬛️✨✨✨✨✨✨',
'29' :'✨✨✨✨✨✨✨✨⬛️⬛️⬛️✨✨✨✨✨✨✨✨',
}


//you guys this is pretty cool!! 

function getBoard() {
  let index = Math.floor(Math.random() * globalBoard.length)
  solutionBoard = globalBoard[index].map(arr => arr.slice());
  return globalBoard[index].map(arr => arr.slice());
}

/**
 * Setup the Sudoku Board based on the specified difficulty
 */
function setupBoard(reg_Board, difficulty) {
  let count = value[difficulty];
  let i, j;
  let board = reg_Board.map(function(arr) {
    return arr.slice();
  });
  while (count > 0) {
    i = Math.floor(Math.random() * board.length);
    j = Math.floor(Math.random() * board[0].length);
    if (board[i][j] !== 0) {
      board[i][j] = 0;
      count--;
    }
  }
  copyOfUserBoard = board.map(arr => arr.slice());
  return board;
}

function solver(userboard) {
  for (let i = 0; i < userboard.length; i++) {
    for (let j = 0; j < userboard[i].length; j++) {
      askForHelp(userboard, j, i);
    }
  }
}

function askForHelp(userboard, x, y) {
  userboard[x][y] = solutionBoard[x][y];
  print(userboard);
  console.log(`${solutionBoard[x][y]} is the right answer at (${x + 1},${y + 1})! 😉`);
}

function checkSolution(userboard) {
  let count = 0;
  for (let i = 0; i < userboard.length; i++) {
    for (let j = 0; j < userboard[i].length; j++) {
      if (solutionBoard[i][j] !== userboard[i][j]) {
        userboard[i][j] = 0;
        count++;
      }
    }
  }
  if (count === 0) {
    for(const k in pic){
      console.log(pic[k]);
    }
    console.log('🥳 🎊 🥂  Congratulations! You completed this Sudoku!! 🏆 🎻 🎶 🎉  ')
    return 'q';
  }
  print(userboard)
  console.log(`💩 You have ${count} wrong inputs 💩\n`)
  return '';
}

function add(userboard, val, x, y) {
  if (userboard[x][y] === 0) {
    userboard[x][y] = val;
    print(userboard)
  } else {
    print(userboard)
    io.write('This position cannot be changed ⛔️')
  }
}

function deleteValue(userboard, x, y) {
  if (userboard[x][y] === solutionBoard[x][y]) {
    print(userboard)
    console.log('You\'re deleting a correct number! 🙉 ');
  } else if(userboard[x][y] === 0){
      console.log('🤔 You can not get an empty position! 🤔')
  }else{
      const value = userboard[x][y]
      userboard[x][y] = 0;
      print(userboard);
      console.log(`${value} was deleted at (${x + 1},${y + 1}) 🙈 `);
  }
}
/**
 * Print our Sudoku Board
 */
function print(userboard) {
  console.log('   x    1  2  3  4  5  6  7  8  9');
  console.log('y      ---------------------------')
  for (var i = 0; i < userboard.length; i++) {
    let string = '';
    if(i%3===0 &&  i!==0)
      console.log('       ---------------------------')
    for (var z = 0; z < userboard[i].length; z++) {
      let input=''
      if(z%3===0 &&  z!==0){
        if(seeingCheese){
          input = userboard[i][z] === 0 ? '|🧀' : '|'+userboard[i][z];
        }else{
          input = userboard[i][z] === 0 ? '|_' : '|'+userboard[i][z];
        }
      }else{
        if(seeingCheese){
          input = userboard[i][z] === 0 ? ' 🧀' : ' '+userboard[i][z];
        }else{
          input = userboard[i][z] === 0 ? ' _' : ' '+userboard[i][z];
        }
      }
      string += ' ' + String(input);
    }
    console.log(i + 1, ' | ', string)
  }
}
/**
 * Checks if userInput is a Valid Board index value and number
 */
function isNumbers(input, flag){
  let validInputs = [1,2,3,4,5,6,7,8,9];
  if(flag){
    if(input.length !== 2)return false;
    let firstValue = Number(input[0]);
    let secondvalue = Number(input[1]);
    if(firstValue !== NaN && secondvalue !== NaN){
      return validInputs.includes(firstValue) && validInputs.includes(secondvalue)
    }else{
      return false;
    }
  }else{
    return validInputs.includes(Number(input));
  }
}


const io = require('console-read-write');

async function main() {
  console.log();

  io.write(`What cheesy difficulty are you in the mood for?\nEasy Emmental Cheese? or the Melty Mozzarella? Maybe the pungent Hooligan?\ne-Emmental\nm-Mozzarella\nh-Hooligan`);
//you can stick with h with Halloumi
  let difficulty = await io.read();
  let userBoard = getBoard();
  let keepPlaying = false;
  while(difficulty !== 'x' &&  difficulty !== 'e' && difficulty !== 'm'
  && difficulty !== 'h'){
    io.write(` 🤔 ${difficulty} is not a cheesy difficulty!`)
    io.write(`Please select from the following difficulties:\ne-Emmental\nm-Mozzarella\nh-Hooligan`);
    difficulty = await io.read();
  }

  //seeing cheese?
  io.write('Would you like extra cheese?\n (Y):🧀\n (N):_');
  let cheese = await io.read();
  cheese = cheese.toLowerCase();
  while(cheese !== 'y' && cheese !== 'n'){
    io.write(` ⁉️ ${cheese} is not a valid input!`)
    io.write('Cheese or no cheese?\n (Y):🧀\n (N):_');
    cheese = await io.read();
  }
  seeingCheese = cheese === 'y' ? true : false;

  userBoard = setupBoard(userBoard, difficulty);
  print(userBoard);

  while (!keepPlaying) {
    io.write(`Do you want to keep playing?\n ${Object.values(help).join(' ')}`);
    let userInput = await io.read();
    keepPlaying = userInput === 'q';
    /**
     * Case where user wants to add value to the 2d array
     */

    userInput = userInput.toLowerCase();
    if (userInput === 'a') {
      io.write('Where would you like to add your number? Ex: \'col,row\' between (1-9)');
      let row_col = await io.read();
      let index = row_col.split(',')
      while (!isNumbers(index, true)) {
        io.write(` 🚫 (${row_col})is an incorrect input! Please input two numbers between 1 and 9 seperated by a ","`);
        row_col = await io.read();
        index = row_col.split(',')
      }
      io.write('What value between (1-9) would you like to add to the board?');
      let value = await io.read();
      while (!isNumbers(value,false)) {
        io.write(' ⁉️ The value must be between 1 and 9!');
        value = await io.read();
      }
      add(userBoard, Number(value), Number(index[1]) - 1, Number(index[0]) - 1)
    }
    /**
     * Case where user wants to delete element from the 2d array
     */

    else if (userInput === 'd') {
      io.write('Which index would you like to delete? Ex: \'col,row\' between (1-9)');
      let row_col = await io.read();
      let index = row_col.split(',')
      while (!isNumbers(index,true)) {
        io.write(` 🚫 (${row_col})is an incorrect input! Please input two numbers between 1 and 9 seperated by a ","`);
        row_col = await io.read();
        index = row_col.split(',')
      }
      deleteValue(userBoard, Number(index[1]) - 1, Number(index[0]) - 1)
    }
    /**
     * Case where user wnats to get a hint
     */

    else if (userInput === 'h') {
      io.write('Which index do you want a free answer for? Ex: \'col,row\' between (1-9)');
      let row_col = await io.read();
      let index = row_col.split(',')
      while (!isNumbers(index, true)) {
        io.write(` 🚫 (${row_col})is an incorrect input! Please input two numbers between 1 and 9 seperated by a ","`);
        row_col = await io.read();
        index = row_col.split(',')
      }
      askForHelp(userBoard, Number(index[1]) - 1, Number(index[0]) - 1)
    }
    /**
     * Case where User wishes to compare their current board state with the solution
     * board state.
     */

    else if (userInput === "c") {
      io.write('Checking your solution...\n');
      let exitcode = checkSolution(userBoard);
      if(exitcode === 'q'){
        break;
      } 
    }
    /**
     * Case of incorrect user input.
     */
    else if(userInput === 'q'){ 
      io.write('Quiting the game...')
      break;
    }
     
     else if (userInput === 'r' ){
       io.write('Which index do you want to replace? Ex: \'col,row\' between (1-9)');
      let row_col = await io.read();
      let index = row_col.split(',')
      while (!isNumbers(index, true)) {
        io.write(` 🚫 (${row_col})is an incorrect input! Please input two numbers between 1 and 9 seperated by a ","`);
        row_col = await io.read();
        index = row_col.split(',')
      } 
      io.write('What value between (1-9) would you like to replace on the board?');
      let value = await io.read();
      while (!isNumbers(value,false)) {
        io.write(' ⁉️ The value must be between 1 and 9!');
        value = await io.read();
      }
      replace(userBoard, Number(value), Number(index[1]) - 1, Number(index[0]) - 1)
    }


    else{
      io.write(`🚫 ${userInput}🚫 is an incorrect input! Please try again`)
    }
  }
  // solver(userBoard);
  io.write('GAME OVER!!! Cheddar™ luck next time! 🐁  ');
  io.write('Would you like another serving of our cheesy 🧀 Cheddar™ Game 🧀?\n(Y)es or (N)o\n');
  let answer = await io.read();
  answer = answer.toLowerCase();
  if(answer === 'y'){
    main().then;
  }else{
    io.write('No? This is 🧀 Nacho🧀  game! Have a 🧀 gouda🧀  day! Thanks for playing!');
  }
}

alert("\x1b[31m", "                 Welcome to the Cheddar Game™!! \nYour mission if you cheese to accept it is to complete this Sudoku.\nYou have to change all the 🧀  to the correct value.\nEach of the nine blocks has to contain all the numbers 1-9 within its squares.  Each number can only appear once in a row, column or box. \nBe quick because 🐭  is hungry! 'Cheese' the day!")
alert("\x1b[0m", '-------------------------------------------------------------------------------')

main().then;
 
function replace(userboard, val, x ,y){
  if (userboard[x][y] === val){
  print(userboard)
  io.write('You cannot replace the same value ⛔️')
  }
  else if(copyOfUserBoard[x][y] === 0){
    userboard[x][y] = val
    print(userboard)
    io.write('Great! You replace successfully this value! Cheese™!')
  } else {
    print(userboard)
    io.write('This value cannot be replaced ⛔️')
  }
}
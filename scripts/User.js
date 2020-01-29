const name=prompt('Для начала игры введита Ваше имя');
let whoIs=''; // переменная, в последствии, содержащая имя игрока

if (name === null){ // проверяем то, что ввели в prompt
    document.querySelector('.user__title').textContent='Неизвестный игрок';
    document.querySelector('.message').textContent=`Ваш ход`;    
} else {
    document.querySelector('.user__title').textContent=name;
    whoIs=name;
    document.querySelector('.message').textContent=`${name}, Ваш ход`;    
}

const userSquare=document.querySelector('.user__square');
const userStyleShips='deckForUser';

const makeUserSquare=new Square(userSquare);
const arrUserSquares=makeUserSquare.render(); // отрисовываем пустое поле игрока, с вовращением двумерного массива

let rndXUser=Math.floor(Math.random() * Math.floor(10)); // создание одного 4х-палубника, аналогично для компьютера в файле Computer.js
let rndYUser=Math.floor(Math.random() * Math.floor(7));
let rndDirectionUser=Math.floor(Math.random() * Math.floor(2));
const fourDeckShipsUser=new Ship(rndDirectionUser, arrUserSquares, 4, rndXUser, rndYUser, userStyleShips);
fourDeckShipsUser.makeShip();

for(let i=1; i < 3; i++){ // создание двух 3х-палубников, аналогично для компьютера в файле Computer.js
    const xy=new XYDirection(arrUserSquares);
    const arrXYDirection=xy.makeXY();
    const threeDeckShipsUser=new Ship(arrXYDirection[0], arrUserSquares, 3, arrXYDirection[1], arrXYDirection[2], userStyleShips);
    threeDeckShipsUser.makeShip();
}

for(let i=1; i < 4; i++){ // создание трех 2х-палубников, аналогично для компьютера в файле Computer.js
    const xy=new XYDirection(arrUserSquares);
    const arrXYDirection=xy.makeXY();
    const twoDeckShipsUser=new Ship(arrXYDirection[0], arrUserSquares, 2, arrXYDirection[1], arrXYDirection[2], userStyleShips);
    twoDeckShipsUser.makeShip();
}

for(let i=1; i < 5; i++){ // создание четырех 1-палубников, аналогично для компьютера в файле Computer.js
    const xy=new XYDirection(arrUserSquares);
    const arrXYDirection=xy.makeXYOneDeck();
    const oneDeckShipsUser=new Ship(arrXYDirection[0], arrUserSquares, 1, arrXYDirection[1], arrXYDirection[2], userStyleShips);
    oneDeckShipsUser.makeShipOneDeck();    
}

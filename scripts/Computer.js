const computerSquare=document.querySelector('.computer__square');
const pcStyleShips='deckForPC'; 

const makeComputerSquare=new Square(computerSquare);
const arrComputerSquares=makeComputerSquare.render(); // рендерим пустое поле для компьютера, с вовращением двумерного массива

let rndXComputer=Math.floor(Math.random() * Math.floor(10)); // определяем случайное число по оси Х 
let rndYComputer=Math.floor(Math.random() * Math.floor(7)); // определяем случайное число по оси У
let rndDirectionComputer=Math.floor(Math.random() * Math.floor(2)); // определяем случайное направление корабля
const fourDeckShipsComputer=new Ship(rndDirectionComputer, arrComputerSquares, 4, rndXComputer, rndYComputer, pcStyleShips);
fourDeckShipsComputer.makeShip(); // создание одного 4х-палубника

for(let i=1; i < 3; i++){ // создание двух 3х-палубников
    const xy=new XYDirection(arrComputerSquares);
    const arrXYDirection=xy.makeXY(); // метод определяет координаты по Х и по У и в какую сторону будет отрисован корабль, 
    // возвращает массив arrXYDirection, в котором содержатся эти три параметра, которые передаются в конструктор создания 3х
    // палубных кораблей Ship
    const threeDeckShipsComputer=new Ship(arrXYDirection[0], arrComputerSquares, 3, arrXYDirection[1], arrXYDirection[2], pcStyleShips);
    threeDeckShipsComputer.makeShip(); // отрисовываем 3х палубник
}

for(let i=1; i < 4; i++){ // создание трех 2х-палубников
    const xy=new XYDirection(arrComputerSquares);
    const arrXYDirection=xy.makeXY();
    const twoDeckShipsComputer=new Ship(arrXYDirection[0], arrComputerSquares, 2, arrXYDirection[1], arrXYDirection[2], pcStyleShips);
    twoDeckShipsComputer.makeShip();
}

for(let i=1; i < 5; i++){ // создание четырех 1-палубников
    const xy=new XYDirection(arrComputerSquares);
    const arrXYDirection=xy.makeXYOneDeck();
    const oneDeckShipsComputer=new Ship(arrXYDirection[0], arrComputerSquares, 1, arrXYDirection[1], arrXYDirection[2], pcStyleShips);
    oneDeckShipsComputer.makeShipOneDeck();    // отдельный метод отрисовывания 1-палубного корабля
}

new Gaming(arrUserSquares, computerSquare, whoIs); // конструктор игровой логики


class XYDirection{ // конструктор определения координат и направления отрисовки корабля, с параметром массива поля компьютера или игрока
    constructor(arr){
        this.deck=true;
        this.rndX;
        this.rndY;
        this.arr=arr;
        this.arrXYDirection=[];
    }
    makeXY(){ // метод для 3х, 2х палубных кораблей возвращающий, массив со следующими элементами: 0 - направление рисования ( 0 -
        // по горизонгтали, 1 - по вертикали), 1 - координата Х, 2 - координата У
        while(this.deck){ // цикл ищущий координаты для отрисовки
            this.rndX=Math.floor(Math.random() * Math.floor(10));
            this.rndY=Math.floor(Math.random() * Math.floor(8));

            if (!this.arr[this.rndX][this.rndY].hasAttribute('data-id')) { // если в координатах [X,Y] ничего нет
                if (!this.arr[this.rndX][this.rndY + 2].hasAttribute('data-id')) { // если нет ничего вправо на 2 клетки
                    this.rndDirection=0; // определяем, что будет горизонтальная отрисовка корабля
                    this.deck=false; // останавливаем цикл
                } else this.deck=true; // продолжаем цикл
            } else if (!this.arr[this.rndY][this.rndX].hasAttribute('data-id')) { // если в координатах [Y, X] ничего нет
                if (!this.arr[this.rndY + 2][this.rndX].hasAttribute('data-id')) { // если ничего нет внизу на 2 клетки
                    this.rndDirection=1; // определяем вертикальную отрисовку
                    this.deck=false; // завершаем цикл
                } else this.deck=true; // продолжаем цикл
            } else this.deck=true;
        }
        this.arrXYDirection[0]=this.rndDirection; // направление отрисовки
        this.arrXYDirection[1]=this.rndX; // координата Х
        this.arrXYDirection[2]=this.rndY; // координата У
        return this.arrXYDirection;
    }
    makeXYOneDeck(){ // метод отрисовки 1-палубного корабля
        while(this.deck){ 
            this.rndX=Math.floor(Math.random() * Math.floor(10));
            this.rndY=Math.floor(Math.random() * Math.floor(10));
            
            if (!this.arr[this.rndX][this.rndY].hasAttribute('data-id')) { // если в клетке ничего нет
                this.rndDirection=0;
                this.deck=false;
            } else {
                this.deck=true;
            }
        }
        this.arrXYDirection[0]=this.rndDirection;
        this.arrXYDirection[1]=this.rndX;
        this.arrXYDirection[2]=this.rndY;
        return this.arrXYDirection;
    }
}
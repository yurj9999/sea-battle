class Ship{ // конструктор отрисовки кораблей, с параметрами - направление отрисовки, двумерный массив с координатами поля,
    // количество палуб, координаты X, Y, цвет корабля (для компьютера - это цвет аналогичный цвету поля, для сокрытия от игрока
    // кораблей компьютера)
    constructor(rndDirection, arr, numberOfDecks, rndX, rndY, style){
        this.rndDirection=rndDirection;
        this.arr=arr;
        this.numberOfDecks=numberOfDecks;
        this.rndX=rndX;
        this.rndY=rndY;
        this.style=style;
    }
    makeShip(){ // метод отрисовки корабля по горизонтали или по вертикали
        if (this.rndDirection === 0) {
            this.horizontalDirection();
        } else this.verticalDirection();
    }
    makeShipOneDeck(){ // метод горизонтального отрисовывания 1-палубного корабля
        this.horizontalDirection();
    }
    horizontalDirection(){ // метод отрисовки 3х 2х палубных кораблей по горизонтали
        for(let i=0; i < this.numberOfDecks; i++){ // цикл соответсвующий количеству палуб корабля
            this.arr[this.rndX][this.rndY + i].classList.add(this.style); // окрашиваем палубы корабля в заданный цвет
            this.arr[this.rndX][this.rndY + i].setAttribute('data-id', 'deck'); // обозначаем палубы корабля для фиксирования
            // попаданий в дальнейшем
            if ((this.rndX + 1) < 10) { // здесь и ниже, условия обозначения полей вокруг корабля, это необходимо
                // отмечать, чтобы при прорисовке других кораблей, они не накладывались друг на друга и не были впритык
                this.arr[this.rndX + 1][this.rndY + i].setAttribute('data-id', 'busy'); // busy - обозначение поля рядом с кораблем
                if ((this.rndY - 1) >= 0) this.arr[this.rndX + 1][this.rndY - 1].setAttribute('data-id', 'busy');
                if ((this.rndY + this.numberOfDecks) < 10) this.arr[this.rndX + 1][this.rndY + this.numberOfDecks].setAttribute('data-id', 'busy');
            }
            if ((this.rndY - 1) >= 0) this.arr[this.rndX][this.rndY - 1].setAttribute('data-id', 'busy');
            if ((this.rndY + this.numberOfDecks) < 10) this.arr[this.rndX][this.rndY + this.numberOfDecks].setAttribute('data-id', 'busy');
            if ((this.rndX - 1) >= 0) {
                this.arr[this.rndX - 1][this.rndY + i].setAttribute('data-id', 'busy');
                if ((this.rndY - 1) >= 0) this.arr[this.rndX - 1][this.rndY - 1].setAttribute('data-id', 'busy');
                if ((this.rndY + this.numberOfDecks) < 10) this.arr[this.rndX - 1][this.rndY + this.numberOfDecks].setAttribute('data-id', 'busy');
            }
        }
    }
    verticalDirection(){ // вертикальная отрисовка корабля, аналогична горизонтальной
        for(let i=0; i < this.numberOfDecks; i++){
            this.arr[this.rndY + i][this.rndX].classList.add(this.style);
            this.arr[this.rndY + i][this.rndX].setAttribute('data-id', 'deck');
            if ((this.rndX + 1) < 10) {
                this.arr[this.rndY + i][this.rndX + 1].setAttribute('data-id', 'busy');
                if ((this.rndY - 1) >= 0) this.arr[this.rndY - 1][this.rndX + 1].setAttribute('data-id', 'busy');
                if ((this.rndY + this.numberOfDecks) < 10) this.arr[this.rndY + this.numberOfDecks][this.rndX + 1].setAttribute('data-id', 'busy');
            }
            if ((this.rndY - 1) >= 0) this.arr[this.rndY - 1][this.rndX].setAttribute('data-id', 'busy');
            if ((this.rndY + this.numberOfDecks) < 10) this.arr[this.rndY + this.numberOfDecks][this.rndX].setAttribute('data-id', 'busy');
            if ((this.rndX - 1) >= 0) {
                this.arr[this.rndY + i][this.rndX - 1].setAttribute('data-id', 'busy');
                if ((this.rndY - 1) >= 0) this.arr[this.rndY - 1][this.rndX - 1].setAttribute('data-id', 'busy');
                if ((this.rndY + this.numberOfDecks) < 10) this.arr[this.rndY + this.numberOfDecks][this.rndX - 1].setAttribute('data-id', 'busy');
            }
        }
    }
}

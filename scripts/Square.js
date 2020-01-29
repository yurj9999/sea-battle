class Square{ // конструктор создания пустого игрового поля, на котором будут расставляться корабли
    constructor(dom){
        this.dom=dom;
        this.arrI;
        this.arr=[];
        this.arrSquares=[];
    }
    render(){ // метод отрисовки игрового поля, возвращающий двумерный массив, по которому будет определяться логика отрисовки кораблей
        for(let i=1; i < 11; i++){
            this.arrI=document.createElement('div');
            this.arrI.classList.add('arrI');
            this.dom.appendChild(this.arrI);
            for(let i=1; i < 11; i++){
                const arrJ=document.createElement('div');
                arrJ.classList.add('arrJ');
                this.arrI.appendChild(arrJ);
            }
        }
        this.arr=Array.from(this.dom.querySelectorAll('.arrI'));
        for(let i=0; i < 10; i++){
            this.arrSquares[i]=Array.from(this.arr[i].querySelectorAll('.arrJ'));
        }
        return this.arrSquares;
    }
}
class Gaming{ // конструктор логики игрового процесса, ему передаются следующие параметры: двумерный массив, 
    // для отрисовки кораблей, dom-элемент куда отрисовываются корабли и имя игрока
    constructor(arr, computerSquare, name){
        this.arr=arr;
        this.computerSquare=computerSquare;
        this.computerHit=0; // переменная, содержащая количество попаданий компьютером
        this.userHit=0; // переменная, содержащая количество попаданий игроком
        this.name=name;
    
        document.querySelector('.message').textContent=`Делайте Ваш первый ход.`;
        this.computerSquare.addEventListener('mousedown', (e) => this.play(e));
    }

    nexTimer(hitNone, x, y){ // метод, для отображения хода игроков со следующими параметрами: попал-непопал,
        // X, Y - координаты, куда произведен выстрел  
        document.querySelector('.message').textContent='Ход компьютера ...';
        this.computerSquare.setAttribute('style', `pointer-events: none`);
        
        setTimeout(()=>{ // усстанавливается таймер для хода компьютера
            this.arr[x][y].classList.add(hitNone);            
            this.computerSquare.setAttribute('style', `pointer-events: auto`);
            document.querySelector('.message').textContent=`${this.name} Ваш ход`;
        }, 400);
    }

    winTimer(message){ // метод определяющий победителя-компьютера с сообщением message
        setTimeout(()=>{ // таймер для всплывающего окна alert
            this.computerSquare.setAttribute('style', `pointer-events: none`);
            alert('Компьютер победил !!! Обновите страницу для продолжения игры');
            document.querySelector('.message').textContent=message;
        }, 550);
        return;
    }

    mainCode(x, y){ // метод, содержащий основной код игровой логики с координатами х,у
        if ((this.arr[x][y].classList.contains('none')) || (this.arr[x][y].classList.contains('hit'))) { // если второй раз попадаем в
            // поле, с отметкой о попадании, или с отметкой о промахе, то запускаем процесс определения других координат
            let stop=false; // индикатор остановки цикла ниже
            while(!stop){ // в этом цикле определяем новые координаты выстрела, так, чтобы они не совпадали с координатами выстрела ранее
                x=Math.floor(Math.random() * Math.floor(10));
                y=Math.floor(Math.random() * Math.floor(10));
                if ((this.arr[x][y].classList.contains('none')) || (this.arr[x][y].classList.contains('hit'))) { // если новые координаты
                    // совпадают с координатами передынными ранее, то цикл продолжается
                    stop=false;
                } else { // если координаты не совпадают с предыдущими
                    if (this.arr[x][y].getAttribute('data-id') === 'deck') { // если есть попадание по одной из палуб
                        this.computerHit++; // количество попаданий компьютера увеличивается на 1
                        this.nexTimer('hit', x, y); // запускается метод отображения хода игроков
                        if (this.computerHit === 20) { // проверяем уничтожение всех кораблей игрока
                            this.winTimer(`${this.name} Вы проиграли. Обновите страницу, для продолжения игры`); 
                        }
                    } else this.nexTimer('none', x, y); // если попали мимо
                    stop=true;
                }
            }
        } else { // если координаты соответсвуют полю, по которому еще не стреляли
            if (this.arr[x][y].getAttribute('data-id') === 'deck') { // проверка на попадание
                this.computerHit++;
                this.nexTimer('hit', x, y);
                if (this.computerHit === 20) {
                    this.winTimer(`${this.name} Вы проиграли. Обновите страницу, для продолжения игры`);
                }
            } else this.nexTimer('none', x, y); // если не попали
        }
    }

    play(e){ // обработчик нажатия мыши на поле
        if ((e.target.getAttribute('data-id') === 'busy') || (e.target.hasAttribute('data-id') === false)) { // если попали 
            // по пустому квадрату или кваадрату около корабля
            if (!e.target.classList.contains('none')) { // если ранее не попадали в это пустое место
                e.target.classList.add('none'); // меняем цвет пустого поля, отмечая попадание по нему
                let x=Math.floor(Math.random() * Math.floor(10));
                let y=Math.floor(Math.random() * Math.floor(10));
                this.mainCode(x, y); // вставляем основную часть кода
            }
        }
        if (e.target.getAttribute('data-id') === 'deck') { // если попали по одной из палуб
            if (!e.target.classList.contains('hit')) { // если ранее не попадпли по этой палубе
                e.target.classList.add('hit'); // отмечаем попадпние
                this.userHit++; // увеличиваем счетчик попаданий игрока
                if (this.userHit === 20) { // проверяем победил ли игрок
                    setTimeout(()=>{ // таймер для всплывающего окна alert
                        alert(`${this.name}, поздравляю !!! Вы - победили. Обновите страницу для продолжения игры`);
                        document.querySelector('.message').textContent=`${this.name} Вы победили. Поздравляю !!! Обновите страницу для прохождения игры`;
                    }, 300);
                    this.computerSquare.setAttribute('style', `pointer-events: none`);
                    return;
                }
                let x=Math.floor(Math.random() * Math.floor(10));
                let y=Math.floor(Math.random() * Math.floor(10));
                this.mainCode(x, y);    
            }
        }
    }
}
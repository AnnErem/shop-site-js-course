class GoodsItem {
    constructor(title = 'default title', price = 0) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `
    <div class="goods-item">
        <div class="goods-item__img"></div>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="button goods-item__button">Добавить</button>
    </div>`;
    }
}
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
            { title: 'Shirt', price: 150 },
            { price: 50 },
            { title: 'Jacket' },
            { title: 'Shoes', price: 250 },
        ]
    }
    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }
    countSumm() {
        let summ = 0;
        this.goods.forEach(good => {
            if (good.price) {
                summ += good.price;
            }
        })
    }
}


const list = new GoodsList;
list.fetchGoods();
list.render();

class Cart {
    showCart() { };
    hideCart() { };
}
class CartItem extends GoodsItem {
    render() {
        return `
            <div class="cart-item">
                <div class="cart-item__img"></div>
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="button cart-item__button"></button>
            </div>`
    }
    delete() { }
}


//реализация *домашнего задания
class Hamburger {
    constructor(size = 'small', stuffing = 'cheese') {
        this.size = size; //small or big
        this.stuffing = stuffing; //cheese or salad or potato
        this.topping = [];
        this.price = 0;
        this.ccal = 0;
    }
    addSauce() { //добавить приправу
        this.topping.push('sauce');
        this.price += 15;
    }
    addMayo() { //добавить майонез
        this.topping.push('mayo');
        this.price += 20;
        this.ccal += 5;
    }
    removeTopping(topping) {
        this.topping = this.topping.filter(value => value !== topping);
        if (topping = 'mayo') {
            this.price -= 20;
            this.ccal -= 5;
        } else if (topping = 'sauce') {
            this.price -= 15;
        }
    }
    getSizePrice() {
        if (this.size == 'small') {
            this.price += 50;
            this.ccal += 20;
        } else if (this.size == 'big') {
            this.price += 100;
            this.ccal += 40;
        }
    }
    getStuffingPrice() {
        if (this.stuffing == 'cheese') {
            this.price += 10;
            this.ccal += 20;
        } else if (this.stuffing == 'salad') {
            this.price += 20;
            this.ccal += 5;
        } else if (this.stuffing == 'potato') {
            this.price += 15;
            this.ccal += 10;
        }
    }
    getInfoAboutBurger() {
        this.getSizePrice();
        this.getStuffingPrice();
        console.log(`Цена: ${this.price}. Количество калорий: ${this.ccal}`)
    }
}

let burger = new Hamburger;
burger.addMayo();
burger.addSauce();
burger.getInfoAboutBurger();
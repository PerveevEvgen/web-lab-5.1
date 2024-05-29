import {v4 as uuid4} from 'uuid'
const phoneOrder = {
    name: 'Samsung Galaxy S10',
    amount: 1,
    price: 500,
    currency: 'USD',
    description: 'Samsung Galaxy S10 is a mobile phone with a large screen, high resolution, and excellent camera.',
}

const logProduct = (product) => {
    console.log(product);
}

const logTotalPrice = (product) => {
    console.log(product.amount * product.price);
}


const createProduct = (obj, callback) => {
    return callback({...obj,id: uuid4()});
}



createProduct(phoneOrder, logProduct);
createProduct(phoneOrder, logTotalPrice);
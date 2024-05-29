import {v4 as uuid4} from 'uuid'

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];
  

const createDiscountAndAddId = (products,discount) => {
    return products.map((product,index) => {
        return {
            ...product,
            id: uuid4(),
            price: product.price - product.price * (discount/100)
        }
    })
}


console.log(createDiscountAndAddId(fruits, 20));
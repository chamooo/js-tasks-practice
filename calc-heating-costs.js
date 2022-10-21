/*
You have a small piece of mall data stored in the shoppingMallData object. They contain an array with data 
about stores, where the length and width of the room are indicated; room height; the cost of heating per 1 
cubic meter and the budget for paying for heating per month.

The main task is to write an isBudgetEnough function that will return a string. If the budget is enough to 
heat the entire volume of the shopping center - 'Budget is enough' is displayed, if not - 'Budget is not enough'. 
*/

'use_strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};
function isBudgetEnough(data) {
    let square = 0;

    // BETTER WAY
    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    // WORSE WAY
    // for(let i = 0; i < data.shops.length; i++) {
    //     square += data.shops[i].width * data.shops[i].length;
    // }
    
    let capacity = square * data.height;
    let paymentValue = capacity * data.moneyPer1m3;

    if(paymentValue <= data.budget) {
        return "Budget is enough";
    } else {
        return "Budget isn't enough";
    }
}

isBudgetEnough(shoppingMallData); 
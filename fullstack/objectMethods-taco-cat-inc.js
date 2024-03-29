/*
You run an insanely profitable business making gourmet tacos for cats. Given an object that represents the inventory of your company, add a method 'currentInventory' to your object that returns the current value of your company's inventory.

Then, add a sale method that takes an order object, returns the price of the order, updates the inventory of the purchased items, and adds the price of the order to the company's cash property.

Heads up: This problem is a bit more involved than anything you'd see on an admissions assessment or interview. Besides being a fun challenge, it's intended to show how you can use objects and their methods to store and change state.
*/

let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,

  currentInventory: function() { //if not a fx do this
  let total = 0
    for (let key in tacoCatInc) {
      //console.log('avtest', key);
      let order = key //shell
      let orderDetails = tacoCatInc[key] //hard or soft
      //console.log('test', orderDetails)
      if (typeof orderDetails === 'object'){
      for (let type in orderDetails) {
        let data = orderDetails[type] //obj with cost and quant
        let subTotal = data.cost * data.quantity
        total = total + subTotal
      }
      }
    }
    return total
},

  sale: function (orderObj) {
    let price = 0
    for (let type in orderObj) { //type = gourmetShell
      let subtype = orderObj[type] //hard treat shell
      console.log(type, subtype);
    }

    return price

  }
};

let order = {
  gourmetShell: 'hard treat shell',
  gourmetFishFilling: 'salmon'
};
console.log(tacoCatInc.sale(order))

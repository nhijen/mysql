const { createConnection } = require('mysql2')
const { prompt } = require('inquirer')
const db = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Jessemac1!',
  database: 'bamazon'
})

const showProductList = _ => {
    db.query('SELECT * FROM products', (e,r) => {
      if (e) throw e
      r.forEach(({ product_name, department_name, price, stock_quantity }) => console.log(`
        -->
          Product: ${product_name},
          Department: ${department_name},
          Price: $ ${price},
          In Stock: ${stock_quantity},
        
        -->
      `))
      makeItWork()
    })
  }

  const placeOrder = _ => {
    prompt([
      {
        type: 'input',
        name: 'productID',
        message: 'What is the ID of the product you want to buy?'
    },
    {
        type: 'input',
        name: 'howMany',
        message: 'How many of this product do you want to buy?'
      },
    ])
    //do a check. if not enough deny; if enough fullfil
//       .then(products => {
//         db.query(`           `, products, (e) => {
//           if (e) throw e
//           console.log('Insufficient quantity!')
//           makeItWork ()
//         })
//       })
//       .catch(e => console.log(e))
//   }

.then(products => {
    if (choices <= stock_quantity)
    console.log('Insufficient quantity!')
    else 
    console.log('Your request has been fulfilled')
})
    .catch(e => console.log(e))

}



  const makeItWork = _ => {
    prompt({
      type: 'list',
      name: 'action',
      message: 
      choices:
    })
      .then(({ action }) => {
     
  
  db.connect(e => {
    if (e) throw e
    makeItWork()
  })
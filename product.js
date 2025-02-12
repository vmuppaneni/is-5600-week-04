const fs = require('fs').promises
const path = require('path')

const productsFile = path.join(__dirname, 'data/full-products.json')

async function list () {
    const data = await fs.readFile(productsFile)
    return JSON.parse(data)
  }

  async function listProducts (req, res) {
    try {
      res.json(await Products.list()) // Use the Products service
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  
  async function list (options = {}) {
    const { offset = 0, limit = 25 } = options
    const data = await fs.readFile(productsFile)
  
    return JSON.parse(data).slice(offset, offset + limit) // Slice the products
  }


module.exports = {
  list
}

async function get (id) {
    const products = JSON.parse(await fs.readFile(productsFile))

}

for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i]
    }
  }

   // If no product is found, return null
  return null;




const db = require('../config/connection')
const { Lodge, Product } = require('../models')

const lodgeData = require('./lodge.json')
const productData = require('./product.json')

db.once('open', async () => {
    try {
        await Lodge.deleteMany({});
        await Lodge.create(lodgeData)
        await Product.deleteMany({});
        await Product.create(productData);
    
        console.log('Seeded successfully!');
        process.exit(0)
    } catch (err) {
        console.log('Seeding unsuccessful')
        throw err;
    }

})
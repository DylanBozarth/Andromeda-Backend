const mongoose = require('mongoose');
require('dotenv').config();


async function main() {
    await mongoose.connect(process.env.MONGOURL);
    // console.log(db.Collection.find())
    
}
main().catch(err => console.log(err));
console.log('yes')
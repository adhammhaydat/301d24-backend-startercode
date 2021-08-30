'use strict';
const mongoose=require('mongoose');

const coffeeSchema=mongoose.Schema({
    strDrink:String,
    strDrinkThumb:String,
    idDrink:String,
    
});

const coffeeModel=mongoose.model('favcofees',coffeeSchema);

const coffeeSeed=()=>{
    const coffee=new coffeeModel({
        strDrink:'Latte',
        strDrinkThumb:'https://www.healthifyme.com/blog/wp-content/uploads/2019/09/Black-coffee-feature-image.jpg',
        idDrink:'just coffee',
      
    })
    coffee.save()
    // console.log(coffee)
}

// module.exports=coffeeModel;
module.exports={
                coffeeModel
               
            };


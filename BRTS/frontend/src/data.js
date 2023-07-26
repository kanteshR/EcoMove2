import bcrypt from 'bcryptjs'
const data=   {
      users:[

   { 
    name: 'Siddarth',
    email:'siddartha2510@gmail.com',
    password: bcrypt.hashSync('123456'),
    isAdmin:true,
   },
   {
    name: 'Bhoomika',
    email:'bhoomika25@gmail.com',
    password:bcrypt.hashSync('123456'),
    isAdmin:false,

   }

      ],




    products: [
        {  // _id :'1',
            name:'ADIDAS SHIRT',
            slug:'ADIDAS-SLIM-SHIRT',
            category:'shirts',
            image:'/images/p1.jpg', //679px *829px
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality shirt',

        },  
       


             {  //_id :'2',
                name:'NIKE SLIP SHIRT',
                slug:'nike-slip-shirt',
                category:'shirts',
                image:'/images/p2.jpg',
                price:120,
                countInStock:10,
                brand:'Nike',
                rating:4.5,
                numReviews:10,
                description:'high quality shirt',
    
            },  


            {

               // _id :'3',
                name:'NIKE WOMENS SHIRT',
                slug:'WOMEN',
                category:'shirts',
                image:'/images/p3.jpg',
                price:120,
                countInStock:10,
                brand:'Nike',
                rating:4.5,
                numReviews:10,
                description:'high quality shirt',
    
            },  

            {   // _id :'4',
                name:'PUMA-SHIRT',
                slug:'PUMA PANTS',
                category:'shirts',
                image:'/images/p4.jpg',
                price:120,
                countInStock:10,
                brand:'Nike',
                rating:4.5,
                numReviews:10,
                description:'high quality shirt',
    
            }, 


            
        ],
};
export default data;
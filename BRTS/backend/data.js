import bcrypt from 'bcryptjs';
const data=   {
      users:[

   { 
    name: 'Kantesh',
    email:'kantesh@gmail.com',
    password: bcrypt.hashSync('123456'),
    isAdmin:true,
   },
   {
    name: 'Rakshita',
    email:'rakshita@gmail.com',
    password:bcrypt.hashSync('123456'),
    isAdmin:true,

   },

      ],




    products: [
        {

           // _id :'1',
            name:'HUBLI_DHARWAD',
            slug:'BRTS-122',
            category:'EXPRESS',
            image:'/images/p1.jpg', //679px *829px
            price:120,
            countInStock:10,
            brand:'EcoMove',
            rating:4.5,
            numReviews:10,
            description:'BRTS-122',

        },  
       


        {

           // _id :'2',
            name:'BRTS-ID1234',
            slug:'AMD',
            category:'PROCESSOR',
            image:'/images/p2.jpg',
            price:120,
            countInStock:10,
            brand:'RYZEN',
            rating:4.5,
            numReviews:10,
            description:'HING END PROCESSOR',
    
        },  
            


        {

           // _id :'3',
            name:'BRTS-ID2345',
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

        {   
               
           // _id :'4',
            name:'BRTS-ID7898',
            slug:'BRTS',
            category:'shirts',
            image:'/images/p4.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'arrvial time ',
                
        },  
        

            
        ],
};
export default data;
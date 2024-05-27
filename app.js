alert("cars");
let cars = [
{
   carname: "Bentley",
   price:200000,
   raiting:9.9,
   year: 2023,
   categories: "avtomatika",
   sale: "true",
   imageUrl: "https://www.banjaluka.com/wp-content/uploads/2019/06/bentli-440x315.jpg",
},
{
    carname: "Audi",
    price: 40000,
    raiting: 9.4,
    year: 2020,
    categories: "meqanika",
    sale: "folse",
    imageUrl: "https://pictures.dealer.com/generic-aoa-OEM_VIN_STOCK_PHOTOS/ac2d6b76eb675552da333476eef65d08.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
 },
 {
    carname: "Kia",
    price: 70000,
    raiting: 10.0,
    year: 2019,
    categories: "mecanika",
    sale: "true",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyhUMj13lMFBn2BjfQuWbV8QeOVTDTbuPepc0PIANBQ&s",
 },
 {
    carname: "Subaru",
    price: 50000,
    raiting: 8.8,
    year: 2018,
    categories:  "mecanika",
    sale: "folse",
    imageUrl: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/aa1d0c27-c6fb-4f06-a802-943aaa1dd38d/29ecec65-e5be-4f03-893e-256252e3473d.png",
 },
 {
    carname: "BMW",
    price: 100000,
    raiting: 9.8,
    year: 2023,
    categories:"avtomatika",
    sale: "true",
    imageUrl: "https://www.carscoops.com/wp-content/uploads/2022/05/2023-BMW-3-Series-Sedan-20-1024x589.jpg",
 },
 {
    carname: "Ford",
    price: 30000,
    raiting: 8.5,
    year: 2018,
    categories: "mecanika",
    sale: "folse",
    imageUrl: "https://cdn.jdpower.com/Models/320x240/2018-Ford-EcoSport.jpg",
 },
 {
    carname: "Suzuki",
    price: 80000,
    raiting: 9.9,
    year: 2022,
    categories: "avtomatika",
    sale: "folse",
    imageUrl:"https://electricvehicleweb.com/wp-content/uploads/2021/06/Suzuki-Vitara-Full-Hybrid-front-threee-quarter.jpg" ,
 },
 {
    carname: "mersedes",
    price: 35000,
    raiting:8.4,
    year: 2015,
    categories: "meqanika",
    sale: "folse",
    imageUrl: "https://www.motortrend.com/uploads/sites/10/2015/11/2015-mercedes-benz-e-class-e250-sedan-angular-front.png",
 },
 {
    carname: "Volvo",
    price: 31500,
    raiting: 9.6,
    year: 2021,
    categories: "avtomatika",
    sale: "folse",
    imageUrl: "https://cars.usnews.com/static/images/Auto/izmo/i159614793/2021_volvo_xc90_angularfront.jpg",
 },
 {
    carname: "Lexsus",
    price: 95000,
    raiting: 10.0,
    year: 2023,
    categories: "avtomatika",
    sale: "folse",
    imageUrl: "https://media.ed.edmunds-media.com/lexus/nx-350/2022/oem/2022_lexus_nx-350_4dr-suv_f-sport-handling_fq_oem_1_1280.jpg",
 },
] 
cars.forEach(car  => {
   document.write(`
   <hr>
   <h2>${car.carname}</h2>
   <p>${car.price}</p>
   <p>${car.raiting}</p>
   <p>${car.year}</p>
   <p>${car.categories}</p>
   <p>${car.sale}</p>
   <img class='photo' src='${car.imageUrl}' alt=''>
   <hr>
   `);
});

console.log(cars);

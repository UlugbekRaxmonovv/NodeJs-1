const fs = require("fs");
const path = require("path");

// fs.mkdirSync; //synk
// fs.mkdir; //aynk    va bu methods  va 3 ta parametr qabul qiladi   1-path 2-option 3-kalbek


// Papka yaratish.  Agar papka yaratilib  yana uni  run qilsak bizga xatolik keladi throw dan sababi yaratilgan papkani yana run qilsak shuni uchun 
// fs.mkdir(path.join(__dirname, '/papka'), {}, (err) =>{
//   if(err) throw  err 
//   console.log("Papka muvaffaqiyatli yaratildi");
  
// })

//File yaratish 

fs.writeFile(path.join(__dirname, '/papka', "namuna.txt"), "Node js orqali yaratildi", err =>{
    if(err) throw err
    console.log("Fayl muvaffaqiyatli yaratildi");
    
})

fs.writeFile(path.join(__dirname, '/papka', "namuna.txt"), "Heloo world", err =>{
    if(err) throw err
    console.log("Fayl muvaffaqiyatli yaratildi");
    
})
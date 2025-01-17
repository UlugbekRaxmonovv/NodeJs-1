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

// fs.writeFile(path.join(__dirname, '/papka', "namuna.txt"), "Node js orqali yaratildi", err =>{
//     if(err) throw err
//     console.log("Fayl muvaffaqiyatli yaratildi");

// })

// ///appendFile  bu    Node js orqali yaratildi   kontentini yonidan yana text qushib beardi albatta kiyingi textimizni yonidan  ' ' prabil tashlashimiz kerak sababi ikkta text qushilib ketmasligi uchun

// fs.appendFile(path.join(__dirname, '/papka', "namuna.txt"), " Heloo world", err =>{
//     if(err) throw err
//     console.log("Fayl muvaffaqiyatli yaratildi");

// })

/// Fayilni o'qish   bizga 'utf8' ketrak buladi sababi bizga rus yoki eng suz bulsa tug'ri aniqlab birda  va data degan o'zgarvchida bizning namuna.txt dagi gaplarimiz buladi

// fs.readFile(
//   path.join(__dirname, "/papka", "namuna.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;

//     console.log(data);
//   }
// );

/// Agar biz faylimizni o'zgartirishsak rename   methods foydalanamiz
// fs.rename(
//   path.join(__dirname, "/papka", "namuna.txt"),
//   path.join(__dirname, "/papka", "example.txt"),
//   (err) =>{
//     if(err) throw err   
//   }
// )

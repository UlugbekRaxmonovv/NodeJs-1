const http = require('http')

/// createServer ->   bu orqali server ishga tushiriladi      createServer-da malumotlarni junatish va qabul qilish bilan  malupotsiya qilishimiz mumkin 
/// write -> orqali yozilgan kodlarimiz brotherda ko'rinadi  
/// end  -> bilan tugatish kerakbuladi   bulmsa serverda xatolik yuz beradi 
const server = http.createServer((req,res) => {
    res.write('Salom Node js')
     res.end()
})

///listen   -> bu  portni etish uchun ishlatiladi 
server.listen(3000, () =>{
    console.log('Server runing port:  3000');
    
})
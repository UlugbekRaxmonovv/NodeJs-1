const os = require("os");
/// Os-> Bu operatsion sestim degani.  Bu asosan  kompyuterimizdagi barcha ma'lumotlarni masalan azular qancha yedrosi bor aperatsion sistima nomi

//platform -> bu nimadan ishlayotganimzini chiqarib beradi wendows bulsa  yoki Mack bulsa

// console.log(os.platform());

///arch -> wendows nechida ishlayotganini bilishimi mumkin 64 yoki 32 v.h
// console.log(os.arch());

///cpus -> yadrolar haqida ma'lumot olish  va nechta yadro bulayotgan bulsa shu  object qaytaradi
// console.log(os.cpus());

//freemem-> operatsion sestimamizda qancha joy borligin bilmoqchimiz va u asosan bayt kurinishda ko'rinadi

// console.log(os.freemem());

// totalmem -> Agar umumiy xotirani ko'rmoqchi bulsak     u asosan bayt kurinishda ko'rinadi

// console.log(os.totalmem());

// Uptime -> Agar siz operatsion sistema qachon ishga tushganini bilmoqchi bulsangiz   va kompyutiringizni yoqanizga qancha  sekundvaqt o'tganligini   


console.log(os.uptime());


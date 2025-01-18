const EventEmitter = require("events");
const uuid = require("uuid");

//  UUID  ->    Node.js’da UUID (Universally Unique Identifier) degan ma’no anglatadi va u universal noyob identifikator sifatida ishlatiladi. Bu turli xil maqsadlar, masalan, obyektlarni, ma’lumotlar bazasidagi yozuvlarni yoki tarqatilgan tizimlardagi komponentlarni noyob qilib aniqlash uchun qo‘llaniladi.
// uuid paketi haqida
// uuid — Node.js’da UUID yaratish uchun eng mashhur kutubxonalardan biri bo‘lib, quyidagi turdagi UUIDlarni qo‘llab-quvvatlaydi:

// UUID v1: Vaqt belgisi va tugun (odatda MAC-manzil) asosida yaratiladi.
// UUID v3: Namespace va nomga asoslangan, MD5 hashing ishlatiladi.
// UUID v4: Tasodifiy raqamlar asosida yaratilgan UUID.
// UUID v5: Namespace va nomga asoslangan, SHA-1 hashing ishlatiladi.
// console.log(uuid.v4());

class Logger extends EventEmitter{
    log(method,route){
        this.emit('massage', {
            id: uuid.v4(),
            method,
            route
        })
    }
}

module.exports = Logger


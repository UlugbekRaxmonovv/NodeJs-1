const EventEmitter = require('events')

/// EventEmtterdan meros olish
class NewEmitter extends EventEmitter {}

///Bir bir jaroyami eshitish uchun  on methodan foydalanamiz 
const newEmitter =  new NewEmitter

//Event  listener
newEmitter.on('Salom', ()=>{
    console.log('Salom Node.js');
    
})
///emit -> Qabul  qilib olish
newEmitter.emit('Salom')
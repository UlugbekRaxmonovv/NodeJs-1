const Logger = require('./logger')

const logger = new Logger()

logger.on('massage' , data =>{
 console.log('Logging', data);
 
})

logger.log('GET', '/admin/dashboard')
logger.log('POST', '/product/add')
logger.log('DELETE', '/users/123456')


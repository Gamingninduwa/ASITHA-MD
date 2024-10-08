const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=nqA03SwC#iPFie4PsmYjXK2wUuWKz7Slh40YB6JrCu8TT7BUdl1E",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};

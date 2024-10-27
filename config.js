const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=HzZBXDza#AFgho2WM6mj-9VrN-O_Et2BUg9ik3PTSWqGlWO8o3QU",
MONGODB: process.env.MONGODB || "mongodb+srv://Induwagaming:<db_9y*Mf9txfZAf4>@cluster0.ueok3.mongodb.net/",
};

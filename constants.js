var dotenv = require('dotenv');

dotenv.config()

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    BOT_TOKEN: process.env.BOT_TOKEN,
    WEBHOOK: process.env.WEBHOOK
}





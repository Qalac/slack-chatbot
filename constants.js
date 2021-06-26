var dotenv = require('dotenv');

dotenv.config()

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    BOT_TOKEN: process.env.BOT_TOKEN,
    SIGNING_SECRET: process.env.SIGNING_SECRET,
}

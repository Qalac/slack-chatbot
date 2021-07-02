


var channel_id = "C024623HDH8"

var mention = async ({ event, client }) => {
    try {
      const result = await client.chat.postMessage({
        channel: channel_id,
        text: `Welcome <@${event.user}>. 🎉 How are you doing? \n`
      });
      console.log(result);
    }
    catch (error) {
      console.error(error);
    }
};
  
module.exports = {
    mention: mention
}
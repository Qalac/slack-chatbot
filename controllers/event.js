
let EmotionPicker = {
	blocks: [
		{
			"type": "input",
			"element": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "*this is plain_text text*",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "*this is plain_text text*",
							"emoji": true
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "*this is plain_text text*",
							"emoji": true
						},
						"value": "value-2"
					}
				],
				"action_id": "static_select-action"
			},
			"label": {
				"type": "plain_text",
				"text": " ",
				"emoji": true
			}
		}
	]
}


var appEvent = async ({command, ack, say}) => {
    try {
        await ack();
        say(`Welcome <@${event.user}>. 🎉 How are you doing? \n ${EmotionPicker}`);
    }
    catch(err) {
        console.log(err);
    }
}


module.exports = {
    appEvent: appEvent
}


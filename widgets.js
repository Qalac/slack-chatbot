export const DatePicker = {
    "blocks": [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "Pick a date for the deadline."
            },
            "accessory": {
                "type": "datepicker",
                "initial_date": "1990-04-28",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Select a date",
                    "emoji": true
                },
                "action_id": "datepicker-action"
            }    
        }
    ]
}

export const TimePicker = {
    "blocks": [
        {
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Section block with atimepicker"
			},
			"accessory": {
				"type": "timepicker",
				"initial_time": "13:37",
				"placeholder": {
					"type": "plain_text",
					"text": "Select time",
					"emoji": true
				},
				"action_id": "timepicker-action"
			}
		},
    ]
}


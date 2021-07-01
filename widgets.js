const w =    {
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
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Click Me",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "actionId-0"
                    }
                ]
            }
        ]
    }



export const Datepicker = {
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
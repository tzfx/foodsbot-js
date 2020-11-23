# Foodsbot-JS!

Publishes the daily foodsby menu to a slack or discord channel.

## Setup

1. `npm ci` to install dependencies.
2. `npm run build` to package the typescript into a bundle.
3. Set Environment Variables
    - Foodsby (required)
        - `FOODSBY_API`: API Base for foodsby interaction.
        - `FOODSBY_LOCATION`: The number that corresponds to your delivery location in foodsby.
    - Slack
        - `SLACK_TOKEN`: Slack OAUTH token.
        - `SLACK_CHANNEL`: Slack channel you want to publish the daily foodsby menu to.
    - Discord
        - Server Settings > Integrations > Webhooks
        - New Webhook
        - Copy Webhook URL => '.../webhooks/${ID}/${TOKEN}'
        - Set environment Variables 
            - `DISCORD_TOKEN`: TOKEN
            - `DISCORD_ID`: ID
6. Copy the bundled code into a lambda and make sure all the variables are set.
7. Schedule a runtime and enjoy.
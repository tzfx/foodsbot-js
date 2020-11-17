# Foodsbot-JS!

Publishes the daily foodsby menu to a slack channel.

## Setup

1. `npm ci` to install dependencies.
2. `npm run build` to package the typescript into a bundle.
3. Requires the following Environment Variables to be set:
    - `SLACK_TOKEN`: Slack OAUTH token.
    - `FOODSBY_CHANNEL`: Slack channel you want to publish the daily foodsby menu to.
    - `FOODSBY_API`: API Base for foodsby interaction.
    - `FOODSBY_LOCATION`: The number that corresponds to your delivery location in foodsby.
4. Copy the bundled code into a lambda and make sure all the variables are set.
5. Schedule a runtime and enjoy.
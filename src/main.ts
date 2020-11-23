
import { SlackService } from './chats/slack';
import { DiscordService } from './chats/discord';
import { FoodsbyService } from './foodsby/FoodsbyService';

const FOODSBY = process.env.FOODSBY_API || "https://www.foodsby.com/api-monolith";
const FOODSBY_LOCATION = parseInt(process.env.FOODSBY_LOCATION);
const SLACK_TOKEN = process.env.SLACK_TOKEN;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL;
const DISCORD_ID = process.env.DISCORD_ID;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

export const run = async function() {
    try {
        // load the chat services e.g. [Discord, Slack, ...]
        let services = [];
        if (DISCORD_TOKEN && DISCORD_ID) services.push(new DiscordService(DISCORD_ID, DISCORD_TOKEN));
        if (SLACK_TOKEN && SLACK_CHANNEL) services.push(new SlackService(SLACK_TOKEN, SLACK_CHANNEL));
        if(services.length == 0) throw new Error("No Chats Defined");
        // Get the foodsby menu
        const foodsby = new FoodsbyService(FOODSBY, FOODSBY_LOCATION);
        const dailyMenu = await foodsby.fetchDailyMenu();
        // send the menus out
        await Promise.all(services.map((service) => service.send(dailyMenu.Deliveries)));
    } catch (err) {
        console.error(err);
        return 1;
    }
    return 0;
}

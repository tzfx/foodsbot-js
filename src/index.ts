
import { WebClient } from '@slack/web-api';
import { FoodsbyService } from './foodsby/FoodsbyService';

const TOKEN = process.env.SLACK_TOKEN;
const FOODSBY = process.env.FOODSBY_API || "https://www.foodsby.com/api-monolith";
const CHANNEL = process.env.FOODSBY_CHANNEL;
const LOCATION = parseInt(process.env.FOODSBY_LOCATION);

const SLACK_CLIENT = new WebClient(TOKEN);

exports.handler = async function() {
    
    const foodsby = new FoodsbyService(FOODSBY, LOCATION);
    const daily = await foodsby.fetchDailyMenu();
    const menu = daily[0]
        .Deliveries.map(
            (delivery) => `${delivery.RestaurantName}: order by ${delivery.Cutoff}, delivery at ${delivery.Dropoff}`
    );
    
    
    try {
        await SLACK_CLIENT.chat.postMessage({text: "🤖: Today's Foodsby choices are as follows:", channel: CHANNEL});
        await Promise.all(
            menu.map(
                (text) => SLACK_CLIENT.chat.postMessage({
                    text,
                    channel: CHANNEL
                })
            ));
    } catch (err) {
        console.error("An error occurred communicating with the Slack API", err);
        return 1;
    }
    return 0;
}


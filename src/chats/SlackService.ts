import { WebClient } from '@slack/web-api';
import { Delivery } from '../foodsby/DeliveryDay.types';
import { ChatService } from './ChatService.interface';

export class SlackService implements ChatService {
    private TOKEN: string;
    private CHANNEL: string;

    constructor(TOKEN: string, CHANNEL: string) {
        this.TOKEN = TOKEN;
        this.CHANNEL = CHANNEL;
    }

    async send(deliveries: Delivery[]) {
        const SLACK_CLIENT = new WebClient(this.TOKEN);
        await SLACK_CLIENT.chat.postMessage({
            text: "🤖: Today's Foodsby choices are as follows:",
            channel: this.CHANNEL
        });
        await Promise.all(
            deliveries.map((delivery) =>
                SLACK_CLIENT.chat.postMessage({
                    text: `${delivery.RestaurantName}: order by ${delivery.Cutoff}, delivery at ${delivery.Dropoff}`,
                    channel: this.CHANNEL
                })
            )
        );
    }
}

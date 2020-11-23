import { WebhookClient, MessageEmbed } from 'discord.js';
import { Delivery } from '../foodsby/DeliveryDay.types';
import { ChatService } from './ChatService.interface';

export class DiscordService implements ChatService {
    private DISCORD_ID: string;
    private DISCORD_TOKEN: string;

    constructor(id: string, token: string) {
        this.DISCORD_ID = id;
        this.DISCORD_TOKEN = token;
    }

    async send(deliveries: Delivery[]) {
        const webhookClient = new WebhookClient(
            this.DISCORD_ID,
            this.DISCORD_TOKEN
        );

        const embed = new MessageEmbed()
            .setTitle("🤖: Today's Foodsby choices are as follows:")
            .setColor('#0099ff');

        deliveries.forEach((delivery) => {
            embed.addField(
                delivery.RestaurantName,
                `- Order by: ${delivery.Cutoff.replace(
                    /:00$/,
                    ''
                )} \n - Delivery at: ${delivery.Dropoff.replace(/:00$/, '')}`
            );
        });

        await webhookClient.send('Webhook test', {
            username: 'Foodsby',
            avatarURL: 'https://www.foodsby.com/main/assets/fdsby_rgb.png',
            embeds: [embed]
        });
    }
}

import { Delivery } from '../foodsby/DeliveryDay.types';

export interface ChatService {
    send(deliveries: Delivery[]);
}

export const header = "🤖: Today's Foodsby choices are as follows:";
export const footer =
    'This is an automated message. See the code at github.com/tzfx/foodsbot-js';

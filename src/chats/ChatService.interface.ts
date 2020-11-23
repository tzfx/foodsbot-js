import { Delivery } from '../foodsby/DeliveryDay.types';

export interface ChatService {
    send(deliveries: Delivery[]);
}
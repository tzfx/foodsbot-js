import fetch from 'node-fetch';
import { DeliveryDay } from './DeliveryDay.types';

export class FoodsbyService {
    private api: URL;
    
    constructor(url: string, private location: number) {
        this.api = new URL(`${url}/location/${location}`);
    }
    
    private getFormattedDate(date: Date): string {
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        ].join("");
    }
    
    async fetchDailyMenu(date: Date = new Date()): Promise<DeliveryDay[]> {
        const requestUrl = new URL(`${this.api.href}/schedule?day=${this.getFormattedDate(date)}&duration=1`);
        return (await fetch(requestUrl)).json() as any;
    }
}
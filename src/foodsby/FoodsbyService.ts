import fetch from 'node-fetch';
import { DeliveryDay } from './DeliveryDay.types';

export class FoodsbyService {
    private api: URL;

    constructor(url: string, private location: number) {
        this.api = new URL(`${url}/location/${location}`);
    }

    // Prepend 0 if needed.
    private pad0(num: String) {
        return num.length === 1 ? '0' + num : num;
    }

    private getFormattedDate(date: Date): string {
        const [year, month, day] = [
            date.getFullYear().toString(),
            this.pad0((date.getMonth() + 1).toString()),
            this.pad0(date.getDate().toString())
        ];

        return [year, month, day].join('');
    }

    async fetchDailyMenu(date: Date = new Date()): Promise<DeliveryDay> {
        const requestUrl = new URL(
            `${this.api.href}/schedule?day=${this.getFormattedDate(
                date
            )}&duration=1`
        );
        const response = await fetch(requestUrl).then((res) => res.json());
        return response[0];
    }
}

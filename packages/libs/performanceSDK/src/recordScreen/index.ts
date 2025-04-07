import { record } from 'rrweb';

interface EventListScope {
    eventList: any[];
    scope: number | string;
}

export default class RecordScreen {
    public scopeTime: number = 3000;
    public cancelFallback: ReturnType<typeof record> | null;

    public eventList: EventListScope[] = [];
    constructor() {
        this.init();
    }

    init() {
        this.cancelFallback = record({
            emit: (event: any, isCheckout?: boolean) => {
                if(this.eventList.length === 0) {
                    this.eventList.push(this.getDefaultScope());
                }
                const lastEvnet = this.eventList[this.eventList.length - 1];
                lastEvnet.eventList.push(event);
                if (isCheckout) {
                    this.eventList = [this.getDefaultScope()]
                }
            },
            recordCanvas: true,
            checkoutEveryNms: this.scopeTime,
        });
    }
    getDefaultScope(): EventListScope {
        return {
            eventList: [],
            scope: Date.now()
        };
    }
    cancel() {
        this.cancelFallback?.();
        this.cancelFallback = null;
    }

    getEventList() {
        return this.eventList;
    }
}

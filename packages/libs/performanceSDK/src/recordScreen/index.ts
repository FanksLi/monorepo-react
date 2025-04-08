import { record } from 'rrweb';

interface EventListScope {
    eventList: any[];
    scope: number | string;
}

export default class RecordScreen {
    public scopeTime: number = 3000;
    public cancelFallback: ReturnType<typeof record> | null;

    public eventScope: EventListScope = this.getDefaultScope();
    constructor() {
        this.init();
    }

    init() {
        this.cancelFallback = record({
            emit: (event: any, isCheckout?: boolean) => {
                this.eventScope.eventList.push(event);
                if (isCheckout) {
                    this.eventScope = this.getDefaultScope();
                    this.eventScope.eventList.push(event);
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
        return this.eventScope;
    }
}

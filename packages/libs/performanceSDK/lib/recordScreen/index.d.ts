import { record } from 'rrweb';
interface EventListScope {
    eventList: any[];
    scope: number | string;
}
export default class RecordScreen {
    scopeTime: number;
    cancelFallback: ReturnType<typeof record> | null;
    eventScope: EventListScope;
    constructor();
    init(): void;
    getDefaultScope(): EventListScope;
    cancel(): void;
    getEventList(): EventListScope;
}
export {};

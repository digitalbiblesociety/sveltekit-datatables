export default class Columns {
    create(data: any, states: any, filters: any, options: any): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
        set: (this: void, value: any[]) => void;
        update: (this: void, updater: import("svelte/store").Updater<any[]>) => void;
        get: (self: any) => undefined;
        sort: (element: any, key: any, context: any) => void;
        filter: (key: any, value: any, operation: any) => void;
        draw: () => void;
        redraw: () => void;
    };
    id: any;
    get(id: any): any;
    getData(id: any): any;
}

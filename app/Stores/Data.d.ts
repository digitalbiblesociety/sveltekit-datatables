export default class Data {
    create(states: any, filters: any, options: any): {
        data: {
            subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
            set: (this: void, value: any[]) => void;
            sort: (key: any, direction: any) => void;
        };
        filtered: import("svelte/store").Readable<unknown>;
        rows: import("svelte/store").Readable<any>;
    };
    createData(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
        set: (this: void, value: any[]) => void;
        sort: (key: any, direction: any) => void;
    };
    createFiltered(data: any, rowsCount: any, globalFilter: any, localFilters: any): import("svelte/store").Readable<unknown>;
    createRows(filtered: any, options: any, pageNumber: any): import("svelte/store").Readable<any>;
}

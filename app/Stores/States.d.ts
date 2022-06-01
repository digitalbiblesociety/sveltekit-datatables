export default class States {
    create(options: any, identifier?: any): {
        rowsCount: import("svelte/store").Writable<number>;
        id: {
            subscribe: (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: (value?: any) => void) => import("svelte/store").Unsubscriber;
            get: () => any;
        };
        pageNumber: {
            subscribe: (this: void, run: import("svelte/store").Subscriber<number>, invalidate?: (value?: number) => void) => import("svelte/store").Unsubscriber;
            update: (this: void, updater: import("svelte/store").Updater<number>) => void;
            set: (number: any) => void;
        };
        datatableWidth: import("svelte/store").Writable<any>;
    };
    createPageNumber(id: any, options: any, rowsCount: any): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<number>, invalidate?: (value?: number) => void) => import("svelte/store").Unsubscriber;
        update: (this: void, updater: import("svelte/store").Updater<number>) => void;
        set: (number: any) => void;
    };
    createId(identifier?: any): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: (value?: any) => void) => import("svelte/store").Unsubscriber;
        get: () => any;
    };
    createRowsCount(): import("svelte/store").Writable<number>;
    createDatatableWidth(): import("svelte/store").Writable<any>;
}

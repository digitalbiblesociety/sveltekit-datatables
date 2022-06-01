export default class Filters {
    create(): {
        globalFilter: {
            subscribe: (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: (value?: any) => void) => import("svelte/store").Unsubscriber;
            set: (value: any) => void;
            remove: () => void;
        };
        localFilters: {
            subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
            update: (this: void, updater: import("svelte/store").Updater<any[]>) => void;
            add: (key: any, value: any, operation: any) => void;
            remove: () => void;
        };
    };
    createLocalFilters(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
        update: (this: void, updater: import("svelte/store").Updater<any[]>) => void;
        add: (key: any, value: any, operation: any) => void;
        remove: () => void;
    };
    createGlobalFilter(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: (value?: any) => void) => import("svelte/store").Unsubscriber;
        set: (value: any) => void;
        remove: () => void;
    };
}

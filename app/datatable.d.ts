export default class Datatable {
    constructor(identifier: any);
    id: any;
    create(): void;
    options: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<{
            sortable: boolean;
            pagination: boolean;
            rowsPerPage: number;
            columnFilter: boolean;
            scrollY: boolean;
            css: boolean;
            customFilters: {};
            labels: {
                search: string;
                filter: string;
                noRows: string;
                info: string;
                previous: string;
                next: string;
            };
        }>, invalidate?: (value?: {
            sortable: boolean;
            pagination: boolean;
            rowsPerPage: number;
            columnFilter: boolean;
            scrollY: boolean;
            css: boolean;
            customFilters: {};
            labels: {
                search: string;
                filter: string;
                noRows: string;
                info: string;
                previous: string;
                next: string;
            };
        }) => void) => import("svelte/store").Unsubscriber;
        set: (this: void, value: {
            sortable: boolean;
            pagination: boolean;
            rowsPerPage: number;
            columnFilter: boolean;
            scrollY: boolean;
            css: boolean;
            customFilters: {};
            labels: {
                search: string;
                filter: string;
                noRows: string;
                info: string;
                previous: string;
                next: string;
            };
        }) => void;
        get: (self: any) => undefined;
        parse: (opt: any) => {
            sortable: any;
            pagination: any;
            rowsPerPage: any;
            columnFilter: any;
            scrollY: any;
            css: any;
            labels: {
                search: any;
                filter: any;
                noRows: any;
                info: any;
                previous: any;
                next: any;
            };
            customFilters: any;
        };
    };
    states: {
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
    filters: {
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
    data: {
        data: {
            subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
            set: (this: void, value: any[]) => void;
            sort: (key: any, direction: any) => void;
        };
        filtered: import("svelte/store").Readable<unknown>;
        rows: import("svelte/store").Readable<any>;
    };
    columns: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
        set: (this: void, value: any[]) => void;
        update: (this: void, updater: import("svelte/store").Updater<any[]>) => void;
        get: (self: any) => undefined;
        sort: (element: any, key: any, context: any) => void;
        filter: (key: any, value: any, operation: any) => void;
        draw: () => void;
        redraw: () => void;
    };
    get(id: any): any;
    getOptions(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<{
            sortable: boolean;
            pagination: boolean;
            rowsPerPage: number;
            columnFilter: boolean;
            scrollY: boolean;
            css: boolean;
            customFilters: {};
            labels: {
                search: string;
                filter: string;
                noRows: string;
                info: string;
                previous: string;
                next: string;
            };
        }>, invalidate?: (value?: {
            sortable: boolean;
            pagination: boolean;
            rowsPerPage: number;
            columnFilter: boolean;
            scrollY: boolean;
            css: boolean;
            customFilters: {};
            labels: {
                search: string;
                filter: string;
                noRows: string;
                info: string;
                previous: string;
                next: string;
            };
        }) => void) => import("svelte/store").Unsubscriber;
        set: (this: void, value: {
            sortable: boolean;
            pagination: boolean;
            rowsPerPage: number;
            columnFilter: boolean;
            scrollY: boolean;
            css: boolean;
            customFilters: {};
            labels: {
                search: string;
                filter: string;
                noRows: string;
                info: string;
                previous: string;
                next: string;
            };
        }) => void;
        get: (self: any) => undefined;
        parse: (opt: any) => {
            sortable: any;
            pagination: any;
            rowsPerPage: any;
            columnFilter: any;
            scrollY: any;
            css: any;
            labels: {
                search: any;
                filter: any;
                noRows: any;
                info: any;
                previous: any;
                next: any;
            };
            customFilters: any;
        };
    };
    getPageNumber(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<number>, invalidate?: (value?: number) => void) => import("svelte/store").Unsubscriber;
        update: (this: void, updater: import("svelte/store").Updater<number>) => void;
        set: (number: any) => void;
    };
    getId(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: (value?: any) => void) => import("svelte/store").Unsubscriber;
        get: () => any;
    };
    getRowsCount(): import("svelte/store").Writable<number>;
    getDatatableWidth(): import("svelte/store").Writable<any>;
    getGlobalFilter(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: (value?: any) => void) => import("svelte/store").Unsubscriber;
        set: (value: any) => void;
        remove: () => void;
    };
    getLocalFilters(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
        update: (this: void, updater: import("svelte/store").Updater<any[]>) => void;
        add: (key: any, value: any, operation: any) => void;
        remove: () => void;
    };
    getData(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
        set: (this: void, value: any[]) => void;
        sort: (key: any, direction: any) => void;
    };
    getFiltered(): import("svelte/store").Readable<unknown>;
    getRows(): import("svelte/store").Readable<any>;
    getColumns(): {
        subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: (value?: any[]) => void) => import("svelte/store").Unsubscriber;
        set: (this: void, value: any[]) => void;
        update: (this: void, updater: import("svelte/store").Updater<any[]>) => void;
        get: (self: any) => undefined;
        sort: (element: any, key: any, context: any) => void;
        filter: (key: any, value: any, operation: any) => void;
        draw: () => void;
        redraw: () => void;
    };
}

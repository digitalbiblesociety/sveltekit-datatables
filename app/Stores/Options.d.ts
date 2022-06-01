export default class options {
    create(): {
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
}

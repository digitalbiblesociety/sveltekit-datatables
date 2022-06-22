export namespace context {
    export { subscribe };
    export { set };
    export { update };
    export function index(): undefined;
    export function add(stores: any): any;
    export function get(id: any): any;
}
export const rows: import("svelte/store").Writable<any[]>;
declare const subscribe: (this: void, run: import("svelte/store").Subscriber<{}>, invalidate?: (value?: {}) => void) => import("svelte/store").Unsubscriber;
declare const set: (this: void, value: {}) => void;
declare const update: (this: void, updater: import("svelte/store").Updater<{}>) => void;
export {};

/** @typedef {typeof __propDef.props}  PaginationProps */
/** @typedef {typeof __propDef.events}  PaginationEvents */
/** @typedef {typeof __propDef.slots}  PaginationSlots */
export default class Pagination extends SvelteComponentTyped<{
    id: any;
    options: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PaginationProps = typeof __propDef.props;
export type PaginationEvents = typeof __propDef.events;
export type PaginationSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: any;
        options: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

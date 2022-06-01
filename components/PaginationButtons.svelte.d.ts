/** @typedef {typeof __propDef.props}  PaginationButtonsProps */
/** @typedef {typeof __propDef.events}  PaginationButtonsEvents */
/** @typedef {typeof __propDef.slots}  PaginationButtonsSlots */
export default class PaginationButtons extends SvelteComponentTyped<{
    id?: string;
    ref?: string;
    classList?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PaginationButtonsProps = typeof __propDef.props;
export type PaginationButtonsEvents = typeof __propDef.events;
export type PaginationButtonsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string;
        ref?: string;
        classList?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

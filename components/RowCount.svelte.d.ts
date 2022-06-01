/** @typedef {typeof __propDef.props}  RowCountProps */
/** @typedef {typeof __propDef.events}  RowCountEvents */
/** @typedef {typeof __propDef.slots}  RowCountSlots */
export default class RowCount extends SvelteComponentTyped<{
    id?: string;
    ref?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RowCountProps = typeof __propDef.props;
export type RowCountEvents = typeof __propDef.events;
export type RowCountSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string;
        ref?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

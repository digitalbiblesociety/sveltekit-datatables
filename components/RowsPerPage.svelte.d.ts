/** @typedef {typeof __propDef.props}  RowsPerPageProps */
/** @typedef {typeof __propDef.events}  RowsPerPageEvents */
/** @typedef {typeof __propDef.slots}  RowsPerPageSlots */
export default class RowsPerPage extends SvelteComponentTyped<{
    id?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RowsPerPageProps = typeof __propDef.props;
export type RowsPerPageEvents = typeof __propDef.events;
export type RowsPerPageSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

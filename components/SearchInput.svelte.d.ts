/** @typedef {typeof __propDef.props}  SearchInputProps */
/** @typedef {typeof __propDef.events}  SearchInputEvents */
/** @typedef {typeof __propDef.slots}  SearchInputSlots */
export default class SearchInput extends SvelteComponentTyped<{
    id?: string;
    ref?: string;
    classList?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SearchInputProps = typeof __propDef.props;
export type SearchInputEvents = typeof __propDef.events;
export type SearchInputSlots = typeof __propDef.slots;
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

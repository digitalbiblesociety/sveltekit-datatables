/** @typedef {typeof __propDef.props}  DatatableProps */
/** @typedef {typeof __propDef.events}  DatatableEvents */
/** @typedef {typeof __propDef.slots}  DatatableSlots */
export default class Datatable {
    constructor();
    get dataRows(): any;
}
export type DatatableProps = typeof __propDef.props;
export type DatatableEvents = typeof __propDef.events;
export type DatatableSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

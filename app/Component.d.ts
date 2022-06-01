export default class Component {
    constructor(id?: string);
    context: any;
    id: string;
    init(): void;
    reset(): void;
    setRows(data: any): void;
    getSize(): {
        parentWidth: any;
        parentHeight: any;
        width: number;
        height: number;
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
    resize(): void;
    setTableContainerHeight(height: any): void;
    addEventScrollX(): void;
    setColumns(): void;
    getKey(key: any): any;
    getOptions(): any;
}

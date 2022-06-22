import { writable } from 'svelte/store';

export default class Filters {
	create() {
		return {
			globalFilter: this.createGlobalFilter(),
			localFilters: this.createLocalFilters()
		};
	}

	createLocalFilters() {
		const { subscribe, update } = writable([]);
		return {
			subscribe,
			update,
			add: (key, value, operation) =>
				update((store) => {
					const filter = { key: key, value: value, operation: operation };
					store = store.filter((item) => item.key !== key && item.value.length > 0);
					store.push(filter);
					return store;
				}),
			// eslint-disable-next-line no-unused-vars
			remove: () => update((store) => (store = []))
		};
	}

	createGlobalFilter() {
		const { subscribe, update } = writable(null);
		return {
			subscribe,
			set: (value) =>
				update((store) => {
					store = value.length > 0 ? value : null;
					return store;
				}),
			// eslint-disable-next-line no-unused-vars
			remove: () => update((store) => (store = null))
		};
	}
}

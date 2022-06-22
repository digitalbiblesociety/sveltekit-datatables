import { writable } from 'svelte/store';
import { context } from '../Context.js';

export default class Columns {
	create(data, states, filters, options) {
		const id = states.id;
		this.id = id.get();
		const pageNumber = states.pageNumber;
		const localFilters = filters.localFilters;
		const { subscribe, set, update } = writable([]);
		return {
			subscribe,
			set,
			update,
			get: (self) => {
				let $columns;
				self.subscribe((store) => ($columns = store));
				return $columns;
			},
			sort: (element, key, context) => {
				if (options.get(options).sortable !== true || typeof key === 'undefined') {
					return;
				}

				// Grok Direction
				let sortDir = element.classList.contains('asc') ? 'desc' : 'asc';
				Array.from(element.parentNode.children).forEach((item) =>
					item.classList.remove('asc', 'desc')
				);
				element.classList.add(sortDir);

				// Sort
				data.sort(key, sortDir);
				pageNumber.set(1, context);
				this.get(this.id).redraw();
			},
			filter: (key, value, operation) => {
				pageNumber.set(1);
				localFilters.add(key, value, operation);
				this.get(this.id).redraw();
			},
			draw: () => {
				setTimeout(() => {
					const tbody = document.querySelector(`#${id.get()} table tbody tr`);
					if (tbody === null) return;
					const thead = document.querySelectorAll(`#${id.get()} .dt-header thead tr`);
					const $columns = this.getData(this.id);

					thead.forEach((tr) => {
						let i = 0;
						Array.from(tbody.children).forEach((td) => {
							let th = tr.children[i];

							let thW = th.getBoundingClientRect().width;
							let tdW = td.getBoundingClientRect().width;
							if (tdW > thW) {
								th.style.minWidth = tdW + 'px';
								th.style.maxWidth = tdW + 'px';
								$columns[i].minWidth = tdW;
							} else {
								td.style.minWidth = thW + 'px';
								td.style.maxWidth = thW + 'px';
								$columns[i].minWidth = thW;
							}
							i++;
						});
					});
				}, 50);
			},
			redraw: () => {
				if (options.get(options).scrollY === false) return;

				setTimeout(() => {
					const tbody = document.querySelector(`#${id.get()} table tbody tr`);
					if (tbody === null) return;
					const thead = document.querySelectorAll(`#${id.get()} .dt-header thead tr`);
					const $columns = this.getData(this.id);
					thead.forEach((tr) => {
						let i = 0;
						Array.from(tbody.children).forEach((td) => {
							let th = tr.children[i];
							let thW = th.getBoundingClientRect().width;
							let tdW = td.getBoundingClientRect().width;
							if (tdW > thW) {
								th.style.minWidth = tdW + 'px';
								th.style.maxWidth = tdW + 'px';
								$columns[i].minWidth = tdW;
							} else {
								td.style.minWidth = thW + 'px';
								td.style.maxWidth = thW + 'px';
								$columns[i].minWidth = thW;
							}
							i++;
						});
					});
				}, 50);
			}
		};
	}

	get(id) {
		return context.get(id).getColumns();
	}

	getData(id) {
		const columns = context.get(id).getColumns();
		return context.get(id).getColumns().get(columns);
	}
}

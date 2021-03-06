<script>
	import SearchInput from './components/SearchInput.svelte';
	import ColumnFilterInputs from './components/ColumnFilterInputs.svelte';
	import PaginationButtons from './components/PaginationButtons.svelte';
	import RowCount from './components/RowCount.svelte';
	import RowsPerPage from './components/RowsPerPage.svelte';

	import { onMount, onDestroy } from 'svelte';
	import Datatable from './app/DataTable.js';
	import Component from './app/Component.js';
	import { context } from './app/Context.js';

	export let data = [];
	export let classList = '';
	export let id = 'svelte-simple-datatable';

	export let filters = {};

	export let settings = {
		sortable: true,
		pagination: true,
		rowPerPage: 5,
		columnFilter: true,
		scrollY: false,
		labels: {
			info: '{start} - {end} / {rows}', // $t("table_info", {rows: rows}), //
			previous:
				'<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>',
			next: '<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>'
		},
		filters: filters
	};

	//Initialize context for all stores.
	const datatable = new Datatable(id);
	datatable.create();
	const options = datatable.getOptions();
	const component = new Component(id);
	const rows = datatable.getRows();

	export const dataRows = rows;

	$: {
		component.setRows(data);
		options.set(options.parse(settings));
	}

	onMount(() => component.init());
	onDestroy(() => component.reset());
</script>

<section {id} class="datatable {classList}" class:scroll-y={$options.scrollY}>
	<div class="relative flex items-stretch grow focus-within:z-10 mt-6">
		<div class="mt-1 relative rounded-md shadow-sm border mx-auto w-2/3 max-w-lg">
			<div class="absolute inset-y-0 left-0 flex items-center">
				<RowsPerPage />
			</div>
			<SearchInput
				classList="h-12 block w-full pl-16 text-sm border-gray-300 rounded-md border-gray-300 text-gray-700 dark:bg-gray-300
									md:bg-[url('/img/icons/filter.png')] md:bg-[length:15px_15px] bg-no-repeat md:bg-[top_10px_right_8px]"
			/>
		</div>
	</div>

	<div class="dt-table flex flex-col lg:flex-row">
		<div class="lg:w-1/6">
			<ColumnFilterInputs />
		</div>

		<table class="relative w-full lg:w-5/6 mt-3 ml-2 lg:ml-6">
			<slot />
		</table>
	</div>

	<div
		class="text-gray-700 dark:text-gray-100 mt-6 px-4 sm:px-6 pt-4 md:pt-8 flex flex-col
				items-center justify-between border-t border-gray-200 dark:border-gray-500 "
	>
		<nav class="relative z-0 inline-flex mx-auto rounded-md -space-x-px" aria-label="Pagination">
			<PaginationButtons {context} />
		</nav>
		<section class="mx-auto mt-2 text-primary-600 dark:text-primary-300" class:css={$options.css}>
			<RowCount {id} />
		</section>
	</div>
</section>

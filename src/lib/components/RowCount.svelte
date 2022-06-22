<script>
	import { context as store } from '../app/Context.js';
	export let id = 'svelte-simple-datatable';
	const context = store.get(id);

	export let ref = '';

	const rowsCount = context.getRowsCount();
	const options = context.getOptions();
	const pageNumber = context.getPageNumber();
	const datatableWidth = context.getDatatableWidth();

	$: start = $pageNumber * $options.rowsPerPage - $options.rowsPerPage + 1;
	$: end = Math.min($pageNumber * $options.rowsPerPage, $rowsCount);
	$: rows = $rowsCount;
	$: info = $options.labels.info
		.replace('{start}', `<b>${start}</b>`)
		.replace('{end}', `<b>${end}</b>`)
		.replace('{rows}', `<b>${rows}</b>`);
</script>

<aside class="text-gray-500 text-sm" {ref}>
	{#if $datatableWidth > 600}
		{#if rows > 0}
			{@html info}
		{:else}
			{@html $options.labels.noRows}
		{/if}
	{:else}
		{@html `<b>${start}</b>-<b>${end}</b>/<b>${rows}</b>`}
	{/if}
</aside>

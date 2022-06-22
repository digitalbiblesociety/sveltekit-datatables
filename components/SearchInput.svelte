<script>
	import { context as store } from '../app/Context.js';
	export let id = 'svelte-simple-datatable';
	export let ref = '';
	export let classList = '';

	const context = store.get(id);
	const options = context.getOptions();

	const search = (value) => {
		context.getPageNumber().set(1);
		context.getGlobalFilter().set(value);
		context.getColumns().redraw();
	};
</script>

<input
	class={classList}
	type="text"
	placeholder={$options?.labels?.search ?? 'Search'}
	on:input={(e) => search(e.target.value)}
	{ref}
/>

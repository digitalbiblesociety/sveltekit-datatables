<script>
    import { context as store } from '../app/context.js'
    export let id = 'svelte-simple-datatable'
	export let ref = ''
	export let classList = ''

	const context = store.get(id)
	
	const rowsCount = context.getRowsCount()
	const options = context.getOptions()
	const pageNumber = context.getPageNumber()
	const datatableWidth = context.getDatatableWidth()

	$: pageCount = Array.from(
		Array(Math.ceil($rowsCount / $options.rowsPerPage)).keys()
	)
	const slice = (arr, page) => {
		if (page < 5) {
			return arr.slice(0, 5)
		} else if (page > arr.length - 4) {
			return arr.slice(arr.length - 5, arr.length)
		}
		return arr.slice(page - 2, page + 1)
	}
	$: buttons = slice(pageCount, $pageNumber)
	const setPage = (number) => {
		pageNumber.set(number)
		context.getColumns().redraw()
	}
</script>

{#if pageCount}
{#if $datatableWidth > 600}
	<section class="flex {classList}" {ref}>
		<button
			class:disabled={$pageNumber === 1}
			on:click={() => setPage($pageNumber - 1)}
		>
			{@html $options.labels.previous}
		</button>
		<button class:active={$pageNumber === 1} on:click={() => setPage(1)}>
			1
		</button>
		{#if pageCount?.length > 6 && $pageNumber >= 5}
			<button class="ellipse">...</button>
		{/if}

		{#each buttons as n}
			{#if n > 0 && n < pageCount?.length - 1}
				<button
					class:active={$pageNumber === n + 1}
					on:click={() => setPage(n + 1)}
				>
					{n + 1}
				</button>
			{/if}
		{/each}

		{#if pageCount?.length > 6 && $pageNumber <= pageCount.length - 3}
			<button class="ellipse">...</button>
		{/if}

		{#if pageCount?.length > 1}
			<button
				class:active={$pageNumber === pageCount.length}
				on:click={() => setPage(pageCount.length)}
			>
				{pageCount.length}
			</button>
		{/if}

		<button
			class="text"
			class:disabled={$pageNumber === pageCount.length}
			on:click={() => setPage($pageNumber + 1)}
		>
			{@html $options.labels.next}
		</button>
	</section>
{:else}
	<section
		class="flex mobile {classList}"
		class:css={$options.css}
	>
		<button class="rounded-l-md" class:disabled={$pageNumber === 1} on:click={() => setPage(1)}
			>&#10092;&#10092;</button
		>
		<button
			class:disabled={$pageNumber === 1}
			on:click={() => setPage($pageNumber - 1)}>&#10094;</button
		>
		<button
			class:disabled={$pageNumber === pageCount.length}
			on:click={() => setPage($pageNumber + 1)}>&#10095;</button
		>
		<button
			class="rounded-r-md"
			class:disabled={$pageNumber === pageCount.length}
			on:click={() => setPage(pageCount.length)}>&#10093;&#10093;</button>
	</section>
{/if}
{/if}

<style>
section button:first-child {

    border-top-left-radius: 0.375rem;

    border-bottom-left-radius: 0.375rem
}

section button:last-child {

    border-top-right-radius: 0.375rem;

    border-bottom-right-radius: 0.375rem
}

button {

    position: relative;

    display: inline-flex;

    align-items: center;

    border-width: 1px;

    --tw-border-opacity: 1;

    border-color: rgb(209 213 219 / var(--tw-border-opacity));

    --tw-bg-opacity: 1;

    background-color: rgb(255 255 255 / var(--tw-bg-opacity));

    padding-left: 1rem;

    padding-right: 1rem;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    --tw-text-opacity: 1;

    color: rgb(107 114 128 / var(--tw-text-opacity))
}

button.active {

    z-index: 10;

    font-weight: 700;

    --tw-text-opacity: 1;

    color: rgb(17 24 39 / var(--tw-text-opacity))
}</style>
<script>
	import PaginationRowCount from './RowCount.svelte'
	import PaginationButtons from './PaginationButtons.svelte'
	export let id
	export let options
</script>

{#if $options.pagination}
	<section class="flex flex-row justify-between h-10 pt-2 items-center">
			<PaginationRowCount {id} />
			<PaginationButtons {id}/>
	</section>
{/if}
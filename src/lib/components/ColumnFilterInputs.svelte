<script>
	import { context as store } from '../app/Context.js';
	export let id = 'svelte-simple-datatable';
	const context = store.get(id);
	const columns = context.getColumns();
	const options = context.getOptions();

	let pageWidth;
	let opened = [];
	let active_filters = [];
	if ($options.customFilters) {
		$options.customFilters.forEach((filter) => {
			checkDefaults(filter, true);
		});
	}

	// Set default values for the filter inputs to checked by default
	function checkDefaults(filter, isChecked) {
		let checked_filters = 0;
		let active_filters_without_defaults = Object.entries(active_filters).filter(
			([key]) => !key.includes('_0')
		);
		for (let i = 0; i < active_filters_without_defaults.length; i++) {
			if (active_filters_without_defaults[i][1]) {
				checked_filters++;
			}
		}

		for (let i = 0; i < filter.options.length; i++) {
			const option = filter.options[i];
			if (option.default) {
				active_filters[filter.key + '_' + i] = checked_filters === 0 && isChecked;
			}
		}
	}
</script>

<svelte:window bind:outerWidth={pageWidth} />
{#if $options.customFilters}
	<section aria-labelledby="filter-heading">
		<h2 id="filter-heading" class="sr-only">Filters</h2>
		<div class="block relative z-10 pb-4 ">
			<div class="mx-auto px-2 flex justify-center pt-2 ">
				<div class="items-center flex lg:flex-col">
					{#each $options.customFilters as filter}
						{#each $columns as column}
							{#if column.name === filter.key}
								<div
									class="relative inline-block text-center mx-2 lg:border lg:border-primary-200 w-4/5 rounded-md mb-6"
								>
									<div
										on:click={() => {
											opened[filter.key] = !opened[filter.key];
										}}
										class="inline-flex justify-center text-sm font-medium text-primary-600 dark:text-gray-100 uppercase hover:text-gray-900"
									>
										<span>{filter.label}</span>
										<svg
											class="flex-shrink-0 mr-4 ml-1 h-5 w-5 text-gray-400 lg:hidden"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<div
										class:hidden={!opened[filter.key] && pageWidth < 1025}
										class="origin-top-right absolute lg:relative right-0  bg-white lg:bg-transparent rounded-md px-4 py-2"
									>
										<form class="space-y-2">
											<fieldset
												on:change|preventDefault={(e) => {
													columns.filter(
														column.key,
														e.target.checked ? e.target.value : '',
														filter.operation
													);
													checkDefaults(filter, !e.target.checked);
												}}
												class="mt-1 block w-full pl-3  py-2 pr-4 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md
                                                    dark:text-gray-200 "
											>
												{#each filter.options as option, index}
													<div class="flex items-center">
														<input
															id={column.name + index}
															name={column.key + '[]'}
															value={option.value}
															bind:checked={active_filters[column.name + '_' + index]}
															type="checkbox"
															class="h-4 w-4 border-gray-300 rounded"
														/>
														<label
															for={column.name + index}
															class="ml-3 pr-4 text-sm font-medium text-gray-700 dark:text-gray-200  whitespace-nowrap"
														>
															{option.label}
														</label>
													</div>
												{/each}
											</fieldset>
										</form>
									</div>
								</div>
							{/if}
						{/each}
					{/each}
				</div>
			</div>
		</div>
	</section>
{/if}

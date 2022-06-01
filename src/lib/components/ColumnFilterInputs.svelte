<script>
    import { context as store } from '../app/context.js'
    export let id = 'svelte-simple-datatable'
    const context = store.get(id)
    const columns = context.getColumns()
    const options = context.getOptions()

    let pageWidth
    let opened = []
    let active_filters = []
    if($options.customFilters) {
      $options.customFilters.forEach(filter => {
        checkDefaults(filter, true)
      })
    }


    // Set default values for the filter inputs to checked by default
    function checkDefaults(filter, isChecked) {

      let checked_filters = 0
      let active_filters_without_defaults = Object.entries(active_filters).filter(([key]) => !key.includes('_0'))
        for (let i = 0; i < active_filters_without_defaults.length; i++) {
          if(active_filters_without_defaults[i][1]) {
            checked_filters++;
          }
      }

      for (let i = 0; i < filter.options.length; i++) {
        const option = filter.options[i];
        if(option.default) {
            active_filters[filter.key + '_' + i] = (checked_filters === 0 && isChecked)
        }
      }
    }
</script>

<style>
  .filter-menu-wrap {
    @apply px-4 relative inline-block text-left xl:w-full
  }

  .filter-menu-form-wrap {
    @apply origin-top-right absolute xl:relative right-0 mt-2 bg-white rounded-md xl:shadow-none shadow p-4
  }

  .filter-menu-button {
    @apply inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900
  }
  .filter-menu-icon {
    @apply flex-shrink-0 mr-4 ml-1 h-5 w-5 text-gray-400 xl:hidden
  }

  .filter-menu-items {
    @apply origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none
  }

  .filter-menu-fieldset {
    @apply mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md dark:bg-gray-900
  }

  .filter-menu-label {
    @apply ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap
  }

  .filter-menu-input {
    @apply h-4 w-4 border-gray-300 rounded
  }
</style>

<svelte:window bind:outerWidth={pageWidth}/>
{#if $options.customFilters}
<section aria-labelledby="filter-heading">
  <h2 id="filter-heading" class="sr-only">Filters</h2>
  <div class="block relative z-10 border-b border-gray-200 pb-4">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-center pt-4 sm:px-6 lg:px-8">
       <div class="-mx-4 items-center flex xl:flex-col">

         {#each $options.customFilters as filter}
         {#each $columns as column}
             {#if column.name === filter.key}
             <div class="filter-menu-wrap">
                 <div 
                 on:click={() => {
                   opened[filter.key] = !opened[filter.key]
                 }}
                 class="filter-menu-button">
                   <span>{filter.label}</span>
                   <svg class="filter-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                   </svg>
                 </div>
                 <div 
                 class:hidden={!opened[filter.key] && (pageWidth < 1280)}
                 class="filter-menu-form-wrap">
                   <form class="space-y-4">
                     <fieldset 
                        on:change|preventDefault={(e) => {
                          columns.filter(column.key, e.target.checked ? e.target.value : '', filter.operation);
                          checkDefaults(filter, !e.target.checked)
                        }} 
                        class="filter-menu-fieldset">
                         {#each filter.options as option, index}
                         <div class="flex items-center">
                             <input 
                                id={column.name + index }
                                name={column.key + '[]'}
                                value={option.value}
                                bind:checked={active_filters[column.name + '_' + index]}
                                type="checkbox" 
                                class="filter-menu-input">
                             <label for={column.name + index } class="filter-menu-label"> {option.label} </label>
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
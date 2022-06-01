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

    position: relative;

    display: inline-block;

    padding-left: 1rem;

    padding-right: 1rem;

    text-align: left
}

@media (min-width: 1280px) {

    .filter-menu-wrap {

        width: 100%
    }
}

  .filter-menu-form-wrap {

    position: absolute;

    right: 0px;

    margin-top: 0.5rem;

    transform-origin: top right;

    border-radius: 0.375rem;

    --tw-bg-opacity: 1;

    background-color: rgb(255 255 255 / var(--tw-bg-opacity));

    padding: 1rem;

    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

  @media (min-width: 1280px) {

    .filter-menu-form-wrap {

        position: relative;

        --tw-shadow: 0 0 #0000;

        --tw-shadow-colored: 0 0 #0000;

        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }
}

  .filter-menu-button {

    display: inline-flex;

    justify-content: center;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500;

    --tw-text-opacity: 1;

    color: rgb(55 65 81 / var(--tw-text-opacity))
}

  .filter-menu-button:hover {

    --tw-text-opacity: 1;

    color: rgb(17 24 39 / var(--tw-text-opacity))
}
  .filter-menu-icon {

    margin-right: 1rem;

    margin-left: 0.25rem;

    height: 1.25rem;

    width: 1.25rem;

    flex-shrink: 0;

    --tw-text-opacity: 1;

    color: rgb(156 163 175 / var(--tw-text-opacity))
}
  @media (min-width: 1280px) {

    .filter-menu-icon {

        display: none
    }
}

  .filter-menu-items {

    position: absolute;

    right: 0px;

    margin-top: 0.5rem;

    transform-origin: top right;

    border-radius: 0.375rem;

    --tw-bg-opacity: 1;

    background-color: rgb(255 255 255 / var(--tw-bg-opacity));

    padding: 1rem;

    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));

    --tw-ring-opacity: 0.05
}

  .filter-menu-items:focus {

    outline: 2px solid transparent;

    outline-offset: 2px
}

  .filter-menu-fieldset {

    margin-top: 0.25rem;

    display: block;

    width: 100%;

    border-radius: 0.375rem;

    --tw-border-opacity: 1;

    border-color: rgb(209 213 219 / var(--tw-border-opacity));

    padding-top: 0.5rem;

    padding-bottom: 0.5rem;

    padding-left: 0.75rem;

    padding-right: 2.5rem;

    font-size: 1rem;

    line-height: 1.5rem
}

  .filter-menu-fieldset:focus {

    outline: 2px solid transparent;

    outline-offset: 2px
}

  @media (prefers-color-scheme: dark) {

    .filter-menu-fieldset {

        --tw-bg-opacity: 1;

        background-color: rgb(17 24 39 / var(--tw-bg-opacity))
    }
}

  @media (min-width: 640px) {

    .filter-menu-fieldset {

        font-size: 0.875rem;

        line-height: 1.25rem
    }
}

  .filter-menu-label {

    margin-left: 0.75rem;

    white-space: nowrap;

    padding-right: 1.5rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500;

    --tw-text-opacity: 1;

    color: rgb(17 24 39 / var(--tw-text-opacity))
}

  .filter-menu-input {

    height: 1rem;

    width: 1rem;

    border-radius: 0.25rem;

    --tw-border-opacity: 1;

    border-color: rgb(209 213 219 / var(--tw-border-opacity))
}</style>

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
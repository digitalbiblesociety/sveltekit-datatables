import { writable, derived } from 'svelte/store'
import Fuse from 'fuse.js'

export default class Data 
{
    create(states, filters, options)
    {
        const data = this.createData()
        const filtered = this.createFiltered(data, states.rowsCount, filters.globalFilter, filters.localFilters)
        const rows = this.createRows(filtered, options, states.pageNumber)
        return {
            data: data,
            filtered: filtered,
            rows: rows
        }
    }

    createData()
    {
        const { subscribe, set, update } = writable([])
        return {
            subscribe, set,
			sort: (key, direction) => update(store => {
				try {
					store.sort((a, b) => {
						if (typeof(key(b)) === "boolean") {
							return key(a) ? ((direction == 'asc') ? 1 : -1) : ((direction == 'desc') ? 1 : -1)
						} else {
							return (direction == 'asc') ? key(b).localeCompare(key(a)) : key(a).localeCompare(key(b))
						}
					})
					return store
				} catch (e) {
					return store.sort( (a, b) => parseFloat(key(b)) - parseFloat(key(a)))
				}
			}),
        }
    }

    createFiltered(data, rowsCount, globalFilter, localFilters) 
    {
        return derived(
            [data, globalFilter, localFilters],
            ([$data, $globalFilter, $localFilters]) => {
                if ($globalFilter) {
                    $data = $data.filter( item => {
                        return Object.keys(item).some( k => {
                            return item[k].toString().toLowerCase().indexOf($globalFilter.toString().toLowerCase()) > -1
                        })
                    })
                }
                if ($localFilters.length > 0) {
                    $localFilters.forEach(filter => {

						if(filter.operation == 'range') {
							// Filter data for values between min and max
							return $data = $data.filter( item => (filter.key(item) > filter.value[0] && filter.key(item) < filter.value[1]))
						}

						if(filter.operation == 'regex') {
							return $data = $data.filter( item => (filter.key(item)?.match(filter.value)))
						}

                        return $data = $data.filter( item => filter.key(item).toString().toLowerCase().indexOf(filter.value.toString().toLowerCase()) > -1)
                    })
                }
                rowsCount.set($data?.length ?? 0)
                return $data
            } 	
        )
    }

    createRows(filtered, options, pageNumber)
    {
        return derived(
            [filtered, options, pageNumber],
            ([$filtered, $options, $pageNumber]) => {
                if (!$options.pagination) {
                    return $filtered
                }
                return $filtered.slice( ($pageNumber - 1) * $options.rowsPerPage, $pageNumber * $options.rowsPerPage) 
            }
        ) 
    }
}
<script>
	import { onMount } from 'svelte';
	import '../style.css';
	import Datatable from '$lib/Datatable.svelte';

	let bibles = [];
	onMount(async () => {
		bibles = await fetch(`/bibles.json`).then((response) => response.json());
	});

	let rows;

	const settings = {
		labels: {
			search: 'Search...',
			filter: 'Filter',
			noRows: 'No entries to found',
			info: 'Showing {start} to {end} of {rows} entries',
			previous: 'Previous',
			next: 'Next'
		},
		customFilters: [
			{
				label: 'Regions',
				key: 'country_id',
				class: '',
				type: 'select',
				operation: 'regex',
				options: [
					{ label: 'All', value: '', default: true },
					{
						label: 'Africa',
						value:
							'AO|BF|BI|BJ|BW|CD|CF|CG|CI|CM|CV|DJ|DZ|EG|EH|ER|ET|GA|GH|GM|GN|GQ|GW|KE|KM|LR|LS|LY|MA|MG|ML|MR|MU|MW|MZ|NA|NE|NG|RE|RW|SC|SD|SH|SL|SN|SO|SS|ST|SZ|TD|TG|TN|TZ|UG|YT|ZA|ZM|ZW'
					},
					{
						label: 'Asia',
						value:
							'AF|AM|AZ|BD|BH|BN|BT|CC|CN|CX|GE|HK|ID|IL|IN|IO|IQ|IR|JO|JP|KG|KH|KP|KR|KW|KZ|LA|LB|LK|MM|MN|MO|MV|MY|NP|OM|PH|PK|PS|QA|SA|SG|SY|TH|TJ|TM|TR|TW|UZ|VN|YE'
					},
					{
						label: 'Europe',
						value:
							'AD|AL|AT|AX|BA|BE|BG|BY|CH|CY|CZ|DE|DK|EE|ES|FI|FO|FR|GB|GG|GI|GR|HR|HU|IE|IM|IS|IT|JE|LI|LT|LU|LV|MC|MD|ME|MK|MT|NL|NO|PL|PT|RO|RS|RU|SE|SI|SJ|SK|SM|UA|VA|XK'
					},
					{
						label: "North 'merica",
						value:
							'AG|AI|AW|BB|BL|BM|BQ|BS|BZ|CA|CR|CU|CW|DM|DO|GD|GL|GP|GT|HN|HT|JM|KN|KY|LC|MF|MQ|MS|MX|NI|PA|PM|PR|SV|SX|TC|TT|US|VC|VG|VI'
					},
					{
						label: "South 'merica",
						value: 'AR|BO|BR|CL|CO|EC|FK|GF|GY|PE|PY|SR|UY|VE'
					},
					{
						label: 'Oceania',
						value:
							'AS|AU|CK|FJ|FM|GU|KI|MH|MP|NC|NF|NR|NU|NZ|PF|PG|PN|PW|SB|TK|TL|TO|TV|UM|VU|WF|WS'
					}
				]
			},
			{
				label: 'Types',
				key: 'file_set',
				class: '',
				type: 'select',
				operation: 'regex',
				options: [
					{ label: 'All', value: '', default: true },
					{ label: 'Web', value: 'web' },
					{ label: 'PDF', value: 'pdf' },
					{ label: 'ePub', value: 'epub' },
					{ label: 'app', value: 'app' },
					{ label: 'Audio', value: 'audio_web' },
					{ label: 'Archive', value: 'archive' }
				]
			},
			{
				key: 'print',
				type: 'switch',
				options: [
					{ label: 'Printable', value: 1 },
					{ label: 'All', value: 0 }
				]
			}
		]
	};
</script>

<Datatable classList="relative" data={bibles} bind:dataRows={rows} {settings}>
	<thead>
		<th data-name="id" data-key="id" class="hidden">id</th>
		<th data-name="file_set" data-key="fs" class="hidden">file_set</th>
		<th data-name="language" data-key="(row) => row.ln + ' ' + row.iso" class="sortable">
			Language
		</th>
		<th data-name="title" data-key="(row) => row.tt + ' ' + row.tv" class="sortable"> title </th>
		<th data-name="country" data-key="(row) => row.cn" class="sortable hidden md:table-cell">
			Country
		</th>
		<th data-name="country_id" data-key="ci" class="hidden">country id</th>
		<th data-name="date" data-key="dt" class="sortable hidden md:table-cell"> date </th>
	</thead>
	<tbody>
		{#if $rows}
			{#each $rows as row}
				<tr>
					<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900">
						{row.id}
					</td>
					<td class="whitespace-nowrap px-6 py-4 text-gray-900">
						<div class="text-sm text-gray-900 dark:text-gray-300">
							{row.ln}
						</div>
						<div class="text-xs italic text-gray-500">
							{row.iso}
						</div>
					</td>
					<td class="px-6 py-4">
						<div
							class="max-w-sm overflow-hidden text-ellipsis text-sm text-gray-900 dark:text-gray-300"
						>
							{row.tt}
						</div>
						<div class="max-w-sm overflow-hidden text-ellipsis text-sm text-gray-500">
							{row.tv ?? ''}
						</div>
					</td>
					<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900 md:table-cell">
						<svg class="inline-block h-5 w-5">
							<use href="/img/flags.svg#{row.ci}" xlink:href="#{row.ci}" />
						</svg>
						<span class="text-sm text-gray-900 dark:text-gray-300">
							{row.cn}
						</span>
					</td>
					<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900">
						{row.ci}
					</td>
					<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900 md:table-cell">
						{row.dt}
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</Datatable>

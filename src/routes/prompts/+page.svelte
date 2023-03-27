<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto max-w-screen-xl flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
	<table class="table-auto rounded overflow-hidden border-collapse w-full text-sm">
		<thead>
			<tr class="bg-slate-100">
				<th class="text-left text-sm text-slate-400 font-medium p-4 border-b">Name</th>
				<th class="text-left text-sm text-slate-400 font-medium p-4 border-b">
					<div class="flex justify-between items-center">
						Prompt
						<a href="/prompts/new" class="bg-blue-500 px-3 py-1 text-white rounded">+</a
						>
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each data.prompts as prompt}
				<tr class="group border-b cursor-pointer hover:bg-slate-50">
					<td class="p-4">{prompt.name}</td>
					<td class="p-4 flex justify-between items-center gap-8">
						<div>{prompt.prompt}</div>
						<form method="POST" action="?/delete">
							<input type="hidden" name="id" value={prompt.id} />
							<button
								class="px-2 py-2 bg-red-600 text-white rounded opacity-0 group-hover:opacity-100"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-4 h-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									/>
								</svg>
							</button>
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

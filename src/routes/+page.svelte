<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import Spinner from '$lib/components/Spinner.svelte';
	import Message from '$lib/components/Message.svelte';
	import MessageContainer from '$lib/components/MessageContainer.svelte';
	import { Assistants } from '$lib/shared/Assistants';

	export let form: ActionData;

	let loading = false;
</script>

<div class="mx-auto max-w-screen-xl flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
	<div>
		<form
			method="POST"
			action="?/chat"
			use:enhance={() => {
				loading = true;

				return async ({ update }) => {
					await update({ reset: false });
					loading = false;
				};
			}}
		>
			<div class="flex gap-4">
				<div class="flex flex-1 flex-col gap-3">
					<select name="assistant" id="assistant" class="border p-3 rounded text-sm">
						{#each Assistants as assistant}
							<option value={assistant.name}>{assistant.name}</option>
						{/each}
					</select>
					<textarea
						name="message"
						id="message"
						cols="10"
						rows="2"
						class="flex-1 border rounded p-4"
					/>
				</div>
				<button type="submit" class="bg-slate-200 p-10 rounded">Send</button>
			</div>
		</form>
	</div>

	{#if form?.message || loading}
		<MessageContainer>
			{#if loading}
				<Spinner />
			{/if}
			{#if form?.message && !loading}
				<Message message={form.message} />
			{/if}
		</MessageContainer>
	{/if}
</div>

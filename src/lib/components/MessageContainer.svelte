<div class="text-sm p-4 bg-slate-100 rounded text-slate-800 message-container">
	<slot />
</div>

<style lang="postcss">
	.message-container {
		& :global(pre) {
			@apply bg-slate-200 p-4 rounded-sm border-l-2 border-blue-300 my-4;
		}

		& :global(ul) {
			@apply list-disc list-inside;
		}

        & :global(ol) {
			@apply list-decimal list-inside;
		}

        & :global(li) > :global(p) {
			@apply inline;
		}

		& :global(a) {
			@apply text-blue-500;
		}
	}
</style>

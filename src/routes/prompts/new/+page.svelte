<div class="mx-auto max-w-screen-xl flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
	<form method="POST" action="?/create" class="flex flex-col">
		<label for="name">Name</label>
		<input type="text" name="name" id="name" class="p-3 text-sm border rounded" />
		<label for="name" class="mt-8">Prompt</label>
		<textarea name="prompt" id="prompt" class="p-3 text-sm border rounded" />
		<button type="submit" class="mt-8 bg-blue-500 text-white p-3 rounded">Save</button>
	</form>
</div>

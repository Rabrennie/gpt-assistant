import { PrismaClient } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	const prisma = new PrismaClient();

	const prompts = await prisma.prompt.findMany();

	return {
		prompts
	};
}) satisfies PageServerLoad;

export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (id && !isNaN(Number(id))) {
			const prisma = new PrismaClient();
			await prisma.prompt.delete({
				where: { id: Number(id) }
			});
		}

		return {};
	}
} satisfies Actions;

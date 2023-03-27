import { PrismaClient } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const prompt = data.get('prompt');

		if (!name) {
			return fail(400, { name, missing: true });
		} else if (!prompt) {
			return fail(400, { prompt, missing: true });
		}

		const prisma = new PrismaClient();
		await prisma.prompt.create({
			data: {
				name: name.toString(),
				prompt: prompt.toString()
			}
		});

		throw redirect(303, '/prompts');
	}
} satisfies Actions;

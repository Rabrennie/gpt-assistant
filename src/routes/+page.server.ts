import type { Actions, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { LLMChain } from 'langchain';
import { ChatOpenAI } from 'langchain/chat_models';
import {
	ChatPromptTemplate,
	HumanMessagePromptTemplate,
	SystemMessagePromptTemplate
} from 'langchain/prompts';
import { PrismaClient } from '@prisma/client';

export const actions = {
	chat: async ({ request }) => {
		const data = await request.formData();
		const message = data.get('message');
		const promptChoice = data.get('prompt');

		const model = new ChatOpenAI({ openAIApiKey: env.OPENAI_API_KEY, temperature: 0 });

		let promptText = 'You are a helpful assistant';
		if (promptChoice && !isNaN(Number(promptChoice))) {
			const prisma = new PrismaClient();
			const prompt = await prisma.prompt.findUnique({ where: { id: Number(promptChoice) } });
			promptText = prompt?.prompt ?? 'You are a helpful assistant';
		}

		const chatPrompt = ChatPromptTemplate.fromPromptMessages([
			SystemMessagePromptTemplate.fromTemplate(promptText),
			HumanMessagePromptTemplate.fromTemplate('{text}')
		]);

		const chain = new LLMChain({
			prompt: chatPrompt,
			llm: model
		});

		const res = await chain.call({
			text: message
		});

		return { success: true, message: res['text'] };
	}
} satisfies Actions;

export const load = (async () => {
	const prisma = new PrismaClient();

	const prompts = await prisma.prompt.findMany();

	return {
		prompts
	};
}) satisfies PageServerLoad;

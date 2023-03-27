import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import { LLMChain } from 'langchain';
import { ChatOpenAI } from 'langchain/chat_models';
import {
	ChatPromptTemplate,
	HumanMessagePromptTemplate,
	SystemMessagePromptTemplate
} from 'langchain/prompts';
import { Assistants } from '$lib/shared/Assistants';

export const actions = {
	chat: async ({ request }) => {
		const data = await request.formData();
		const message = data.get('message');
		const assistantChoice = data.get('assistant');

		const model = new ChatOpenAI({ openAIApiKey: env.OPENAI_API_KEY, temperature: 0 });

        const assistant = Assistants.find(a => a.name === assistantChoice);

		const chatPrompt = ChatPromptTemplate.fromPromptMessages([
			SystemMessagePromptTemplate.fromTemplate(
				assistant?.prompt ?? 'You are a helpful assistant'
			),
			HumanMessagePromptTemplate.fromTemplate('{text}')
		]);

		const chain = new LLMChain({
			prompt: chatPrompt,
			llm: model
		});

		const res = await chain.call({
			text: message
		});

        console.log(res);

		return { success: true, message: res['text'] };
	}
} satisfies Actions;

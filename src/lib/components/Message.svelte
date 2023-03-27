<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github.css';

	marked.setOptions({
		highlight: function (code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	});

	export let message: string;
    let messageHTML: string = '';

	$: {
		messageHTML = DOMPurify.sanitize(marked.parse(message));
	}
</script>

{@html messageHTML}

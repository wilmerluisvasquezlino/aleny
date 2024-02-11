interface MarkBookTypes {
	type: string;
	fileName?: string | null;
	text?: string;
	src?: string;
	name?: string;
	size?: number;
}

interface Rules {
	pattern: RegExp;
	onPattern(result: RegExpExecArray, restOfTheText: string): MarkBookTypes;
}
const rules: Array<Rules> = [
	{
		pattern: /\[([a-zA-Z]+)\]\s+/,
		onPattern(res: RegExpExecArray, rest: string) {
			return { type: `CITA`, name: res[1], text: rest };
		}
	},
	{
		pattern: /T([0-9]):\s+/,
		onPattern(res: RegExpExecArray, text: string) {
			return { type: `TITLE`, size: parseInt(res[1]), text };
		}
	},
	{
		pattern: /Img:\s+/,
		onPattern(res: RegExpExecArray, src: string) {
			return { type: `IMAGE`, src };
		}
	},
	{
		pattern: /P:\s+/,
		onPattern(res: RegExpExecArray, text: string) {
			return { type: `PARAGRAPH`, text };
		}
	},
	{
		pattern: /GitHub:\s+/,
		onPattern(res: RegExpExecArray, text: string) {
			return { type: `GITHUB_CARD`, text };
		}
	},
	{
		pattern: /\$\s+/,
		onPattern(res: RegExpExecArray, text: string) {
			return { type: `TERMINAL`, text };
		}
	},
	{
		pattern: /Code:\s/,
		onPattern(res: RegExpExecArray, text: string) {
			const [fileName, ...codeL] = text.split('\n');
			const code = codeL.map((t)=>t.replace(/^ {2}/g,""))
			console.log(code)
			// const codeX = code.map((line: string) => {
			// 	line = line.replace(/^\s\s/, '');
			// 	const r = /^(\s\s)+/.exec(line);
			// 	let f = '';
			// 	if (r) {
			// 		const indent = r[0].replaceAll('  ', '<span class="indent">&nbsp;&nbsp;</span>');
			// 		f = line.slice(r[0].length);
			// 		return `${indent}${f}`;
			// 	}
			// 	return line;
			// });

			return { type: `CODE`, fileName, text: code.join("\n") };
		}
	}
];

export function parserMDX(markBook: string):MarkBookTypes[] {
	const groupIndent: string[] = markBook
		.trim()
		.split(/\n(?=[^\s\t])/)
		.filter((m) => m !== '')
		.map((m) => m.trimEnd());

	const fg = groupIndent.map((text: string): MarkBookTypes | null => {
		for (const { pattern, onPattern } of rules) {
			const reg = new RegExp(pattern, 'dy');
			const result = reg.exec(text);
			if (result) {
				return onPattern(result, text.slice(result[0].length));
			}
		}
		return null;
	});
	return fg.filter((m): m is MarkBookTypes => m !== null);
}

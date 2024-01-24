export async function GET({ url }) {
	const theme = url.searchParams.get('theme') ?? 'Dracula';
	console.log(theme);

	type ThemeConfig = {
		scope: string[];
		settings: {
			color?: string;
			background?:string
		};
	};
	const themes: Map<string, ThemeConfig[]> = new Map();
	themes.set('Dracula', [
		{
			scope: ['editor.background'],
			settings: {
				background: '#282A36'
			}
		},
		{
			scope: ['string'],
			settings: {
				color: '#F1FA8C'
			}
		},
		{
			scope: ['string','function'],
			settings: {
				color: '#F1FA8C'
			}
		},
		{
			scope: ['constant'],
			settings: {
				color: '#BD93F9'
			}
		}
	]);

	const selectTheme = themes.get(theme)!;

	const yu = selectTheme.map(({scope, settings}) => {
		scope = scope.map((w)=>`[data-token^="${w}"]`)


		settings = Object.entries(settings);
		settings = settings.map(([prop, value]:[string,string]) => {
			return `${prop}: ${value}`;
		});
		settings = settings.join(';');
		return `${scope.join(",")}{${settings}}`;
	});

	return new Response(yu.join('\n'), {
		headers: {
			'Content-Type': 'text/css'
		}
	}); // respuesta al get
}

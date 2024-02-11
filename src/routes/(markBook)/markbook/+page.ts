import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/markdown/arrays.mb');
	const data = await response.text();
	return { markdown: data };
};

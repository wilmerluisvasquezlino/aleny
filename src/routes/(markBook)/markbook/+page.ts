import type { PageLoad } from './$types';

export async function load(event: PageLoad) {
    const {fetch} = event;
    const response = await fetch('/markdown/arrays.mb');
	const data = await response.text();
	console.log(data)
	return {markdown:data};
};

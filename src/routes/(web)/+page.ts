import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/getLinksWebs?idLink=');
  const data = await response.json() ;
  return {data}
};

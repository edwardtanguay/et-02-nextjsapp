// "$rank=4.1;$quick=a popular JavaScript framework for building mobile apps;$todo=worth learning",
export const getQuickDefinitionFromExtras = (extras: string) => {
	const parts = extras.split('quick=');
	const rawDescription = parts[1];
	const pieces = rawDescription.split(';');
	const description = pieces[0];
	return description;
};

export const randomize = (array: any[]) => {
	let currentIndex = array.length;
	let temporaryValue = null;
	let randomIndex = null;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};
const baseURL = 'http://localhost:4000/api';

async function getTodos() {
	const res = await fetch(`${baseURL}/todos`);
	const data = await res.json();

	return data;
}

async function init() {
	const todos = await getTodos();
	console.log('todos = ', todos);
}

window.addEventListener('load', init);

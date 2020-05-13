import types from './types';

const add = item => ({
	type: types.ADD_MOVIE,
	item
});

const remove = item => ({
	type: types.REMOVE_MOVIE,
	item
});

const update = (oldItem, newItem) => ({
	type: types.UPDATE_MOVIE,
	oldItem,
	newItem
});

const reset = () => ({
	type: types.RESET_MOVIE,
});

export default  {
	add,
	remove,
	update,
	reset
}

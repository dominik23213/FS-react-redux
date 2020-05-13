import types from './types';

const add = item => ({
	type: types.ADD_ACTOR,
	item
});

const remove = item => ({
	type: types.REMOVE_ACTOR,
	item
});

const update = (oldItem, newItem) => ({
	type: types.UPDATE_ACTOR,
	oldItem,
	newItem
});

const reset = () => ({
	type: types.RESET_ACTORS,
});


export default {
	add,
	remove,
	update,
	reset
}

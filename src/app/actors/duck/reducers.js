import types from './types';

const INITIAL_STATE = {
	listName: 'Best Actors',
	list: [
		'Tom Hanks', 'Julia Roberts', 'AngelinaRoberts'
	]
};

const actorsReducer = (state = INITIAL_STATE, action) => {
	let index = null;
	switch (action.type) {
		case types.ADD_ACTOR:
			return {
				...state,
				list: [...state.list, action.item]
			};
		case types.REMOVE_ACTOR:
			index = state.list.indexOf(action.item);
			if (index !== -1) state.list.splice(index, 1);
			return {
				...state
			};
		case types.UPDATE_ACTOR:
			const newList = [...state.list];
			index = state.list.indexOf(action.oldItem, 0);
			if (index !== -1) newList[index] = action.newItem;
			return {
				...state,
				list: [...newList]
			};
		case types.RESET_ACTORS:
			return {
				...state,
				list: []
			};
		default:
			return state
	}
};

export default actorsReducer;

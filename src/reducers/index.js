import { ADD_ITEM, REMOVE_ITEM } from "../constants/action-types";

const initialState = {
  items: []
};

function removeItem(items, payload) {
  for (var i = 0; i < items.length; i++) {
    if (items[i] === payload) {
      items.splice(i, 1);
    }
  }
  console.log(items);
  return items;
}

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return {
        items: [payload, ...state.items]
      };
    case REMOVE_ITEM:
      return { items: removeItem([...state.items], payload) };

    default:
      return state;
  }
}

export default rootReducer;

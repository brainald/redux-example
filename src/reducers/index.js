import { ADD_ITEM, REMOVE_ITEM } from "../constants/action-types";

const initialState = {
  items: [],
  deletedItems: []
};

function removeItem(items, payload) {
  for (var i = 0; i < items.length; i++) {
    if (items[i] === payload) {
      items.splice(i, 1);
    }
  }
  return items;
}

function addItemIfNotExists(items, payload) {
  for (var i = 0; i < items.length; i++) {
    if (items[i] === payload) {
      return true;
    }
  }
  return false;
}

function createNewList(items, deletedItems, payload) {
  const ret = addItemIfNotExists(items, payload)
    ? [payload, ...deletedItems]
    : [...deletedItems];
  return ret;
}

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  const temp = [...state.items];

  switch (type) {
    case ADD_ITEM:
      return {
        items: [payload, ...state.items],
        deletedItems: [...state.deletedItems]
      };
    case REMOVE_ITEM: {
      return {
        items: removeItem([...state.items], payload),
        deletedItems: createNewList(temp, [...state.deletedItems], payload)
      };
    }

    default:
      return state;
  }
}

export default rootReducer;

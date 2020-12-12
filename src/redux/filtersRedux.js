/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADDING_TAG = createActionName('ADDING_TAG');
export const REMOVING_TAG = createActionName('REMOVING_TAG');
export const CHANGING_DURATION_FROM = createActionName('CHANGING_DURATION_FROM');
export const CHANGING_DURATION_TO = createActionName('CHANGING_DURATION_TO');

// action creators
export const changeSearchPhrase = (payload) => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
// ADDING TAG
export const addingTag = (payload) => ({
  payload,
  type: ADDING_TAG,
});

// REMOVING_TAG
export const removingTag = (payload) => ({
  payload,
  type: REMOVING_TAG,
});

// CHANGING_DURATION FROM
export const changingDurationFrom = (payload, value) => ({
  payload,
  value,
  type: CHANGING_DURATION_FROM,
});

// CHANGING_DURATION TO
export const changingDurationTo = (payload, value) => ({
  payload,
  value,
  type: CHANGING_DURATION_TO,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case ADDING_TAG:
      return {
        ...statePart,
        tags: [action.payload],
      };
    case REMOVING_TAG:
      return {
        ...statePart,
        tags: [action.payload],
      };
    case CHANGING_DURATION_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.value,
        },
      };
    case CHANGING_DURATION_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.value,
        },
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}

import Api from '../services/api';

export const Types = {
  FETCH: 'magazines/FETCH',
  FETCH_SUCCESS: 'magazines/FETCH_SUCCESS',
  FETCH_FAILURE: 'magazines/FETCH_FAILURE',
  SET_SELECTED: 'magazines/SET_SELECTED'
};

const initialState = {
  loading: true,
  data: null,
  error: null,
  selected: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH:
      return Object.assign({}, state, {
        loading: true,
        data: null,
        error: null
      });
    case Types.FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        selected: {}
      });
    case Types.FETCH_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        data: null,
        error: action.payload.message
      });
    case Types.SET_SELECTED:
      return Object.assign({}, state, {
        selected: action.payload
      });
    default:
      return state;
  }
};

export default reducer;

export const fetchMagazines = data => async (dispatch) => {
  try {
    dispatch({ type: Types.FETCH });
    const response = await Api.magazines(data);
    dispatch({ type: Types.FETCH_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: Types.FETCH_FAILURE, payload: err.response.data });
  }
};

export const handleSelected = selected => dispatch => dispatch({ type: Types.SET_SELECTED, payload: selected });

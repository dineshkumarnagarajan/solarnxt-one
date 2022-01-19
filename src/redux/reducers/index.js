import { combineReducers } from "redux";
import { reducer as reduxformReducer } from "redux-form";
import changeThemeReducer from './changeThemeReducer';
import storeCapacityCountRowReducer from './storeCapacityCountRowReducer';
export default combineReducers({
  form: reduxformReducer,
  storeCapacityCountRow:storeCapacityCountRowReducer,
  themeType:changeThemeReducer
});

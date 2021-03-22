import { createStore } from 'redux';
import { combineReducers } from 'redux';

import SkillReducer from './SkillReducer';

const rootReducer = combineReducers({
  SkillReducer: SkillReducer
});

export const store = createStore(rootReducer);
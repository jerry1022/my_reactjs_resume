import {combineReducers} from 'redux';
import ProfileReducer from './reducer-profile';
import EducationReducer from './reducer-education';
import ExperienceReducer from './reducer-experience';
import CompanyReducer from './reducer-company';
import ProjectReducer from './reducer-project';

const allReducers = combineReducers({
  profile: ProfileReducer,
  education: EducationReducer,
  experience: ExperienceReducer,
  company: CompanyReducer,
  project: ProjectReducer
});

export default allReducers;

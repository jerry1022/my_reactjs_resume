import {combineReducers} from 'redux';
import ProfileReducer from './reducer-profile';
import EducationReducer from './reducer-education';
import SkillReducer from './reducer-skill';
import ExperienceReducer from './reducer-experience';
import CompanyReducer from './reducer-company';
import ProjectReducer from './reducer-project';

const allReducers = combineReducers({
  profile: ProfileReducer,
  education: EducationReducer,
  skill: SkillReducer,
  experience: ExperienceReducer,
  company: CompanyReducer,
  project: ProjectReducer
});

export default allReducers;

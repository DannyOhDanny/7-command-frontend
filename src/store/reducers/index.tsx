import { combineReducers } from '@reduxjs/toolkit';
import userReducer, { UserState } from './userSlice';
import commonLibsReducer, { TCommonLibState } from './libSlice';
import iprsReducer, { IPRSState } from './iprsSlice';
import managerIprsReducer, { IPRSSliceState } from './managerIprSlice';
import mentorIprsReducer from './mentorIprSlice';

export interface RootState {
	user: UserState; // тип состояния пользователя
	commonLibs: TCommonLibState;
	iprs: IPRSState;
	managerIprs: IPRSSliceState;
	mentorIprs: IPRSSliceState;
}

const rootReducer = combineReducers({
	user: userReducer,
	commonLibs: commonLibsReducer,
	iprs: iprsReducer,
	managerIprs: managerIprsReducer,
	mentorIprs: mentorIprsReducer,

	// добавь другие срезы состояния
});

export default rootReducer;

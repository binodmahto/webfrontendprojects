import { GetterTree } from 'vuex';
import { IRootState } from '../interfaces';
import IUser from "@/interfaces/i-user";
import  IUserState  from './static/i-state-user';
import GlobalUserGetterEnum from './static/global-user-getters-enum';

export const userGetters: GetterTree<IUserState, IRootState> = {

    [GlobalUserGetterEnum.GET_USER](state): IUser {
        return state.user;
    },
};

export default userGetters;
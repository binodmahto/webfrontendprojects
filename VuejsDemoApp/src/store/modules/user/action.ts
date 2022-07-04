import { ActionTree } from 'vuex';
import {  GlobalUserActionEnum, GlobalUserMutationEnum } from './static';
import  IUserState  from './static/i-state-user';
import { IRootState } from '../../interfaces';
import { IGlobalUserPayload } from './static/global-user-payload';

export const userActions: ActionTree<IUserState, IRootState> = {

    [GlobalUserActionEnum.SET_USER]({ commit }, payload: IGlobalUserPayload) {
        commit(GlobalUserMutationEnum.Mutate_USER, payload);
    },
};

export default userActions;
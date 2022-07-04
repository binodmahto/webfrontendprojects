import { MutationTree } from 'vuex';
import { GlobalUserMutationEnum } from './static';
import IUserState from "./static/i-state-user";
import { IGlobalUserPayload } from './static/global-user-payload';

export const userMutations: MutationTree<IUserState> = {
    [GlobalUserMutationEnum.Mutate_USER](state, payload: IGlobalUserPayload) {
        Object.assign(state.user, payload);
    },
};


export default userMutations;

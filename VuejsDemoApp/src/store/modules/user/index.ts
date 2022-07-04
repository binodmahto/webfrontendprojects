import { Module } from 'vuex';
import { IRootState } from '../interfaces';
import IUserState from "./static/i-state-user";
import { userGetters } from './getters';
import userMutations from './mutations';
import { userActions } from './action';
import { userState } from './state';

const globalUser: Module<IUserState, IRootState> = {

    namespaced: true,
    state: userState,
    getters: userGetters,
    mutations: userMutations,
    actions: userActions,
    };

export default globalUser;
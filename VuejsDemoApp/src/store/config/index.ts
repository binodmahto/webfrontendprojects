import { StoreOptions } from 'vuex';
import { IRootState } from '../interfaces';
import modules from '../modules';

const config: StoreOptions<IRootState> = {
    strict: true,
    state() { },
    mutations: {},
    actions: {},
    modules,
};


export default config;
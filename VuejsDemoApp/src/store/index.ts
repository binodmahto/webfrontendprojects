import Vue from 'vue';
import Vuex from 'vuex';
import config from './config';
import { IRootState } from './modules/interfaces';

Vue.use(Vuex);

const store = new Vuex.Store<IRootState>(config);
console.warn('store instance', store);


export default store;
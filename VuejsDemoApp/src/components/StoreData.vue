<template>
    <div>
      <br /><br />
        <h1>User Data (update on click) : {{ userData }}</h1>
        <h1>User Data (reactive update) : {{ userComputedData }}</h1>
        <button @click="onFetch()">Read User from Store</button>
       <br />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import {
  GlobalUserGetterEnum,
  NAMESPACE,
} from "../store/modules/user/static";

    export default Vue.component('StoreData', {
        
        data() {
            return {
              userData: String,
            };
        },

        methods:{
            onFetch(){
                this.$data.userData = this.getUser.firstname + ' ' + this.getUser.lastname + ', '+ this.getUser.email;
            },
        },

        computed:{
             ...mapGetters(NAMESPACE, {
                getUser: GlobalUserGetterEnum.GET_USER,
            }),

            userComputedData(){
                return this.getUser.firstname + ' ' + this.getUser.lastname + ', '+ this.getUser.email;
            }
        },

        created(){
            this.onFetch();
        }
    })

</script>

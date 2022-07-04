<template>
    <div>
      <br /><br />
        <h1>User Data : {{ userData }}</h1>
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
        },

        created(){
            this.onFetch();
        }
    })

</script>

<template>
    <div class="home">
      First Name: <input v-model="user.firstname" />
      <br />
      Last Name: <input v-model="user.lastname" />
      <br />
      Email: <input v-model="user.email" />
      <br />
      <button @click="onSave()">Update User in Store</button>
      <br />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IUser } from "@/interfaces";
import { mapActions, mapGetters } from "vuex";
import {
  GlobalUserActionEnum,
  GlobalUserGetterEnum,
  NAMESPACE,
} from "../store/modules/user/static";

    export default Vue.component('Home', {
        
        data() {
            return {
              user :  {
                firstname: "",
                lastname: "",
                email: "",
              } as IUser,
            };
        },

        methods:{
            onSave(){
                this.setUser({
                        firstname: this.$data.user.firstname,
                        lastname: this.$data.user.lastname,
                        email: this.$data.user.email,
                    }
                );
                alert('User details are saved to store.')
            },

            ...mapActions(NAMESPACE, {
                setUser: GlobalUserActionEnum.SET_USER,
            }),

        },

        computed:{
             ...mapGetters(NAMESPACE, {
                getUser: GlobalUserGetterEnum.GET_USER,
            }),
        },

        created(){
            //Don
            this.$data.user.firstname = this.getUser.firstname;
            this.$data.user.lastname = this.getUser.lastname;
            this.$data.user.email = this.getUser.email;
        }
    })

</script>
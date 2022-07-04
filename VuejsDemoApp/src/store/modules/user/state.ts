import IUserState from "./static/i-state-user";

export const userState: () => IUserState = () => ({
    user : {
        firstname: '',
        lastname: '',
        email:''
    }
});
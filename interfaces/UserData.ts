/* eslint-disable prettier/prettier */
export interface UserData {
    userImg:string,
    userType:string,
    userName:string,
};

export interface UserResolver{
    type:string
    payload:{
        userImg:string,
        userType:string,
        userName:string,
    }
};
export const notificationSuccess = () => {
     return {
    type: 'SET_VISIBLE_AND_SUCCESS',
}}



export const notificationNotSuccess = () => {
    return{    
    type: 'SET_VISIBLE_AND_NOT_SUCCESS',
}}


export const notificationNotVisible = () => {
    return{
    type: 'SET_NOT_VISIBLE',
}}
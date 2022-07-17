import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogPosts:[],
    isExist:false,
    alert: {
        severity : 'success',
        text : '',
        open: false
    },
    isMore: false,
    dialog : {
        title: '',
        author:'',
        content: '',
        open: false
    }
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers:{
        addPost :  (state,action)=>{
            if(state.blogPosts.some((e)=> e.title === action.payload.title)){
                state.isExist = true
            }else{
                 state.blogPosts.push(action.payload)
                 state.alert = {
                    severity : 'success',
                    text : 'New Post Successfully Added',
                    open: true
                }
            }
          
        },
      
        removePost : (state,action) =>{
            state.blogPosts = state.blogPosts.filter((e)=> e.id !== action.payload)
            state.alert = {
                severity : 'success',
                text : 'Post Successfully Removed',
                open: true
            }
        },

        closeModal : (state,action) =>{
            state.isExist = false
        },

        collapseStatus : (state)=>{
            state.alert.open = false
        },

        showMore : (state,action) =>{
            state.dialog = {...action.payload, open : true}
        },

        dialogClose : (state)=>{
            state.dialog.open = false
        },
    }
})

export const {addPost, removePost, closeModal, collapseStatus, showMore, dialogClose} = formSlice.actions;

export default formSlice.reducer;
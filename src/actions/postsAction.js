import {FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST,LIKE_POST} from './types';
import * as api from '../api/index';

export const getPosts = () => async (dispatch)  => {
  try {
    const {data} = await api.fetchPosts();
    dispatch({type: FETCH_POSTS,payload:data})

  } catch (ex) {
    console.log(ex);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);
    dispatch({type: LIKE_POST, payload:data });
    //getPosts();
  } catch (e) {
    console.log(e);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try{
    const {data} = await api.updatePost(id, post);
    dispatch({type: UPDATE_POST, payload: data})
    
  }
  catch(e){
    console.log(e);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id); 
    dispatch({type: DELETE_POST})
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id);
  } catch (error) {
    console.log(error);
  }
}

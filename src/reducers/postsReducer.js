import {FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST} from '../actions/types';

const initialState= {
  posts:[

  ]
};

function postsReducer(state=initialState, action){
  switch(action.type){
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload,...state.posts]
      } 

    case UPDATE_POST:
    case LIKE_POST:  
      return{
        ...state,
        posts: state.posts.map((post)=>post._id === action.payload._id ? post=action.payload: post)
      } 
      
    case DELETE_POST:
      return{
        ...state,
        posts: state.posts.filter((post)=> post._id !==action.payload  )
      }  

    default:
      return state;
  }
}

export default postsReducer;

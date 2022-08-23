import { createReducer, on } from '@ngrx/store';
import { PostsState } from '../types/posts.state.interface';
import * as PostsActions from './posts.actions';

export const initialState: PostsState = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(PostsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);

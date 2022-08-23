import { CounterState } from "../counter/types/counter.state.interface";
import { PostsState } from "../posts/types/posts.state.interface";

export interface AppState {
    counter: CounterState,
    posts: PostsState,
}
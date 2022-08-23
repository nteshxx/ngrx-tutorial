import { Post } from "./post.interface";

export interface PostsState {
    isLoading: boolean;
    posts: Post[];
    error: string | null;
}

import { PostService } from "../post.service";
import { UserServiceProxy } from "./participants/user.service.proxy";

export class CreatePostSaga { // implement Orchestration <CreatePostSagaState> {}
    private  postService: PostService;
    private  userService: UserServiceProxy;
}
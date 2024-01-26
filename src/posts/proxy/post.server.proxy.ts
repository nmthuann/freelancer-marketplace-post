import { IPostServerService } from "./post.Server.interface";
import { PostServer } from "./post.server.service";

export class PostServerProxy implements IPostServerService {

  private postServer: PostServer | null = null;

    private getRealPostService(): PostServer {
        if (this.postServer === null) {
        // Lazy initialization: Create the real PostService instance when needed
        this.postServer = new PostServer();
        }
        return this.postServer;
    }


    getPosts(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    
    createPost(postDto: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
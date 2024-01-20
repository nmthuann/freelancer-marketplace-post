

export interface IPostServerService {
    getPosts(): Promise<any[]>;
    createPost(postDto: any): Promise<any>;
}
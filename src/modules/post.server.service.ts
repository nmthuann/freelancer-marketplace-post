import { Inject, Injectable } from "@nestjs/common";
import { IPostServerService } from "./post.Server.interface";

@Injectable()
export class PostServer implements IPostServerService {
    constructor(
        // @Inject('IJobPostService')
        // private jobPostService: any,
        // @Inject('IJobPostDetailService')
        // private jobPostDetailService: any,
    ) {}

    async getPosts(): Promise<any[]> {
        return
    }


    async createPost(postDto: any): Promise<any> {
        return;
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./models/post.model";

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private categoryRepository: Repository<Post>,
    ){

    }

}
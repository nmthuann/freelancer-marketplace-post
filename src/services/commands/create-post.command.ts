export class CreatePostCommand {
    constructor(
        public readonly post_id: string, 
        public readonly seller: string
    ) {}
}
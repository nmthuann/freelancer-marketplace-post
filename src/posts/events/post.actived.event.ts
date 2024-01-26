import { IPostsDomainEvent } from "./post.event.interface";

class PostActivedEvent implements IPostsDomainEvent {
    constructor(
        public readonly post_id: string,
        public readonly seller: string,
    ) {}
}
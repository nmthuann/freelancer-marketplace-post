import { EventPattern } from "@nestjs/microservices";

// @EventPattern('')
export class PostCreatedEvent {
    constructor(
        public readonly order_id: string
    ) {}
}
import { AggregateRoot } from '@nestjs/cqrs';


export class Post extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }
}
// import { AggregateRoot } from "@nestjs/cqrs";

// export class Hero extends AggregateRoot {
//   constructor(private id: string) {
//     super();
//     this.autoCommit = true;
//   }
// }

export abstract class AbstractAggregateRoot<T> {
  private changes: any[] = [];
  private id: T;

  getChanges(): any[] {
    return this.changes;
  }

  apply(event: any): void {
    this.changes.push(event);
    // TODO: Apply the event to update the state of the aggregate
  }

  loadFromHistory(events: any[]): void {
    for (const event of events) {
      // TODO: Apply each event to rebuild the state of the aggregate
    }
  }

  getId(): T {
    return this.id;
  }

  // Other common methods and functionalities...
}

import { SagaStep } from "./orchestration/orchestration.saga.builder";

class SimpleSagaDefinition<Data> {
  private steps: SagaStep<Data, void>[];

  constructor(steps: SagaStep<Data,void>[]) {
    this.steps = steps;
  }
}
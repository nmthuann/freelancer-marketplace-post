interface SagaStep <Data> {

}

interface SagaDefinition <Data> {

}

interface SimpleSagaDsl<Data> {
  step(): StepBuilder<Data>;
}


class SimpleSagaDefinition<Data> {
    private steps: SagaStep<Data>[];

    constructor(steps: SagaStep<Data>[]) {
        this.steps = steps;
    }
}


class SimpleSagaDefinitionBuilder<Data> {
    private sagaSteps: SagaStep<Data>[] = [];

    public addStep(sagaStep: SagaStep<Data>): void {
        this.sagaSteps.push(sagaStep);
    }

    public build(): SagaDefinition<Data> {
        return new SimpleSagaDefinition(this.sagaSteps);
    }
}

class StepBuilder<Data> {
    
}
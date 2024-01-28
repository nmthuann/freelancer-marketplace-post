export interface SagaStep <T, R>{
    invokeLocal(params: T): Promise<R>;
    invokeParticipant(params: T): Promise<R>;
    withCompenstation(params: T): Promise<R>;
    notifyParticipant(params: T): Promise<R>;
}



export interface Saga {
    a: any;

}

export class OrchestrationSagaBuilder {
    private saga: any;
    private command: any;

    build() {

    }
}





// message.interface.ts

export interface KafkaMessage {
    key?: string;
    value: any;
    headers?: any;
    partition?: number;
    offset?: number;
}

/**
 * Example: Message Headers
 *  await producer.send({
        topic: 'topic-name',
        messages: [
            { 
                key: 'key1', 
                value: 'hello world', 
                partition: 0, 
                headers: {
                    'correlation-id': '2bfb68bb-893a-423b-a7fa-7b568cad5b67',
                    'system-id': 'my-system'
                } 
            },
            { key: 'key2', value: 'hey hey!', partition: 1 }
        ],
    })
*/


export interface KafkaProducerOptions   {
    topic?: string | null;
    messages?: KafkaMessage[]  | null;
    acks?: number;
    timeout?: number;
    compression?: any;
}


/**
 * 
    await producer.send({
        topic: <String>,
        messages: <Message[]>,
        acks: <Number>,
        timeout: <Number>,
        compression: <CompressionTypes>,
    })
 */


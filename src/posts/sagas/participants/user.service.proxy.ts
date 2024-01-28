// export class UserServiceProxy {


//     const producer = kafka.producer()
//     await producer.connect()
//     await producer.send({
//         topic: 'topic-name',
//         messages: [
//             { key: 'key1', value: 'hello world' },
//             { key: 'key2', value: 'hey hey!' }
//         ],
//     })
// }


import { Injectable } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class UserServiceProxy {
    private producer: Producer;

    constructor() {
        const kafka = new Kafka({
            // Add your Kafka configuration here
            // For example, you may need to specify brokers
            brokers: ['your.kafka.broker:9092'],
        });

        this.producer = kafka.producer();
    }

    async sendMessage(): Promise<void> {
        try {
            await this.producer.connect();

            await this.producer.send({
                topic: 'topic-name',
                messages: [
                    { key: 'key1', value: 'hello world' },
                    { key: 'key2', value: 'hey hey!' }
                ],
            });
        } finally {
            await this.producer.disconnect();
        }
    }
}





    /**
        public class CustomerServiceProxy {
            CommandWithDestination reserveCredit(long orderId, Long customerId, Money orderTotal) {
                return send(new ReserveCreditCommand(customerId, orderId, orderTotal))
                    .to("customerService")
                    .build();
        }
     */
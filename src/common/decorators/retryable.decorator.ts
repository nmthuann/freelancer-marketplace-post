// 1. Tạo Decorator Retry:
import { SetMetadata, CustomDecorator } from '@nestjs/common';

// import { Saga } from '@nestjs/cqrs';

export const RETRYABLE_METADATA_KEY = 'retryable';


export const Retryable = (maxAttempts: number, delay: number): CustomDecorator<number | string> => {
  return SetMetadata(RETRYABLE_METADATA_KEY, { maxAttempts, delay });
};

// 2. Sử dụng Decorator Retry trong Service hoặc Controller:
// import { Retryable, RETRYABLE_METADATA_KEY } from './decorators/retryable.decorator';

// @Controller('your-entity')
// export class YourEntityController {
//   @Retryable(3, 100) // Retry up to 3 times with a delay of 100 milliseconds
//   @Put(':id')
//   async updateEntity(@Param('id') id: string, @Body() updateData: YourEntity): Promise<void> {
//     // Your update logic here
//   }
// }


/**
 * Tạo Interceptor Retry:
* Bạn cũng có thể tạo một interceptor để thực hiện logic retry. 
* Interceptor có thể sử dụng metadata được đặt bởi decorator để biết số lần thử lại và thời gian đợi. 
* Việc này giúp tách logic retry ra khỏi business logic.
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { retryWhen, delay, mergeMap, take } from 'rxjs/operators';
import { RETRYABLE_METADATA_KEY } from './decorators/retryable.decorator';

@Injectable()
export class RetryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const retryOptions = Reflect.getMetadata(RETRYABLE_METADATA_KEY, context.getHandler());

    if (retryOptions) {
      const { maxAttempts, delay: retryDelay } = retryOptions;
      return next.handle().pipe(
        retryWhen(errors =>
          errors.pipe(
            mergeMap((error, i) => (i < maxAttempts - 1 ? throwError(error) : throwError(error))),
            delay(retryDelay),
            take(maxAttempts)
          )
        )
      );
    }

    return next.handle();
  }
}
 */


/**
 * 4. Đăng ký Interceptor trong AppModule:
 * import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RetryInterceptor } from './interceptors/retry.interceptor';

@Module({
  controllers: [YourEntityController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: RetryInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  // Your module configuration
}

 */
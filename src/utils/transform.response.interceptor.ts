import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data?: T;
  message: string;
  status: number;
}

@Injectable()
export class TransformResponseInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        if (context.switchToHttp().getResponse().statusCode < 400) {
          return {
            message: data.message,
            status: context.switchToHttp().getResponse().statusCode,
            data: data.result,
          };
        }
        return data;
      }),
    );
  }
}

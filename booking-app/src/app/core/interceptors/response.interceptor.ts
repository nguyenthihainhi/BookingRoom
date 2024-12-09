import { HttpEventType, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    map(event => {
      if(event instanceof HttpResponse){
        const body = event.body;
        if (body && (body as any).datas) {
          const { datas, ...rest } = body as any; 
          return event.clone({
          body: {
            ...(body as any).datas,
            ...rest
          }
          })
        }
      }
      return event;
    })
  );
};

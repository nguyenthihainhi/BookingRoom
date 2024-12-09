import { HttpEventType, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { catchError, map, throwError } from 'rxjs';

export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const _loading = inject(LoadingService);
  _loading.setLoading(true, req.url);

  return next(req).pipe(
    catchError((err) => {
      _loading.setLoading(false, req.url);
      return throwError(() => err)
    })
  ).
  pipe(
    map(event => {
      if(event.type === HttpEventType.Response){
        _loading.setLoading(false,req.url)
      }
      return event;
    })
  );
}

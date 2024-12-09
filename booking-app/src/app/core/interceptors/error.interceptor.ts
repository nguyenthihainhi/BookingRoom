import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if([404].includes(error.status)){
        // console.log('Unauthorized request');
        console.log('Not found');
      }
      console.log(error.message );
      return throwError(() => error)
    })
  )
  
};

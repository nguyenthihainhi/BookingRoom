import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('>>> request is on its way to: ' + req.url);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer the token_ngohuunam2002')
  })
  return next(authReq);
};

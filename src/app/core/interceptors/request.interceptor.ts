import { inject } from '@angular/core';
import { HttpEvent, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const requestInterceptor: HttpInterceptorFn = (request, next) => {
  const router = inject(Router);

  return next(request).pipe(
    map((event: HttpEvent<any>) => {
      return event;
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status >= 500 || !error.status) {
        router.navigate(['/error']);
      }

      return throwError(() => new Error(error.message));
    })
  );
};

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../interceptors/auth.interceptor";
import { ErrorInterceptor } from "../interceptors/error.interceptor";



export const JWTInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};

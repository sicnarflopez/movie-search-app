import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { environment } from "../../environments/environment";

export function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {
    const newReq = req.clone({
      headers: req.headers.append('apikey', environment.apiKey),
    });
    return next(newReq);
  }
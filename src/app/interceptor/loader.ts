import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '@app/service/loader.service';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    // private readonly token = '448e4666787addf3e208c8f6d9b2d58b35067126';
    constructor(private loaderService: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        this.loaderService.show();
        let reqClone = req.clone({
            headers: req.headers.set('Accept', 'application/vnd.github.v3+json')
        });
        // reqClone = reqClone.clone({
        //     headers: reqClone.headers.set('Authorization', 'token ' + this.token)
        // });
        return next.handle(reqClone).pipe(
            tap(event => {
                console.log(event);
            }, error => {
                this.loaderService.hide();
                console.error(error);
            }),
            finalize(() => {
                this.loaderService.hide();
            })
        );
    }

}
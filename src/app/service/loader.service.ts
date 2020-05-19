import { Subject } from 'rxjs';
import { LoaderStateInterface } from '../models/loaderState';

export class LoaderService {
    private static instance: LoaderService;
    private loaderSubject = new Subject<LoaderStateInterface>();
    public loaderState = this.loaderSubject.asObservable();
    constructor() {
        if (LoaderService.instance) {
            return LoaderService.instance;
        }
        LoaderService.instance = this;
    }
    public show() {
        return this.loaderSubject.next({ show: true });
    }
    public hide() {
        return this.loaderSubject.next({ show: false });
    }
}

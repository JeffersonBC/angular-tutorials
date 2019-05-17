import { Observable, defer } from 'rxjs';


export function doOnSubscribe<T>(onSubscribe: () => void) {
    return (source: Observable<T>) => {
        return defer(() => {
            onSubscribe();
            return source;
        });
    };
}

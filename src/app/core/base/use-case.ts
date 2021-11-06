import { Observable } from 'rxjs';

interface UseCase<S, T> {
  execute(params: S): Observable<T>;
}

export default UseCase;

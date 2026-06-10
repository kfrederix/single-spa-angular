/**
 * Detects thenables across realms and bundled copies of Promise.
 * See https://github.com/single-spa/single-spa-angular/issues/574
 */
export function smellsLikeAPromise(value: unknown): value is PromiseLike<unknown> {
  return (
    !!value &&
    typeof (value as PromiseLike<unknown>).then === 'function' &&
    typeof (value as Promise<unknown>).catch === 'function'
  );
}

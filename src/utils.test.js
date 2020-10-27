import { get, equal } from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const f = get('name');

  expect(f(state)).toBe('홍길동');
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  const e = equal('name', '이순신');

  expect(f(state)).toBeTruthy();
  expect(e(state)).toBeFalsy();
});

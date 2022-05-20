import reverse from '../../src/reverse.js';

test('reverse', () => {
  expect(reverse('Hello')).toEqual('olleH');
  expect(reverse('')).toEqual('');
});

import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.mjs';

const data = [
  {
    arg: 'hello',
    expected: 'Hello',
  },
  {
    arg: '',
    expected: '',
  }
];

data.forEach(({arg, expected}) => {
  const received = capitalize(arg);
  assert.equal(received, expected);
});

console.log('Tests have passed.');

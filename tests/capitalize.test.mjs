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
  if (received !== expected) {
    throw new Error('Tests have not passed.')
  }
});

console.log('Tests have passed.');

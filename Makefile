test:
	NODE_OPTIONS=--experimental-vm-modules npx jest ./tests/__tests__/
	node ./tests/capitalize.test.js

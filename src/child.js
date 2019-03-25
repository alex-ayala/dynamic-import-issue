console.log('Let me go find your grandchild...');

import(/* webpackChunkName: "grandchild" */'./grandchild').then(() => {
	console.log('I am back! Here is your grandchild!');
});

console.log('Hello! I am a child!');

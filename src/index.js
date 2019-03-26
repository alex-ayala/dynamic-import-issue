console.log('Let me go find your parent...');

import(/* webpackChunkName: "parent" */'./parent').then(() => {
  console.log('I am back! Here is your parent!');
});
console.log('Welcome! Meet your descendants!');

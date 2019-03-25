### Webpack dynamic import issue

This repo is a small reproducible example of the problem described in the following Webpack issues:

[8752](https://github.com/webpack/webpack/issues/8752)  
[8934](https://github.com/webpack/webpack/issues/8934)  
[7843](https://github.com/webpack/webpack/issues/7843)  
[8876](https://github.com/webpack/webpack/issues/8876)

#### Replication instructions
1. `npm install`
2. `npm run build`
3. Open index.html in any browser

#### Expected outcome
The following should be logged to the console (not necessarily in the following order):
```
Let me go find your grandchild...
Hello! I am a child!
I am back! Here is your grandchild!
Hello! I am a grandchild!
Hello! I am a parent!
Welcome! Meet your descendants!
```

#### Actual outcome
```
Let me go find your grandchild...
Hello! I am a child!
Hello! I am a parent!
Welcome! Meet your descendants!
```

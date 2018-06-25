## Version
3.0.0-rc.3

## Reproduction link

## Steps to reproduce
- Create http service to which the router is imported
- Connect http service to more than one component
- Use lazy loading of components in the router

## What is expected?
Compile without errors, as it was before

## What is actually happening?

```
95% emitting HtmlWebpackPlugin/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/toposort/index.js:35
      throw new Error('Cyclic dependency' + nodeRep)
      ^

Error: Cyclic dependency
    at visit (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/toposort/index.js:35:13)
    at visit (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/toposort/index.js:53:9)
    at visit (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/toposort/index.js:53:9)
    at Function.toposort [as array] (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/toposort/index.js:22:
22)
    at Object.module.exports.dependency (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/html-webpack-plug
in/lib/chunksorter.js:50:35)
    at HtmlWebpackPlugin.sortChunks (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/html-webpack-plugin/i
ndex.js:364:35)
    at /Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/html-webpack-plugin/index.js:113:21
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_module
s/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:12:1)
    at Compiler.emitAssets (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/webpack/lib/Compiler.js:311:19
)
    at onCompiled (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/webpack/lib/Watching.js:50:19)
    at hooks.afterCompile.callAsync.err (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/webpack/lib/Compiler.js:500:14)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:15:1)
    at compilation.seal.err (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/webpack/lib/Compiler.js:497:30)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:9:1)
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/tapable/lib/Hook.js:35:21)
    at hooks.optimizeAssets.callAsync.err (/Users/antonreshetov/www/_sandbox/vue-test-cli-3-error/node_modules/webpack/lib/Compilation.js:986:35)
```
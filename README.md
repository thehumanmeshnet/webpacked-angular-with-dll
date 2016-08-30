### Webpacked Angular with a side of Dll (+ HMR freebie)

Basic project showing usage of [`webpack.DllPlugin`][1] with Angular 2 (RC5) to minimize build times during development. Also implements HMR using great work from [angular2-hmr][2] and [angular2-hmr-loader][3].

To install:
```
npm install webpacked-angular-with-dll
npm run dev:dll
```
Then, go to [http://localhost:8080/dist](http://localhost:8080/dist) to say hello.

Some references:
- [Optimizing Webpack build times and improving caching with DLL bundles - Rob Knight][4]

[1]: https://webpack.github.io/docs/list-of-plugins.html#dllplugin
[2]: https://github.com/AngularClass/angular2-hmr
[3]: https://github.com/AngularClass/angular2-hmr-loader
[4]: https://robertknight.github.io/posts/webpack-dll-plugins/

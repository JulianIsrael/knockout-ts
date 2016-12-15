(function (global) {
  System.config({
    //baseURL: '/build',
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'build',
      'knockout': 'npm:knockout/build/output/knockout-latest.debug.js'
    },

    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      }
      
    }
  });
})(this);
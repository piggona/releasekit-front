module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            javascriptEnabled: true,
            modifyvars: {
                'btn-height-lg': '100px',
            },
          }
        }
      }
    },
    transpileDependencies: [/\bvue-awesome\b/],
    // publicPath: '/index',
    devServer: {
      proxy: 'http://localhost:8070',
    },
};
  
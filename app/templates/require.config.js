require.config({
    baseUrl: 'compiled',
    paths: {
        main: 'main',

        // Third Party
        jquery: '../../bower_components/jquery/dist/jquery',
        lodash: '../../bower_components/lodash/dist/lodash',
        react: '../../bower_components/react/react-with-addons',
        'react-router': '../../bower_components/react-router/dist/react-router',
        reactRouterShim: 'utils/reactRouterShim'
    },
    shim: {
        'reactRouterShim': {
            exports: 'React'
        },
        'react-router': {
            deps:    ['reactRouterShim'],
            exports: 'ReactRouter'
        }
    }
});

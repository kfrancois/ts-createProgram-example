const ts = require('typescript');

const program = ts.createProgram(['my-file.ts'], {
    paths: { '@showpad/e2e/util-staging-connection': 'libs/jeet/index.ts' },
    baseUrl: '.',
});

program.emit(void 0, (_, result) => {
    console.log(result);
});

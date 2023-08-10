const next = require('next');
const nodeEnv = process.env.NODE_ENV;
const isDevNext = !(
    nodeEnv === 'production' || process.env.NEXT_ENV === 'production'
);
const port = parseInt(process.env.PORT || '3000', 10);
const app = next({ dev: isDevNext, dir: isDevNext ? '.' : `${__dirname}/../` });
const handle = app.getRequestHandler();

const listenLog = (protocol) => {
    console.log(
        `> Ready on ${protocol}://localhost:${port} of env: ${nodeEnv}, is dev next: ${isDevNext}`
    );
};

app.prepare().then(() => {
    const server = require('express')();

    server.use((req, res, next) => {
        req.context = { metadata: 'test' }
        next();
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => listenLog('http'));
});

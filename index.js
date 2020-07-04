const server = require('')

const port = process.env.PORT || 6000;

server.listen(port, () => {
    console.log(`\n** server up on port ${port} **\n`);
});
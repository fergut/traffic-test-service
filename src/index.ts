import { app } from './app';

const port = '7000';

app.listen(port, () => {
    console.log("traffic-test-service listening in port %s", port);
});
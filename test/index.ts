require('dotenv').config();
import { run } from '../src/main';

async function start() {
    let response = await run();
    process.exit(response);
}

start();

import 'reflect-metadata';
import { createConnection } from 'typeorm'

async function main() {
    await createConnection();
}

main();
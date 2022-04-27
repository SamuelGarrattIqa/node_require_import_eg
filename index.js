// Implement the old require function
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);

    res.on('data', chunk => {
        data.push(chunk);
    });

    res.on('end', () => {
        console.log('Response ended: ');
    });
}).on('error', err => {
    console.log('Error: ', err.message);
});

import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Axios Status Code:', res.status);
        console.log('Axios Date in Response header:', headerDate);

        const users = res.data;
        console.log(JSON.stringify(users))
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });

console.log('NPM started');
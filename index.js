const express = require('express');

const app = express();

app.get('/', (req, resp) => {
	resp.send('Bye there');
});

app.listen(8080, () => {
	console.log("Listening on 8080");
});
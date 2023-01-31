import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = 5000; 

const APP_PREFIX_PATH = '/app'; 
const APP_HOMEPAGE_PATH = '/app/home'; 
const APP_STATIC_CONTENT_PATH = '/static'; 

app.set('port', process.env.PORT || port);

app.use(APP_STATIC_CONTENT_PATH, express.static(path.join(__dirname, 'app')));

app.use(APP_HOMEPAGE_PATH, (req, res) => {
	res.sendFile(path.resolve(__dirname, 'app/index.html'));
});

app.get('/', (req, res) => {
	res.redirect('/app/home');
});

app.get(APP_PREFIX_PATH, (req, res) => {
	res.redirect('/app/home');
});

app.use(/^(?!\/static).+/, (req, res) => {
	res.sendFile(path.resolve(__dirname, 'app/index.html'));
});

app.listen(app.get('port'), function () {
	console.log(`App listening at the port ${port}!`);
});
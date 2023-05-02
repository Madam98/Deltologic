import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router/index';

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/calculate-volume', router);

const server = http.createServer(app);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server running on ${port}`);
});

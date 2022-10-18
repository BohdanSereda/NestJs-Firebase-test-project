import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

const serviceAccount = require('../../serviceAccountKey.json')

const server = express();

export const createNestServer = async (expressInstance) => {
    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressInstance),
    );
    return app.init();
};

createNestServer(server)
    .then((v) => console.log('Nest Ready'))
    .catch((err) => console.error('Nest broken', err));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
export const api = functions.region('europe-central2').https.onRequest(server);
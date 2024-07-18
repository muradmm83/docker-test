import { connect, connection } from 'mongoose'

connect(`mongodb://${process.env.MONGO_USERNAME || 'murad'}:${process.env.MONGO_PWD || 'murad'}@${process.env.MONGO_HOST}:27017`);

connection.on('error', console.error.bind(console, 'MONGO> connection error:'));
connection.once('open', function () {
    console.log('MONGO> Database connected successfully');
});
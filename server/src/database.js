import mongoose from "mongoose";

import settings from "./settings";

mongoose.connect(settings.databaseURI, {useNewUrlParser: true});

export let connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
import express from 'express';

const app = express();

//---- import Routes ------//

//---- Middlewares --------//

// --- Global Settings ---//
app.use( express.json());

export default app;
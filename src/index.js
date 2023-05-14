import app from './app.js';
//importamos la conexcion
import {connect} from './database.js';
//llamamos la funcion de la conexicon
connect();

app.listen(3000);
console.log('Server is up!!')

import app from './app.js';
//importamos la conexcion
import {connect} from './database.js';
//llamamos la funcion de la conexicon para que se ejecute
connect();

app.listen(3000);
console.log('Server is up!!')

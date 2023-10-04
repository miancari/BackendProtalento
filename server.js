const express = require('express');
const server = express();
const PORT = 3000;

const Routes = require('./routes');

server.use(express.json())
/* server.use('/', (req, res) => {
    res.send('Bienvenido')
}) */
server.use('/usuario', Routes.UsuariosRoutes)
server.use('/contrato', Routes.ContratosRoutes)
server.use('/habilidades', Routes.HabilidadesRoutes)
server.use('/pagos', Routes.PagosRoutes)
server.use('/reseñas', Routes.ReseñasRoutes)
server.use('/servicios', Routes.ServicioRoutes)



server.listen(PORT, () => {

    console.log(`🚀 Corriendo en puerto: ${PORT} 😇`);
});
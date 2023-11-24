module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',	   
        user: 'root',     // Cambiar por su nombre de usuario 
        password: '', // Cambiar por su contraseña
        database: 'campeonato_robotica',
      },
      migrations: {
        directory: './migrations', 
        seeds: {
          directory: './seeds', // Use si desea tablas con datos de cada entidad
        },
      },
    },
};
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production') {
    const config = parse(process.env.DATABASE_URL)
    return {
      defaultConnection : 'default',
      connection: {
        default: {
          connector: 'bookshelf',
          settings : {
            client: 'postgres',
            host: config.host,
            posrt: config.port,
            database: config.database,
            username: config.user,
            password: config.password
          },
          options: {
            ssl: false
          }
        }
      }
    }
  }

  return{
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'mysql',
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 3306),
          database: env('DATABASE_NAME', 'blog'),
          username: env('DATABASE_USERNAME', 'root'),
          password: env('DATABASE_PASSWORD', ''),
          ssl: env.bool('DATABASE_SSL', false),
        },
        options: {}
      },
    },
  }
};

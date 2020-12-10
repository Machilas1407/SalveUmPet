// Update with your config settings.
// postgres://euvhisifltzcqj:9ef9d95c85296558f6d65b163d81f4e204e42e80f9f53b93adb2a0b6abe6fb8f@ec2-54-208-233-243.compute-1.amazonaws.com:5432/d6outpoj19n729
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
    
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'd6outpoj19n729',
      user:     'euvhisifltzcqj',
      password: '9ef9d95c85296558f6d65b163d81f4e204e42e80f9f53b93adb2a0b6abe6fb8f'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'd6outpoj19n729',
      user:     'euvhisifltzcqj',
      password: '9ef9d95c85296558f6d65b163d81f4e204e42e80f9f53b93adb2a0b6abe6fb8f'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

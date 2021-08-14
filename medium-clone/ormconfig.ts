import { ConnectionOptions } from "typeorm";

const config : ConnectionOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'mediumclone'

};

export default config;
import { getConnection, initOracleClient } from "oracledb";
import * as dotenv from "dotenv";

// get .env config
dotenv.config({ path: "../.env" });

class Database {
  #connectionConfig: object;

  constructor() {
    this.#connectionConfig = {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING_NAME,
    };

    try {
      // initialize oracle's JAVA client
      initOracleClient({ libDir: "./instantclient_21_7" });
    } catch (error) {
      console.warn("Error has ocurred during oracle's client initialization!");
      console.error(error);
    }
  }

  async getConnection() {
    try {
      // connect to server and return connection
      return await getConnection(this.#connectionConfig);
    } catch (error) {
      console.warn("Can't connect to Oracle DB server");
      console.error(error);
    }
  }
}

export default new Database();

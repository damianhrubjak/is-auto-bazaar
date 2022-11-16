import * as dotenv from "dotenv";
import oracleDB from "oracledb";

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

        oracleDB.outFormat = oracleDB.OUT_FORMAT_OBJECT;

        try {
            // initialize oracle's JAVA client
            oracleDB.initOracleClient({ libDir: "./instantclient_21_7" });
        } catch (error) {
            console.warn(
                "Error has ocurred during oracle's client initialization!"
            );
            console.error(error);
        }
    }

    async getConnection() {
        try {
            // connect to server and return connection
            return await oracleDB.getConnection(this.#connectionConfig);
        } catch (error) {
            console.warn("Can't connect to Oracle DB server");
            console.error(error);
        }
    }
}

export default new Database();

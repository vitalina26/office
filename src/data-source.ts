import "reflect-metadata"
import { DataSource } from "typeorm"
import { Room,Table } from "./entity/Floor_Plan"
import { Employee } from "./entity/hr"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "vitalina26",
    database: "office",
    synchronize: true,
    logging: false,
    entities: [Room, Employee, Table],
    migrations: [],
    subscribers: [],
})

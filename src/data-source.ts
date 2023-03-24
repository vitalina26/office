import "reflect-metadata"
import { DataSource } from "typeorm"
import { Room,Table } from "./entity/floor_plan/Floor_Plan"
import { Employee } from "./entity/hr/hr"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "vitalina26",
    database: "office",
    logging: false,
    entities: [Room, Employee, Table],
    migrations: [],
    synchronize: true
    
})

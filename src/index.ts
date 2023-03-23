import { AppDataSource } from "./data-source"
import { Room,Table } from "./entity/Floor_Plan"
import { Employee } from "./entity/hr"
AppDataSource.initialize().then(async () => {

//1
    
    const tableRepository = AppDataSource.getRepository(Table);
    const table = await tableRepository.findOne( { where: { table_id: 1  }, relations: { room:true}});
    if (table) {
        const room = table.room;
        console.log(`The table ${table.table_name} is located in the room ${room.room_name}.`);
    }

//2
    const employeeRepository = AppDataSource.getRepository(Employee);
    const employee = await employeeRepository.findOne({ where: { id: 1 }, relations: { table:true}});
    if (employee) {
        const tables = employee.table;
    if (table) {
        console.log(`The following table is assigned to employee ${employee.firstName} ${employee.lastName}:${ table.table_name}`);
    ;
    } else {
        console.log(`Employee ${employee.firstName} ${employee.lastName} is not assigned to any table.`);
 }
    }
//3
    const roomRepository = AppDataSource.getRepository(Room);
    const room = await roomRepository.findOne({ where: { room_id:1 }, relations: { employees:true} });
    if (room) {
      const employees = room.employees;
      if (employees.length > 0) {
        console.log(`The following employees  are in room ${room.room_id}:`);
        employees.forEach(employee => console.log(`${employee.firstName} ${employee.lastName}`));
      } else {
        console.log(`Room ${room.room_name}  does not have any employees`);
      }
    }

}).catch(error => console.log(error))

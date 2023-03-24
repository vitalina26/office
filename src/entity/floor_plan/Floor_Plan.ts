import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany,OneToOne, JoinTable } from 'typeorm';
import { Employee } from '../hr/hr';
@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  room_id: number;

  @Column()
  room_name: string;

  @OneToMany(type => Table, table => table.room)
    tables: Table[];
    
 @OneToMany(type => Employee, employee => employee.room)
    employees: Employee[];

}

@Entity()
export class Table {
  @PrimaryGeneratedColumn()
  table_id: number;

  @Column()
  table_name: string;

  @Column()
  availability: boolean;

  @ManyToOne(type => Room, room => room.tables)
  room: Room;

  @OneToOne(type => Employee, employee => employee.table)
  employee: Employee;
}


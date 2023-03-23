import { Entity, Column, PrimaryGeneratedColumn,OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';
import {Room, Table} from './Floor_Plan'
@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(type => Table, table => table.employee)
  @JoinColumn()
    table: Table;
    
 @ManyToOne(type => Room, room => room.employees)
    room: Room;


}

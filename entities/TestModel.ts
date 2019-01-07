import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class TestModel {
    @PrimaryGeneratedColumn('uuid')
    private readonly id: string;
}
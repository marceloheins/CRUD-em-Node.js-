import { Entity, PrimaryColumn, Column } from "typeorm";

import { v4 as uuid } from "uuid";


@Entity("clients")
class Client {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    cpf!: string;

    @Column()
    email!: string;

    @Column()
    address!: string;

   @Column()
   zipcode!: number;

   @Column()
   number!: number;

   @Column()
   city!: string;

   @Column()
   state!: string;



    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Client };

 import { Entity, PrimaryColumn, Column } from "typeorm";
    
    import { v4 as uuid } from "uuid";
    
    
    @Entity("sales")
    class Sale {
        @PrimaryColumn()
        readonly id!: string;
    
        @Column()
        value!: number;
    
        @Column()
        discount!: number;
    
        @Column()
        productId!: string;
    
       @Column()
       clientId!: string;
    
        constructor() {
            if (!this.id) {
                this.id = uuid();
            }
        }
    }
    
    export { Sale };
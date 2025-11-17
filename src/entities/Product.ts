    import { Entity, PrimaryColumn, Column } from "typeorm";
    
    import { v4 as uuid } from "uuid";
    
    
    @Entity("products")
    class Product {
        @PrimaryColumn()
        readonly id!: string;
    
        @Column()
        name!: string;
    
        @Column()
        EAN!: string;
    
        @Column()
        price!: number;
    
        @Column()
        description!: string;
    
       @Column()
       categoryId!: string;
    
        constructor() {
            if (!this.id) {
                this.id = uuid();
            }
        }
    }
    
    export { Product };
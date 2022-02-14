export class Animal {
    type: string;
    name: string;
    age: number;
    birthday: Date;
    isfed: boolean;


    constructor(type: string, name: string, age: number, isfed: boolean) {
        this.type = type;
        this.name = name;
        this.age = 0;
        this.birthday = new Date();
        this.isfed = false;

    }

}
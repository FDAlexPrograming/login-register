export class About {
    img?:any;
    id? : number;
    nombre? : string;
    titulo? : string;
    resumenProfesional? : string;

    constructor(img?:any,id?:number,nombre?:string,titulo?:string,resumenProfesional?:string){
        this.img = img;
        this.id = id;
        this.nombre = nombre;
        this.titulo = titulo;
        this.resumenProfesional = resumenProfesional;
    }

}

import { ObjectId } from "mongodb";

export class Usuario{
    constructor( _id: ObjectId, nombre: string, fecha_creacion: Date, correo: string ){
        this._id=  _id;
        this.nombre= nombre;
        this.fecha_creacion = fecha_creacion;
        this.correo = correo;

    }

    _id: ObjectId;
    nombre: string;
    fecha_creacion: Date;
    correo: string
    
}
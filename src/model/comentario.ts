import { ObjectId } from "mongodb";

export class Comentario{
    constructor(_id: ObjectId,contenido: string,usuario_id: ObjectId,blog_id: ObjectId,fecha_creacion: Date){
    this._id= _id,
    this.contenido = contenido;
    this.usuario_id = usuario_id;
    this.blog_id= blog_id;
    this.fecha_creacion = fecha_creacion;    
    }

    _id: ObjectId;
    contenido: string;
    usuario_id: ObjectId;
    blog_id: ObjectId;
    fecha_creacion: Date;
}

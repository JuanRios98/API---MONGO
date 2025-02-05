import { ObjectId } from "mongodb";

export class Blogs{
    constructor(_id: ObjectId, titulo: string, contenido: string,usuario_id: ObjectId,fecha_publicacion: Date,categoria: string)
    {
        this._id= _id,
        this.titulo= titulo;
        this.contenido= contenido;
        this.usuario_id= usuario_id;
        this.fecha_publicacion = fecha_publicacion;
        this.categoria= categoria;
    }

    _id: ObjectId;
    titulo: string;
    contenido: string;
    usuario_id: ObjectId;
    fecha_publicacion: Date;
    categoria: string;
}
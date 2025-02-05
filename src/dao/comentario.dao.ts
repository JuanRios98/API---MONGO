import GetConnection from "../conexion/connection";
import { Comentario } from "../model/comentario";
import { ObjectId } from "mongodb";


export const ListarComentarios= async(id: ObjectId): Promise<Comentario | undefined>=>{
    try {
        let rs: Comentario []= [];
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection= mongo.db.collection("comentarios");
        const result = await collection.find({_id: {$eq: id}}).toArray();
        rs = result.map((i) => new Comentario(i._id,i.contenido, i.usuario_id,i.blog_id,i.fecha_creacion) );
        mongo.client.close();
        if(rs.length==0){
            return undefined;
        }
        return rs[0]
    } catch (error) {
        throw error;
        
    }
}

export const AgregarComentario = async(c: Comentario): Promise<boolean>=>{
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("comentarios");
        const res = await collection.insertOne(c)
        return res.acknowledged;
    } catch (error) {
        throw error;
    }
}

export const ActualizarComentario = async(c: Comentario): Promise<boolean>=>{
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("comentarios");
        const rs = await collection.updateOne({_id:{$eq: new ObjectId(c._id.toString())}},
        {$set: {
            contenido: c.contenido,
            usuario_id: c.usuario_id,
            blog_id: c.blog_id,
            fecha_creacion: c.fecha_creacion
        }})
        return rs.acknowledged;
    } catch (error) {
        throw error;
    }
}

export const EliminarComentario = async(id: ObjectId): Promise<boolean>=>{
    try {
        const mongo = GetConnection()
        await mongo.client.connect()
        const collection = mongo.db.collection("comentarios");
        const rs = await collection.deleteOne({_id:{$eq:id}})
        return rs.acknowledged
    } catch (error) {
        throw error;
    }
}
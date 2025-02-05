import GetConnection from "../conexion/connection";
import { Blogs } from "../model/blogs";
import { ObjectId } from "mongodb";

export const ListarBlogs = async(): Promise<Blogs[]>=>{
    try {
        let rs: Blogs[] = [];
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("blogs");
        const result = await collection.find({}).sort({ fecha_publicacion: 1 }).toArray();
        rs = result.map((i) => new Blogs(i._id, i.titulo, i.contenido,i.usuario_id,i.fecha_publicacion,i.categoria));
        mongo.client.close();
        return rs;
    } catch (error) {
        throw error;
    }
}

export const AgregarBlogs = async(b: Blogs): Promise<boolean>=>{
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("blogs");
        const res = await collection.insertOne(b)
        return res.acknowledged;
    } catch (error) {
        throw error;
    }
}

export const ActualizarBlogs = async(b: Blogs): Promise<boolean>=>{
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("blogs");
        const rs = await collection.updateOne({_id:{$eq: new ObjectId(b._id.toString())}},
        {$set: {
            titulo: b.titulo,
            contenido: b.contenido,
            usuario_id: b.usuario_id,
            fecha_publicacion: b.fecha_publicacion,
            categoria: b.categoria
        }})
        return rs.acknowledged;
    } catch (error) {
        throw error;
    }
}

export const EliminarBlogs = async(id: ObjectId): Promise<boolean>=>{
    try {
        const mongo = GetConnection()
        await mongo.client.connect()
        const collection = mongo.db.collection("blogs");
        const rs = await collection.deleteOne({_id:{$eq:id}})
        return rs.acknowledged
    } catch (error) {
        throw error;
    }
}
import { Usuario } from "../model/usuario";
import GetConnection from "../conexion/connection";
import { Collection, ObjectId } from "mongodb";

export const ListarUsuarios= async(id: ObjectId): Promise<Usuario | undefined>=>{
    try {
        let rs: Usuario []= [];
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection= mongo.db.collection("usuarios");
        const result = await collection.find({_id: {$eq: id}}).toArray();
        rs = result.map((i) => new Usuario(i._id, i.nombre, i.fecha_creacion, i.correo));
        mongo.client.close();
        if(rs.length==0){
            return undefined;
        }
        return rs[0]
    } catch (error) {
        throw error;
        
    }
}

export const AgregarUsuarios = async(u: Usuario): Promise<boolean>=>{
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("usuarios");
        const res = await collection.insertOne(u)
        return res.acknowledged;
    } catch (error) {
        throw error;
    }
}

export const ActualizarUsuarios = async(u: Usuario): Promise<boolean>=>{
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("usuarios");
        const rs = await collection.updateOne({_id:{$eq: new ObjectId(u._id.toString())}},
        {$set: {nombre: u.nombre,
            fecha_creacion: u.fecha_creacion,
            correo: u.correo,
        }})
        return rs.acknowledged;
    } catch (error) {
        throw error;
    }
}

export const EliminarUsuarios = async(id: ObjectId): Promise<boolean>=>{
    try {
        const mongo = GetConnection()
        await mongo.client.connect()
        const collection = mongo.db.collection("usuarios");
        const rs = await collection.deleteOne({_id:{$eq:id}})
        return rs.acknowledged
    } catch (error) {
        throw error;
    }
}
import { Comentario } from "../model/comentario";
import * as DaoComentario  from "../dao/comentario.dao"
import { ObjectId } from "mongodb";

export const GetComentarioId = async(id: string): Promise<Comentario | undefined>=>{
    try {
        let u: Comentario | undefined = await DaoComentario.ListarComentarios(new ObjectId(id))
        return u;
    } catch (error) {
        throw error;
    }
}

export const PostComentario = async(c: Comentario): Promise<boolean>=>{
    try {
        let u = await DaoComentario.AgregarComentario(c);
        return u;
    } catch (error) {
        throw error;
    }
}

export const PutComentario= async(c: Comentario): Promise<boolean>=>{
    try {
        let u = await DaoComentario.ActualizarComentario(c);
        return u;
    } catch (error) {
        throw error;
    }
}

export const DeleteComentario = async(id:string): Promise<boolean>=>{
    try {
        let u = await DaoComentario.EliminarComentario(new ObjectId(id))
        return u;
    } catch (error) {
        throw error;
    }
}
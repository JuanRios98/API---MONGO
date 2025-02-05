import { Usuario } from "../model/usuario";
import * as DaoUsuarios  from "../dao/usuario.dao"
import { ObjectId } from "mongodb";

export const GetUsuarioId = async(id: string): Promise<Usuario | undefined>=>{
    try {
        let u: Usuario | undefined = await DaoUsuarios.ListarUsuarios(new ObjectId(id))
        return u;
    } catch (error) {
        throw error;
    }
}

export const PostUsuario = async(us: Usuario): Promise<boolean>=>{
    try {
        let u = await DaoUsuarios.AgregarUsuarios(us);
        return u;
    } catch (error) {
        throw error;
    }
}

export const PutUsuario= async(us: Usuario): Promise<boolean>=>{
    try {
        let u = await DaoUsuarios.ActualizarUsuarios(us);
        return u;
    } catch (error) {
        throw error;
    }
}

export const DeleteUsuario = async(id:string): Promise<boolean>=>{
    try {
        let u = await DaoUsuarios.EliminarUsuarios(new ObjectId(id))
        return u;
    } catch (error) {
        throw error;
    }
}
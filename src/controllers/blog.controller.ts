import { Blogs } from "../model/blogs";
import * as DaoBlog from "../dao/blog.dao";
import { ObjectId } from "mongodb";

export const GetBlogs = async (): Promise<Blogs[]> => {
    try {
        let p: Blogs[] = await DaoBlog.ListarBlogs();
        return p;
    } catch (error) {
        throw error;
    }
}

export const PostBlogs = async(b: Blogs): Promise<boolean>=>{
    try {
        let u = await DaoBlog.AgregarBlogs(b);
        return u;
    } catch (error) {
        throw error;
    }
}

export const PutBlogs= async(b: Blogs): Promise<boolean>=>{
    try {
        let u = await DaoBlog.ActualizarBlogs(b);
        return u;
    } catch (error) {
        throw error;
    }
}

export const DeleteBlogs = async(id:string): Promise<boolean>=>{
    try {
        let u = await DaoBlog.EliminarBlogs(new ObjectId(id))
        return u;
    } catch (error) {
        throw error;
    }
}

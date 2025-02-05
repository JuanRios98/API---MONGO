import GetConnection from "../conexion/connection";
import { Skin } from "../model/skin";

export const Listar = async (): Promise<Skin[]> => {
    try {
        let rs: Skin[] = [];
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("skins");
        const result = await collection.find({ valor: { $gt: 20 } }).toArray();
        rs = result.map((i) => new Skin(parseInt(i._id.toString()), i.nombre, i.valor,
            i.disponible, i.colores));
        mongo.client.close();
        return rs;
    } catch (error) {
        throw error;
    }
}

export const Add = async (s: Skin): Promise<boolean> => {
    try {
        const mongo = GetConnection();
        await mongo.client.connect();
        const collection = mongo.db.collection("skins");
        const res = await collection.insertOne(s);
        return res.acknowledged;
    } catch (error) {
        throw error;
    }
}
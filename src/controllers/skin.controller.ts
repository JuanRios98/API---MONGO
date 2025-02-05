import { Skin } from "../model/skin";
import * as DaoSkin from "../dao/skin.dao";

export const GetSkins = async (): Promise<Skin[]> => {
    try {
        let p: Skin[] = await DaoSkin.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

export const Add = async (skin: Skin): Promise<boolean> => {
    try {
        let p = await DaoSkin.Add(skin);
        return p;
    } catch (error) {
        throw error;
    }
}
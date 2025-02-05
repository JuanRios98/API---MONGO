import express from 'express';
import * as skinController from "../controllers/skin.controller";
import { Skin } from '../model/skin';
const router = express.Router();

router.get('/', (_, res) => {
    skinController.GetSkins()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

router.post('/', (req: express.Request, res: express.Response) => {
    skinController.Add(req.body as Skin)
        .then((f) => {
            if (f)
                res.status(201).send();
            else
                res.status(500).send()
        }).catch((e) => {
            res.status(500).json(e);
        });
});

export default router;
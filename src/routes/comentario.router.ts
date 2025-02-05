import { Comentario } from "../model/comentario";
import * as ComentarioController from "../controllers/comentario.controller"
import expres, { Router } from "express"


const router = expres.Router();

router.get('/listar/:id',(rq,rs)=>{
    ComentarioController.GetComentarioId(rq.params.id)
    .then((obj)=>{
        if(obj){
            rs.json(obj);
        }else{
            rs.status(409).send();
        }
    }).catch((e)=>{
        return rs.status(500).json(e);
    })

})

router.post('/crear',(rq,rs)=>{
    ComentarioController.PostComentario(rq.body as Comentario)
    .then((obj)=>{
        if(obj){
            rs.status(201).send();
        }else{
            rs.status(409).send();
        }
    }).catch((e)=>{
        rs.status(500).json(e)
    })
})

router.put('/actualizar',(rq,rs)=>{
    ComentarioController.PutComentario(rq.body as Comentario)
    .then((obj)=>{
        if(obj){
            rs.status(200).send();
        }else{
            rs.status(409).send();
        }
    }).catch((e)=>{
        rs.status(500).json(e)
    })
})

router.delete('/eliminar/:id',(rq,rs)=>{
    ComentarioController.DeleteComentario(rq.params.id)
    .then((obj)=>{
        if(obj){
            rs.status(200).send();
        }else{
            rs.status(409).send();
        }
    }).catch((e)=>{
        rs.send(500).json(e);
    })
})
export default router;
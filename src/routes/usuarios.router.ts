import { Usuario } from "../model/usuario";
import * as UsuariosController from "../controllers/usuario.controller";
import expres, { Router } from "express"



const router = expres.Router();

router.get('/listar/:id',(rq,rs)=>{
    UsuariosController.GetUsuarioId(rq.params.id)
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
    UsuariosController.PostUsuario(rq.body as Usuario)
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
    UsuariosController.PutUsuario(rq.body as Usuario)
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
    UsuariosController.DeleteUsuario(rq.params.id)
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
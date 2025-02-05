import express from 'express';
import * as BlogController from "../controllers/blog.controller";
import { Blogs } from '../model/blogs';


const router = express.Router();

router.get('/listar', (_, res) => {
    BlogController.GetBlogs()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

router.post('/crear',(rq,rs)=>{
    BlogController.PostBlogs(rq.body as Blogs)
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
    BlogController.PutBlogs(rq.body as Blogs)
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
    BlogController.DeleteBlogs(rq.params.id)
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
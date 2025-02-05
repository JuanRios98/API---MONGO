import express from 'express';
import cors from 'cors';
import skinRouter from './routes/skin.router';
import usuariosRouter from './routes/usuarios.router';
import comentarioRouter from './routes/comentario.router';
import blogRouter from './routes/blogs.router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api/skin', skinRouter);
app.use('/api/usuario', usuariosRouter);
app.use('/api/comentario',comentarioRouter);
app.use('/api/blogs', blogRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`)
});
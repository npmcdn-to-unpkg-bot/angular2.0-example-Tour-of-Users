import { SubCategoria } from '../models/subcategoria'
import { Categoria } from '../models/categoria'

export class Post{
	id:number;
	subcategorias:SubCategoria;
	categoria:Categoria;
	mensaje:string;
}
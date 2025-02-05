export class Skin {
    constructor(id: number, nombre: string, valor: number, disponible: boolean, colores: string[]) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.disponible = disponible;
        this.colores = colores;
    }
    id: number;
    nombre: string;
    valor: number;
    disponible: boolean;
    colores: string[];
}
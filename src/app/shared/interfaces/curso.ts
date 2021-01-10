export interface Curso {
    id: number;
    title: string;
    imagen: string;
    descripcion: string;
    precio: number;
    instructor: string;
    duración: number;
    numeroDeLecciones: number;
    cantidadDeEstudiantes: number;
    lenguajeDictado: string;
    fechaDeInicio: Date;
}

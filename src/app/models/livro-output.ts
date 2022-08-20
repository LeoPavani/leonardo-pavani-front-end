import { AutorOutput } from './autor-output';
export interface LivroOutput{
  id: number;
  titulo: string;
  anoLancamento: number;
  autores: AutorOutput[];
}

export interface Cliente {
  id?: number,
  nome: string,
  cpf: string,
  logradouro: string,
  numero: string,
  complemento?: string,
  bairro: string,
  cidade: string,
  estado: string,
  cep: string,
  email: string,
  data_nascimento: string,
  created_at?: string,
  updated_at?: string,
}

/* eslint-disable prettier/prettier */
export class CreateUserDto {
    nome: string;
    password: string;
    razaoSocial: string;
    tipo: string = "FORNECEDOR" || "CLIENTE" || "TRANSPORTADOR";
    nomeFantasia: string;
    CNPJ: string;
    endereco: string;
    bairro?: string;
    numero?: string;
    complemento?: string;
    CEP: string;
    telefone: string;
    email: string;
    incricaoEstadual?: string;
    incricaoMunicipal?: string;

}








/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    nome: string;

    @Prop()
    password: string;

    @Prop()
    razaoSocial: string;

    @Prop()
    tipo: string = "FORNECEDOR" || "CLIENTE" || "TRANSPORTADOR";

    @Prop()
    nomeFantasia: string;

    @Prop()
    CNPJ: string;

    @Prop()
    endereco: string;

    @Prop()
    bairro?: string;

    @Prop()
    numero?: string;

    @Prop()
    complemento?: string;

    @Prop()
    CEP: string;

    @Prop()
    telefone: string;

    @Prop()
    email: string;

    @Prop()
    incricaoEstadual?: string;

    @Prop()
    incricaoMunicipal?: string;

}

export const UserSchema = SchemaFactory.createForClass(User);

/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { BadRequest } from './../../infra/helpers/errorHandlers';
// export default class PasswordValid {
//     constructor(readonly value: string) {
//         this.validate();
//     }

//     public validate(): { message: string } {
//         const checkPasswordLenght =
//             this.value.length >= 8 && this.value.length <= 32;
//         if (!checkPasswordLenght)
//             throw BadRequest(
//                 'Senha Inválida, a senha deve conter de 8 a 32 caracteres!'
//             );
//         if (!this.checkContainsAnyLowerCase())
//             throw BadRequest('Senha Inválida, acrescente uma letra minúscula!');
//         if (!this.checkContainsAnyUppercaseLetter())
//             throw BadRequest('Senha Inválida, acrescente uma letra Maiúscula!');
//         if (this.checkContainsAnyBlankSpace())
//             throw BadRequest('Senha Inválida, não deixe espaço em branco!');
//         if (!this.checkContainsAnyNumber())
//             throw BadRequest('Senha Inválida, acrescente um número!');
//         if (this.checkContainsPunctuationAccentuationCharacter())
//             throw BadRequest('Senha Inválida, caractere não permetido!');
//         if (!this.checkAllowedSpecialCharacters())
//             throw BadRequest('Senha Inválida, insira um caractere especial!');

//         return { message: 'Senha Válida!!' };
//     }

//     private checkContainsAnyLowerCase(): boolean {
//         return /[a-z]/g.test(this.value);
//     }

//     private checkContainsAnyUppercaseLetter(): boolean {
//         return /[A-Z]/g.test(this.value);
//     }

//     private checkContainsAnyBlankSpace(): boolean {
//         return /[\s]/i.test(this.value);
//     }

//     private checkContainsAnyNumber(): boolean {
//         return /[\d]/i.test(this.value);
//     }

//     private checkContainsPunctuationAccentuationCharacter(): boolean {
//         return /(?=.*[}{~'ãáâêàẽéêĩíîìõóôòũúûù])/.test(this.value);
//     }

//     private checkAllowedSpecialCharacters(): boolean {
//         // eslint-disable-next-line no-useless-escape
//         return /(?=.*[ç!@#$%*()=+¨&*()<>:;.,?^`'\-_\|/])/.test(this.value);
//     }
// }

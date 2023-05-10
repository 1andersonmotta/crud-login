/* eslint-disable prettier/prettier */
export class Cnpj {
    private static REJECT_LIST = [
        '00000000000000',
        '11111111111111',
        '22222222222222',
        '33333333333333',
        '44444444444444',
        '55555555555555',
        '66666666666666',
        '77777777777777',
        '88888888888888',
        '99999999999999',
    ];

    private static STRICT_STRIP_REGEX = /[-/.]/g;

    public static format(cnpj: string): string {
        return this.strip(cnpj).replace(
            /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
            '$1.$2.$3/$4-$5',
        );
    }

    public static strip(cnpj: string): string {
        const regex = this.STRICT_STRIP_REGEX;
        return (cnpj || '').toString().replace(regex, '');
    }

    public static isValid(cnpj: string): boolean {
        const stripped = this.strip(cnpj);

        if (!stripped) {
            return false;
        }

        if (stripped.length !== 14) {
            return false;
        }

        if (this.REJECT_LIST.includes(stripped)) {
            return false;
        }

        let numbers = stripped.substr(0, 12);
        numbers += this.verifierDigit(numbers);
        numbers += this.verifierDigit(numbers);

        return numbers.substr(-2) === stripped.substr(-2);
    }

    public static generate(useFormat = false): string {
        let numbers = '';

        for (let i = 0; i < 12; i += 1) {
            numbers += Math.floor(Math.random() * 9);
        }

        numbers += this.verifierDigit(numbers);
        numbers += this.verifierDigit(numbers);

        return useFormat ? this.format(numbers) : numbers;
    }

    private static verifierDigit(numbers: string): number {
        let index = 2;
        const reverse = numbers
            .split('')
            .reduce((buffer, number) => [parseInt(number, 10)].concat(buffer), [] as number[]);

        const sum = reverse.reduce((buffer, number) => {
            buffer += number * index;
            index = index === 9 ? 2 : index + 1;
            return buffer;
        }, 0);

        const mod = sum % 11;
        return mod < 2 ? 0 : 11 - mod;
    }
}


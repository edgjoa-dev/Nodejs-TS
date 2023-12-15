

interface CreateTableUseCases {
    execute: (options: CreateTableOptions)=> string;
}

interface CreateTableOptions{
    limit?: number;
    base: number;
    show?: boolean;
}

export class CreateTable implements CreateTableUseCases  {

    constructor(){
        /*
            DI --> Dependency Injection
        */
    }

    // Iteración para tabal de multiplicar
    execute({ limit=10, base }:CreateTableOptions ){

    let outputMessage = '';
    for (let i = 1; i <= limit; i++) {
    const result = i * base;
    outputMessage += `${i} x ${base} = ${result}\n`;

    }

    return outputMessage;
    }
}
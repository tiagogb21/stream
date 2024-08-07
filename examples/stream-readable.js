import { Readable } from "node:stream";

// Readable --> Permite mostrar dados, mesmo antes deles estarem completos

// Classe que gera uma stream de números de 1 a 100
class OneToHundredStream extends Readable {
    constructor() {
        super();
        this.index = 1;
    }

    // Método obrigatório em Readable Streams, responsável por ler dados
    _read() {
        setTimeout(() => {
            const i = this.index++;

            // Quando o índice passa de 100, sinalizamos o fim da stream com null
            if (i > 100) {
                this.push(null);
            } else {
                // Convertendo o número para Buffer e enviando para a stream
                const buf = Buffer.from(`${i}\n`);
                this.push(buf);
            }
        }, 1000); // Simula um atraso de 1 segundo entre cada leitura
    }
}

// Criando uma instância da stream e conectando-a ao process.stdout para exibição
new OneToHundredStream().pipe(process.stdout);

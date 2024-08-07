## Streams

    - São abstrações para trabalhar com dados que podem não estar disponíveis inteiramente no início, mas que são processados ao longo do tempo.

        --> Permitem ler pequenas partes enquanto o conteúdo é carregado

    - Vantagem: manipular grandes volumes de dados de forma eficiente.

### Tipos:

1. Readable: Usados para operações de leitura - requisições HTTP (entrada de dados)

    ```js
    fs.createReadStream()
    ```

- Eventos principais:

    - data: Emitido quando há dados disponíveis para leitura.

    - end: Emitido quando não há mais dados a serem lidos.

    - error: Emitido quando ocorre um erro.

    - close: Quando o stream é fechado.


2. Writable: Usados para operações de escrita - respostas HTTP (saída de dados)

    ```js
    fs.createWriteStream()
    ```

Métodos Principais:

    - write(chunk): Escreve dados no stream.

    - end(): Finaliza o stream de escrita.

Eventos Principais:

    - drain: Emitido quando o stream está pronto para receber mais dados.

    - finish: Emitido quando todos os dados foram escritos.

    - error: Quando ocorre um erro durante a escrita.

    - close: Quando o stream é fechado.


3. Duplex Streams:

    - Implementam tanto a interface de leitura quanto a de escrita.

    Exemplos: Sockets TCP, net.Socket.

4. Transform Streams:

    - Tipo especial de duplex stream que pode modificar ou transformar os dados enquanto são lidos ou escritos.

    Exemplos: zlib.createGzip(), crypto.createCipher().

Métodos principais:

    - _transform(chunk, encoding, callback): Transforma os dados lidos antes de escrevê-los.

## Operações Comuns com Streams

1. Piping: Conecta uma fonte de dados (Readable Stream) a um destino (Writable Stream).

    ```js
    const fs = require('fs');
    const readable = fs.createReadStream('input.txt');
    const writable = fs.createWriteStream('output.txt');
    readable.pipe(writable);
    ```

2. Chaining: Encadeia múltiplos streams, especialmente transform streams, para processar dados de forma sequencial.

    ```js
    const fs = require('fs');
    const zlib = require('zlib');
    const readable = fs.createReadStream('input.txt');
    const writable = fs.createWriteStream('input.txt.gz');
    const gzip = zlib.createGzip();
    readable.pipe(gzip).pipe(writable);
    ```

## Vantagens:

1. Eficiência de Memória:

    - Processa dados em pedaços pequenos, reduzindo a necessidade de carregar grandes volumes de dados na memória.

2. Latência Reduzida:

    - Permite começar a processar dados assim que eles são recebidos, em vez de esperar pela conclusão de toda a operação de I/O.

3. Facilidade de Manipulação de Grandes Arquivos:

    - Ideal para operações com arquivos grandes ou fluxo contínuo de dados (por exemplo, streams de vídeo ou áudio).

## Exemplos:

- Ler Arquivos Grandes:

    ```js
    const fs = require('fs');
    const readable = fs.createReadStream('largefile.txt');
    readable.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
    });
    ```

- Servidor HTTP:

    ```js
    const http = require('http');
    const server = http.createServer((req, res) => {
    const readable = fs.createReadStream('file.txt');
    readable.pipe(res);
    });
    server.listen(3000);
    ```

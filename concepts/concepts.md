## Considerações

    ```js
    (req, res) => {
        req.pipe() // possui o método pipe
        res.pipe() // possui o método pipe
    }
    ```

## STDIN / STDOUT

No node toda porta de entrada e saída é uma stream

STDIN --> permite digitar no terminal

STOUT --> mostra o resultado no terminal

## PIPE

pipe() --> Conecta uma Readable Stream a uma Writable Stream.

    - Permite que os dados fluam automaticamente da fonte (Readable) para o destino (Writable), gerenciando o backpressure (pressão de retorno) de forma eficiente.

    ```js
    readable.pipe(destination[, options])
    ```

unpipe() --> Desconecta uma Readable Stream de uma Writable Stream.

    ```js
    readable.unpipe([destination])
    ```

finished() --> Chama o callback quando o stream e qualquer stream aninhado terminar de ser lido ou escrito.

    ```js
    stream.finished(stream, callback)
    ```

pipeline() --> Conecta múltiplos streams em sequência, tratando automaticamente erros e finalizando todos os streams.

    ```js
    stream.pipeline(...streams, callback)
    ```

// Streams --> conexão

// stdin --> entrada de dados
// stdout --> saída de dados

// pipe --> encaminha para algum lugar

import { stdin, stdout } from 'node:process';

stdin.pipe(stdout)


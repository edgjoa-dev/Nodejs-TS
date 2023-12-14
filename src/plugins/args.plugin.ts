import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
  .options('b',{
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Número base de la tabla de multiplicar'
    }
  )
  .options('l',{
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Límite máximo de la tabla de multiplicar'
  })
  .options('s',{
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Mostrar la tabla de multiplicar'
  })
  .check((argv, options) => {
    if( argv.b < 1 ) throw 'Error el número base debe ser mayor a cero'
    if( argv.l < 1 ) throw 'Error el número limite debe ser mayor a cero'

    return true;
  })
  .parseSync()
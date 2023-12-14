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
  .parseSync()
import { yarg } from './config/plugins/args.plugin';
import fs from 'fs';


if( yarg.s){

  let outputMessage = '';
  const base = yarg.b;
  const headerMessage= `

  ========================================
          Tabla del ${base}
  ========================================\n
  `;

  for (let i = 1; i <= yarg.l; i++) {

      const result = i * base;
    outputMessage += `${i} x ${base} = ${result}\n`;
  }

  outputMessage = headerMessage + outputMessage;
  console.log(outputMessage);


  // Guarda la tabla en un archivo
  const filePath = `outputs/`;
  fs.mkdirSync(filePath, { recursive: true }); // Crea el directorio si no existe. recursive: true permite crear subdirectorios si no existen.

  fs.writeFile(`${filePath}/tabla-${base}.txt`, outputMessage, (err) => {
    if (err) {
      console.error('Error al guardar la tabla:', err);
    } else {
      console.log(`La tabla del ${ yarg.b } se ha guardado en: ${filePath}tabla-${base}.txt`);
    }
  });
} else {
  console.log('No se crea la tabla');
}


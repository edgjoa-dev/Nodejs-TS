import fs from 'fs';

let outputMessage = '';
const base = 35;
const headerMessage= `

========================================
        Tabla del ${base}
========================================\n
`;

for (let i = 1; i <= 10; i++) {

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
    console.log(`La tabla del ${ base } se ha guardado en: ${filePath}`);
  }
});

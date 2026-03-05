import * as esbuild from 'esbuild';
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

async function build() {
    if (fs.existsSync(distPath)) {
        fs.rmSync(distPath, { recursive: true, force: true });
        console.log('Папка dist очищена');
    }

    const result = await esbuild.build({
        entryPoints: ['./src/main.jsx'],
        outdir: 'dist',
        bundle: true,
        jsx: 'automatic',
        format: 'esm',
        sourcemap: true,
        minify: false,
        entryNames: '[name].[hash]',
        metafile: true,
        write: true
    })

    const outputs = result.metafile.outputs;
    let jsFileName = null;

    for (let outFile in outputs) {
        if (outFile.endsWith('.js') && outFile.includes('main')) {
            jsFileName = path.basename(outFile);
            break;
        }
    }

    if (!jsFileName) {
        console.error('Не удалось найти сгенерированный JS файл');
        process.exit(1);
    }
    
    console.log(`Собранный файл выглядит сейчас так: ${jsFileName}`);

    const htmlPath = path.join(__dirname, 'index.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    const scriptTagRegex = /<script[^>]*src=["']\.\/dist\/[^"']*main[^"']*["'][^>]*<>\/script>/;

    const newScriptTag = `<script type="module" src="./dist/${jsFileName}"></script>`;

    if (scriptTagRegex.test(htmlContent)) {
        htmlContent = htmlContent.replace(scriptTagRegex, newScriptTag);
    } else {
        htmlContent = htmlContent.replace('</body>', `${newScriptTag}\n</body>`); 
    }

    const distHtmlPath = path.join(__dirname, 'dist', 'index.html');

    const finalHtml = `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8" />
            <title>React Error Boundaries</title>
        </head>
        <body>
            <div id="root"></div>
            ${newScriptTag} 
        </body>
        </html>
    `;

    fs.writeFileSync(distHtmlPath, finalHtml);
    console.log(`Html был успешно обновлен и сохранен в : ${distHtmlPath}`);
}

build().catch(() => process.exit(1));
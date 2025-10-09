import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read languages.json
const languagesPath = path.join(__dirname, 'languages.json');
const languages = JSON.parse(fs.readFileSync(languagesPath, 'utf-8'));

// Rename files from locale codes to native names
for (const [locale, languageInfo] of Object.entries(languages)) {
  const oldFileName = `${locale}.json`;
  const newFileName = `${languageInfo.nativeName}.json`;
  
  if (fs.existsSync(oldFileName)) {
    fs.renameSync(oldFileName, newFileName);
    console.log(`Renamed ${oldFileName} -> ${newFileName}`);
  }
}

console.log('All files renamed to native language names!');

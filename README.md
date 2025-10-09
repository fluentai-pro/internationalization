# FluentAI Translations

Open source translations for the FluentAI browser extension and website.

## Structure

This repository contains simple JSON files for each supported language:

- `en.json` - English translations
- `fr.json` - French translations  
- `es.json` - Spanish translations
- `de.json` - German translations
- `zh_CN.json` - Chinese (Simplified) translations
- ... and many more

Each file contains key-value pairs where:
- **Key**: Translation identifier (hash-based)
- **Value**: Translated text

## Contributing

### Adding New Translations

1. Fork this repository
2. Edit the appropriate language file (e.g., `fr.json` for French)
3. Add or modify translations as key-value pairs
4. Submit a pull request

### Adding New Languages

1. Create a new JSON file with the locale code (e.g., `pt.json` for Portuguese)
2. Copy the structure from `en.json`
3. Translate all values to the target language
4. Add the language to `languages.json` with proper metadata
5. Submit a pull request

### Translation Guidelines

- Keep the same keys as the English version
- Maintain any placeholders in the format `$placeholder$`
- Ensure translations are natural and contextually appropriate
- Test your translations by building the extension locally

## Language Support

See `languages.json` for the complete list of supported languages and their metadata.

## Integration

This repository is automatically integrated into the FluentAI project:

- Translations are cloned during `bun install`
- Simple JSON files are transformed to Chrome extension format
- Changes are synced back to this repository by maintainers

## License

This project is licensed under the MIT License - see the LICENSE file for details.

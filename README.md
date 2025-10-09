# FluentAI Translations

Open source translations for the FluentAI browser extension and website.

## Structure

All translation files are organized in the `languages/` directory, with files named in their native language:

```
languages/
├── English.json           # English translations
├── Français.json         # French translations
├── Español.json          # Spanish translations
├── Deutsch.json          # German translations
├── 中文 (简体).json       # Chinese (Simplified)
├── 日本語.json            # Japanese
└── ... and 47 more languages
```

Each file contains key-value pairs where:
- **Key**: Translation identifier (hash-based)
- **Value**: Translated text in that language

## Contributing

### Adding New Translations

1. Fork this repository
2. Navigate to the `languages/` directory
3. Edit the appropriate language file (e.g., `Français.json` for French)
4. Add or modify translations as key-value pairs
5. Submit a pull request


### Translation Guidelines

- Keep the same keys as the English version
- Maintain any placeholders in the format `$placeholder$`
- Ensure translations are natural and contextually appropriate
- Only modify existing translations - do not add new language files
- Test your translations by building the extension locally

## Language Support

We currently support 53 languages! Check the `languages/` directory to see all available translations. Each file is named in its native language for easy identification.

## Integration

This repository is automatically integrated into the FluentAI project:

- Translations are cloned during `bun install`
- Simple JSON files are transformed to Chrome extension format
- Changes are synced back to this repository by maintainers

## License

This project is licensed under the MIT License - see the LICENSE file for details.

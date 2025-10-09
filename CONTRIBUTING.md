# Contributing to FluentAI Translations

Thank you for your interest in contributing to FluentAI translations! This guide will help you get started.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/internationalization.git
   cd internationalization
   ```

## Making Changes

### Editing Existing Translations

1. Open the language file you want to edit (e.g., `fr.json` for French)
2. Find the translation key you want to modify
3. Update the value with your improved translation
4. Save the file

### Adding New Languages

1. **Create a new JSON file** with the locale code (e.g., `pt.json` for Portuguese)
2. **Copy the structure** from `en.json` to get all the required keys
3. **Translate all values** to your target language
4. **Add language metadata** to `languages.json`:
   ```json
   {
     "pt": {
       "name": "Portuguese",
       "nativeName": "Português"
     }
   }
   ```

### Translation Best Practices

- **Keep the same keys** as the English version
- **Preserve placeholders** in the format `$placeholder$` (don't translate these)
- **Use natural language** that sounds native to speakers
- **Consider context** - some terms may have specific meanings in the app
- **Test your changes** by building the extension locally if possible

## Submitting Changes

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Improve French translations for settings page"
   ```

2. **Push to your fork**:
   ```bash
   git push origin main
   ```

3. **Create a Pull Request** on GitHub with:
   - Clear description of what you changed
   - Screenshots if relevant
   - Any notes about translation choices

## Review Process

- Maintainers will review your changes
- We may ask for clarifications or suggest improvements
- Once approved, your changes will be merged

## Getting Help

- **Issues**: Use GitHub Issues for questions or problems
- **Discussions**: Use GitHub Discussions for general questions
- **Email**: Contact the maintainers for urgent issues

## Code of Conduct

Please be respectful and constructive in all interactions. We welcome contributors from all backgrounds and skill levels.

## Thank You

Your contributions help make FluentAI accessible to users worldwide. Every translation improvement makes a difference!

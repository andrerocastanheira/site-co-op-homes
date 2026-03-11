# Execution Scripts

Deterministic Python scripts that handle API calls, data processing, and file operations.

## Conventions
- Each script is self-contained with a `main()` entry point
- Accept arguments via `argparse`
- Read secrets from `.env` using `python-dotenv`
- Output results to `.tmp/` or cloud services
- Log errors clearly; never silently swallow exceptions

## Running scripts
```bash
python execution/script_name.py --arg value
```

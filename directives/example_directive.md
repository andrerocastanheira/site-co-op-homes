# Directive: [Task Name]

## Objective
Describe what this directive accomplishes.

## Inputs
- `input_1`: Description of input
- `input_2`: Description of input

## Steps
1. Step one — describe what the agent should do
2. Step two — specify which script to call and with what arguments
   - Script: `execution/script_name.py`
   - Args: `--input {input_1} --output .tmp/output.json`
3. Step three — validate output

## Outputs
- Location: Google Sheet / `.tmp/result.json` / etc.
- Format: Description

## Edge Cases
- If X happens, do Y
- If API returns 429, retry after 60 seconds

## Notes
- Updated YYYY-MM-DD: describe what changed and why

# Task: Node.js Bug Fix

## Objective

Debug and fix bugs in a Node.js project without rewriting the entire codebase.

## Input

File: `agent_code_benchmark_inventory_bug.zip` (provided in artifacts/)

## Requirements

1. Unzip and read the project
2. Run `npm test` and observe failures
3. Locate the root causes of failures
4. Fix bugs with minimal changes
5. Re-run `npm test` to ensure all pass
6. Return:
   - Which files were modified
   - Which bugs were fixed
   - Test results
   - Any additional risks or notes

## Constraints

- Do NOT delete, skip, or weaken tests
- Do NOT hardcode test answers
- Do NOT rewrite the entire project
- Keep function names and exported APIs unchanged

## Success Criteria

- All tests pass
- Only necessary files are modified
- No test weakening or deletion

## Evaluation Focus

- Debugging skills
- Minimal code changes
- Test-driven verification
- Preservation of existing API contracts

## Difficulty: Medium
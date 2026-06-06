# Agent Product Benchmark - OpenHuman

> Multi-domain benchmark for evaluating AI agent capabilities in real-world software engineering tasks.

## Overview

This benchmark evaluates AI agents across five representative product development scenarios:

| # | Task | Domain | Key Skills Tested |
|---|------|--------|-------------------|
| 1 | GitHub Repo Creation | DevOps | API usage, file creation, validation |
| 2 | CSV File Processing | Data Engineering | Data parsing, validation, transformation |
| 3 | Node.js Bug Fix | Software Engineering | Debugging, code repair, testing |
| 4 | SaaS Refund Workflow | Backend Business Logic | Workflow orchestration, idempotency, rollback |
| 5 | SaaS Billing Downgrade | Full-Stack Business Logic | Multi-step transactions, rollback, credit notes |

## Evaluation Criteria

Scoring is based on:
- **Correctness** — Does the output match the expected result?
- **Autonomy** — How many manual interventions were required?
- **Tool Utilization** — Are the right tools used in the right order?
- **Stability** — Is the process repeatable and error-free?

See [rubric/scoring.md](rubric/scoring.md) for the full scoring rubric.

## Quick Start

1. Clone this repository
2. Review task definitions in `tasks/`
3. Run your agent against each task
4. Record results in `results/summary.md`

## Task List

- [GitHub Repo Creation](tasks/github_repo_creation.md)
- [CSV File Processing](tasks/csv_file_processing.md)
- [Node.js Bug Fix](tasks/node_bug_fix.md)
- [SaaS Refund Workflow](tasks/saas_refund_workflow.md)
- [SaaS Billing Downgrade](tasks/saas_billing_downgrade.md)

## Results

See [results/summary.md](results/summary.md) for agent performance tracking.

## License

MIT
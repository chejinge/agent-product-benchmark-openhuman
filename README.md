# Agent Product Benchmark

A comprehensive benchmark suite for evaluating AI agent capabilities on real-world product management and software engineering tasks.

## Overview

This benchmark evaluates AI agents across multiple dimensions:
- **GitHub Repository Management**: Creating and managing repositories
- **Data Processing**: CSV file analysis and transformation
- **Bug Fixing**: Identifying and fixing code issues
- **SaaS Workflows**: Handling billing, refunds, and customer operations

## Directory Structure

```
agent-product-benchmark-openhuman/
├── README.md                 # This file
├── rubric/
│   └── scoring.md           # Evaluation criteria and scoring system
├── tasks/
│   ├── github_repo_creation.md
│   ├── csv_file_processing.md
│   ├── node_bug_fix.md
│   ├── saas_refund_workflow.md
│   └── saas_billing_downgrade.md
├── results/
│   └── summary.md           # Benchmark results summary
└── artifacts/
    ├── sales_data.csv       # Sample sales data for processing
    └── node_project.zip     # Sample Node.js project with bugs
```

## Tasks

### 1. GitHub Repository Creation
Evaluate agent's ability to create and configure GitHub repositories programmatically.

### 2. CSV File Processing
Test data manipulation skills including filtering, aggregation, and transformation.

### 3. Node.js Bug Fix
Assess debugging capabilities and code quality improvements.

### 4. SaaS Refund Workflow
Evaluate understanding of business logic and customer service operations.

### 5. SaaS Billing Downgrade
Test complex state management and billing system interactions.

## Scoring

See [rubric/scoring.md](rubric/scoring.md) for detailed evaluation criteria.

## Usage

1. Clone this repository
2. Review each task in the `tasks/` directory
3. Execute tasks using your AI agent
4. Record results in `results/summary.md`
5. Calculate final score using the scoring rubric

## License

MIT License

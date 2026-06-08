# Benchmark Scoring System

## Overview

This document defines the evaluation criteria and scoring methodology for the Agent Product Benchmark.

## Scoring Dimensions

Each task is evaluated across the following dimensions:

### 1. Correctness (40% weight)
- **10 points**: Complete and correct solution
- **7 points**: Mostly correct with minor issues
- **5 points**: Partially correct, missing key elements
- **2 points**: Significant errors or incomplete
- **0 points**: No valid solution

### 2. Efficiency (20% weight)
- **10 points**: Optimal solution, minimal steps
- **7 points**: Efficient with minor redundancy
- **5 points**: Functional but inefficient
- **2 points**: Highly inefficient approach
- **0 points**: No solution or excessive inefficiency

### 3. Code Quality (20% weight)
- **10 points**: Clean, well-documented, follows best practices
- **7 points**: Good quality with minor issues
- **5 points**: Functional but lacks polish
- **2 points**: Poor quality, hard to maintain
- **0 points**: No code or unusable

### 4. Error Handling (10% weight)
- **10 points**: Comprehensive error handling
- **7 points**: Handles most edge cases
- **5 points**: Basic error handling
- **2 points**: Minimal error handling
- **0 points**: No error handling

### 5. Documentation (10% weight)
- **10 points**: Excellent documentation and comments
- **7 points**: Good documentation
- **5 points**: Basic documentation
- **2 points**: Minimal documentation
- **0 points**: No documentation

## Scoring Formula

```
Task Score = (Correctness × 0.40) + (Efficiency × 0.20) + (Code Quality × 0.20) + (Error Handling × 0.10) + (Documentation × 0.10)
```

## Final Benchmark Score

```
Final Score = (Σ Task Scores) / Number of Tasks
```

## Grade Scale

| Score Range | Grade | Description |
|-------------|-------|-------------|
| 9.0 - 10.0 | A+ | Exceptional performance |
| 8.0 - 8.9 | A | Excellent performance |
| 7.0 - 7.9 | B | Good performance |
| 6.0 - 6.9 | C | Satisfactory performance |
| 5.0 - 5.9 | D | Needs improvement |
| 0.0 - 4.9 | F | Unsatisfactory |

## Task-Specific Criteria

### GitHub Repository Creation
- Repository created with correct settings
- Proper branch protection rules
- README and documentation added
- Labels and issue templates configured

### CSV File Processing
- Data parsed correctly
- Transformations applied accurately
- Output format correct
- Edge cases handled

### Node.js Bug Fix
- Bug correctly identified
- Fix resolves the issue
- No new bugs introduced
- Tests pass after fix

### SaaS Refund Workflow
- Workflow logic correct
- Customer state updated properly
- Billing system integration correct
- Audit trail maintained

### SaaS Billing Downgrade
- Plan change processed correctly
- Prorated charges calculated
- Feature access updated
- Customer notified appropriately

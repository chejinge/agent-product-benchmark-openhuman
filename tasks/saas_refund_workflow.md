# Task: SaaS Refund Workflow

## Objective

Implement a complete refund workflow with idempotency, retry logic, and audit trail.

## Input

File: `saas_refund_complex_benchmark.zip` (provided in artifacts/)
Policy: `docs/refund_policy.md`

## Requirements

1. Read policy, order data, and source code
2. Run `npm test` and observe failures
3. Fix the complete refund flow:
   - Query order
   - Check refund eligibility
   - Call mock refund API only for eligible orders
   - On API 500, retry exactly once
   - On success: send email, write audit_log, mark order as refunded=true
   - Ensure idempotency: no duplicate emails/logs on repeated execution
4. Re-run `npm test` to ensure all pass
5. Return:
   - Modified files
   - Fixed bugs
   - Test results
   - Successful/rejected orders
   - API call log
   - Email outbox
   - Audit log

## Constraints

- Do NOT modify tests/
- Do NOT hardcode test answers
- Must handle 500 with exactly one retry

## Success Criteria

- All tests pass
- Idempotency is guaranteed
- 500 errors trigger retry
- Audit log and emails are generated for successful refunds

## Evaluation Focus

- Workflow orchestration
- Idempotency implementation
- Retry logic
- Audit trail completeness

## Difficulty: Hard
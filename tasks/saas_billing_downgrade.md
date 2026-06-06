# Task: SaaS Billing Downgrade

## Objective

Implement a downgrade workflow with rollback, credit notes, and multi-channel notifications.

## Input

File: `saas_billing_downgrade_benchmark.zip` (provided in artifacts/)
Policy: `docs/billing_policy.md`

## Requirements

1. Read policy, customer/subscription/invoice data, and source code
2. Run `npm test` and observe failures
3. Fix the complete downgrade flow:
   - Query customer and current subscription
   - Check for unpaid invoices
   - Check if already downgraded
   - Calculate prorated refund
   - Call mockBillingApi.refund
   - Call mockSubscriptionApi.downgrade
   - If downgrade fails, rollback the refund
   - On success: generate credit_note.json, send customer_email + finance_email, write audit_log
   - Ensure idempotency
4. Re-run `npm test` to ensure all pass
5. Return:
   - Modified files
   - Success/failure flow details
   - API call records
   - Generated files
   - Test results

## Constraints

- Do NOT modify tests/
- Do NOT hardcode test answers
- Must implement rollback on downgrade failure

## Success Criteria

- All tests pass
- Rollback is triggered on downgrade failure
- Credit notes, emails, and audit logs are generated correctly

## Evaluation Focus

- Transactional integrity
- Rollback mechanism
- Multi-step orchestration
- Idempotency under partial failure

## Difficulty: Very Hard
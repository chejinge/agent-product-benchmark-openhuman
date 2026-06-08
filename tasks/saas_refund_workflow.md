# Task: SaaS Refund Workflow

## Objective

Implement a complete refund processing workflow for a SaaS subscription platform.

## Scenario

A customer requests a refund for their subscription. The workflow must handle:
- Refund eligibility check
- Payment processor integration
- Subscription status update
- Customer notification
- Audit trail creation

## Requirements

### 1. Refund Eligibility Check
Implement logic to check:
- Is the subscription active?
- Is the refund within the refund window (14 days)?
- Has the customer already received a refund?
- Are there any pending charges?

### 2. Refund Processing
When eligible:
- Calculate refund amount (prorated if partial month)
- Process refund via payment API
- Handle partial vs full refund scenarios
- Update subscription status

### 3. Customer Communication
Send appropriate notifications:
- Refund request received
- Refund processed
- Refund denied (with reason)

### 4. Audit Trail
Log all actions:
- Who initiated the refund
- Timestamp of each step
- Amount refunded
- Reason for refund
- Customer response

## API Endpoints to Implement

```
POST /api/refunds/request
  Body: { customer_id, subscription_id, reason, amount? }
  Returns: { refund_id, status, estimated_processing_time }

GET /api/refunds/:id/status
  Returns: { status, amount, created_at, updated_at, steps }

POST /api/refunds/:id/approve
  Body: { admin_id, notes }
  Returns: { status, processed_at }

POST /api/refunds/:id/deny
  Body: { admin_id, reason }
  Returns: { status, denial_reason }
```

## Evaluation Criteria

| Criterion | Points | Description |
|-----------|--------|-------------|
| Eligibility Check | 2 | All conditions checked correctly |
| Refund Calculation | 2 | Proration calculated accurately |
| API Implementation | 2 | All endpoints working |
| Notifications | 2 | All notifications sent |
| Audit Trail | 2 | Complete audit log |

**Total: 10 points**

## Success Indicators

- [ ] Eligibility logic is comprehensive
- [ ] Proration calculations are correct
- [ ] All API endpoints respond correctly
- [ ] Notifications are sent at appropriate times
- [ ] Audit trail is complete and queryable

## Time Limit

**Recommended: 20 minutes**

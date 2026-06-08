# Task: SaaS Billing Downgrade

## Objective

Implement a subscription downgrade workflow that handles plan changes, prorated billing, and feature access updates.

## Scenario

A customer wants to downgrade from their current plan to a lower-tier plan. The system must:
- Calculate prorated credits
- Process the plan change
- Update feature access
- Handle data retention for premium features
- Notify the customer

## Plan Structure

```
Plans:
- Enterprise ($99/month): Unlimited users, 100GB storage, Priority support, API access
- Professional ($49/month): 10 users, 50GB storage, Email support, API access
- Starter ($19/month): 3 users, 10GB storage, Community support, No API
- Free ($0/month): 1 user, 1GB storage, Community support, No API
```

## Requirements

### 1. Downgrade Validation
Check:
- Is the target plan lower than current?
- Will the user lose access to features they're using?
- Are there more users than the new plan allows?
- Is there more data than new plan storage limit?

### 2. Prorated Credit Calculation
Calculate:
- Days remaining in billing cycle
- Credit for unused portion of current plan
- Cost of new plan for remaining days
- Net credit or charge

### 3. Feature Access Management
Handle:
- Disable premium features immediately or at cycle end?
- Archive data that exceeds new limits
- Notify users who will lose access
- Provide grace period option

### 4. Data Migration
For downgrades that reduce limits:
- Archive excess data
- Provide export option
- Set up data retention policy
- Handle API key revocation

### 5. Customer Communication
Send:
- Downgrade confirmation
- Effective date
- Feature changes summary
- Data retention information
- Refund/credit amount

## API Endpoints

```
POST /api/subscriptions/downgrade
  Body: { customer_id, target_plan, effective_immediately? }
  Returns: { downgrade_id, status, credit_amount, effective_date }

GET /api/subscriptions/downgrade/preview
  Query: { customer_id, target_plan }
  Returns: { current_plan, target_plan, credit, features_lost, warnings }

POST /api/subscriptions/downgrade/:id/confirm
  Returns: { status, effective_date, credit_applied }
```

## Evaluation Criteria

| Criterion | Points | Description |
|-----------|--------|-------------|
| Validation Logic | 2 | All checks implemented |
| Proration Math | 2 | Calculations accurate |
| Feature Management | 2 | Access updated correctly |
| Data Handling | 2 | Data migrated/archived |
| Communication | 2 | All notifications sent |

**Total: 10 points**

## Success Indicators

- [ ] Preview shows accurate information
- [ ] Proration calculations are correct
- [ ] Feature access updates at right time
- [ ] Data is handled appropriately
- [ ] Customer receives clear communication

## Time Limit

**Recommended: 20 minutes**

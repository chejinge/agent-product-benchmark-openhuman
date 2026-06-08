# Task: Node.js Bug Fix

## Objective

Identify and fix bugs in a provided Node.js application.

## Input

Location: `/artifacts/node_project.zip`

The project contains a simple Express.js API with several intentional bugs.

## Known Issues to Find and Fix

### Bug 1: Route Handler Error
- Location: `routes/users.js`
- Issue: Incorrect async/await handling causing unhandled promise rejections
- Fix: Properly handle async operations

### Bug 2: Memory Leak
- Location: `middleware/cache.js`
- Issue: Cache growing unbounded
- Fix: Implement cache size limit or TTL

### Bug 3: SQL Injection Vulnerability
- Location: `db/queries.js`
- Issue: User input directly concatenated into SQL
- Fix: Use parameterized queries

### Bug 4: Error Handling
- Location: `app.js`
- Issue: Missing error handling middleware
- Fix: Add proper error handling middleware

### Bug 5: Race Condition
- Location: `services/order.js`
- Issue: Concurrent order processing can cause data corruption
- Fix: Implement proper locking or queue

## Requirements

1. Extract and analyze the project
2. Identify all bugs
3. Fix each bug with proper implementation
4. Ensure all tests pass
5. Add comments explaining the fixes

## Evaluation Criteria

| Criterion | Points | Description |
|-----------|--------|-------------|
| Bug 1 Fixed | 2 | Async/await handled correctly |
| Bug 2 Fixed | 2 | Memory leak resolved |
| Bug 3 Fixed | 2 | SQL injection prevented |
| Bug 4 Fixed | 2 | Error handling added |
| Bug 5 Fixed | 2 | Race condition resolved |

**Total: 10 points**

## Success Indicators

- [ ] All tests pass
- [ ] No console errors
- [ ] Security vulnerabilities addressed
- [ ] Code is well-commented

## Time Limit

**Recommended: 15 minutes**

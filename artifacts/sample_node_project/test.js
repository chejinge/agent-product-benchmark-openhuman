import { describe, it } from 'node:test';
import assert from 'node:assert';
import { calculateLineTotal, validateOrderItem, buildOrderSummary } from './src/inventory.js';

describe('Inventory Functions', () => {
    it('calculateLineTotal with 10% discount', () => {
        const result = calculateLineTotal(2, 100, 0.1);
        assert.strictEqual(result, 180);
    });

    it('validateOrderItem rejects invalid inputs', () => {
        assert.strictEqual(validateOrderItem(0, 100, 0), false);
        assert.strictEqual(validateOrderItem(1, 0, 0), false);
        assert.strictEqual(validateOrderItem(1, 100, 1), false);
    });

    it('buildOrderSummary accumulates same SKU', () => {
        const items = [
            { sku: 'WIDGET-001', quantity: 2, unitPrice: 50, discountRate: 0 },
            { sku: 'WIDGET-001', quantity: 1, unitPrice: 50, discountRate: 0 },
        ];
        const result = buildOrderSummary(items);
        assert.strictEqual(result.productTotals['WIDGET-001'], 150);
        assert.strictEqual(result.grandTotal, 150);
    });
});
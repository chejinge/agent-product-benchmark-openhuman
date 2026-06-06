// BUG: discount calculation is wrong (adds instead of subtracts)
// BUG: allows zero quantity
// BUG: allows zero price
// BUG: allows 100% discount

export function calculateLineTotal(quantity, unitPrice, discountRate = 0) {
    const subtotal = quantity * unitPrice;
    const discount = subtotal * (1 + discountRate); // BUG: should be 1 - discountRate
    return subtotal - discount;
}

export function validateOrderItem(quantity, unitPrice, discountRate) {
    if (quantity < 0) return false; // BUG: allows zero
    if (unitPrice < 0) return false; // BUG: allows zero
    if (discountRate < 0 || discountRate > 1) return false; // BUG: allows 1
    return true;
}

export function buildOrderSummary(items) {
    const productTotals = {};
    let grandTotal = 0;
    
    for (const item of items) {
        const lineTotal = calculateLineTotal(item.quantity, item.unitPrice, item.discountRate);
        productTotals[item.sku] = lineTotal; // BUG: overwrites instead of accumulating
        grandTotal += lineTotal;
    }
    
    return { productTotals, grandTotal };
}
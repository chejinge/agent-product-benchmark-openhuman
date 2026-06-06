# Task: CSV File Processing

## Objective

Process a CSV file, perform data quality checks, calculations, and generate output files.

## Input

File: `sales_data_agent_benchmark.csv` (provided in artifacts/)

## Requirements

1. Read the CSV and check data quality
2. Calculate total sales per product: `total = quantity * unit_price`
3. Add a new column `total`, save as `sales_data_updated.csv`
4. Filter orders with `quantity >= 5`, save as `large_orders.csv`
5. Handle anomalous rows:
   - `quantity` missing, non-numeric, or <= 0 → anomalous
   - `unit_price` missing, non-numeric, or <= 0 → anomalous
   - Do NOT include anomalous rows in sales statistics
   - Save anomalous rows to `invalid_rows.csv`
6. Return:
   - Total sales per product
   - Number of valid orders
   - Number of anomalous rows
   - First 5 rows of each output file
   - List of generated files

## Success Criteria

- All calculations are correct
- Anomalous rows are properly identified and separated
- All output files are generated
- Statistics are accurate

## Evaluation Focus

- Data parsing and validation
- Arithmetic accuracy
- File I/O operations
- Edge case handling

## Difficulty: Medium
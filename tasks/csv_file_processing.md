# Task: CSV File Processing

## Objective

Process and analyze a CSV file containing sales data to generate insights and transformed outputs.

## Input File

Location: `/artifacts/sales_data.csv`

The CSV contains the following columns:
- `order_id`: Unique order identifier
- `customer_id`: Customer identifier
- `product_name`: Name of product purchased
- `category`: Product category
- `quantity`: Number of items ordered
- `unit_price`: Price per unit
- `order_date`: Date of order (YYYY-MM-DD)
- `region`: Sales region

## Requirements

### 1. Data Validation
- Check for missing values
- Validate data types
- Report any data quality issues

### 2. Analysis Tasks

#### A. Sales Summary by Region
Generate a summary showing:
- Total sales per region
- Average order value per region
- Number of orders per region

#### B. Top Products
Identify:
- Top 5 products by revenue
- Top 5 products by quantity sold

#### C. Monthly Trends
Calculate:
- Monthly sales totals
- Month-over-month growth rates

### 3. Output Files

Create the following output files:
- `sales_by_region.csv`: Regional summary
- `top_products.csv`: Top products analysis
- `monthly_trends.csv`: Monthly trend data
- `data_quality_report.txt`: Data quality findings

## Evaluation Criteria

| Criterion | Points | Description |
|-----------|--------|-------------|
| Data Validation | 2 | Proper validation with report |
| Regional Analysis | 2 | Correct calculations |
| Top Products | 2 | Accurate identification |
| Monthly Trends | 2 | Correct trend analysis |
| Output Files | 2 | All files created correctly |

**Total: 10 points**

## Success Indicators

- [ ] All output files are created
- [ ] Calculations are accurate
- [ ] Data quality issues are documented
- [ ] CSV format is valid

## Time Limit

**Recommended: 10 minutes**

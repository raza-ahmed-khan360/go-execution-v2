import csv
import os

dir_path = r'C:\Users\Raheel\Downloads\https___goexecution.com_-Performance-on-Search-2026-09-02'

def print_top(filename, sort_col, count=10):
    filepath = os.path.join(dir_path, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        
        # Sort by impressions (descending)
        rows.sort(key=lambda x: float(x.get('Impressions', 0)), reverse=True)
        
        print(f"\n--- Top 10 by Impressions ({filename}) ---")
        for i, row in enumerate(rows[:count]):
            first_col_key = list(row.keys())[0]
            val = row[first_col_key]
            clicks = row.get('Clicks', 0)
            impr = row.get('Impressions', 0)
            pos = row.get('Position', 0)
            print(f"{i+1}. {val} - Clicks: {clicks}, Impr: {impr}, Pos: {pos}")

print_top('Queries.csv', 'Impressions', 15)
print_top('Pages.csv', 'Impressions', 10)

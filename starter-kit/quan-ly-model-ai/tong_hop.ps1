# Script: tong_hop.ps1
# Tac gia: Vũ Nam Tùng
# Ngay tao: 10/11/2026
Write-Host "Dang tao bao cao..."
"=== BAO CAO VAN HANH MODEL AI ===" > logs/tong_hop.txt
Get-Content logs/inference.log | Select-String "WARNING" >> logs/tong_hop.txt
Get-Content logs/inference.log | Select-String "ERROR" | Measure-Object >> logs/tong_hop.txt
Write-Host "Hoan thanh!"
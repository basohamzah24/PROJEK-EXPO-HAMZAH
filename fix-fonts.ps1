# Script untuk mengganti semua font menjadi fontBas
$files = @(
    "d:\SEMESTER 6\APLIKASI KOMPUTASI BERGERAK\PROJEK-EXPO-HAMZAH\app\(tabs)\profile.tsx",
    "d:\SEMESTER 6\APLIKASI KOMPUTASI BERGERAK\PROJEK-EXPO-HAMZAH\app\(tabs)\index.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content -replace "fontFamily: 'Font\d+-\w+',", "fontFamily: 'fontBas',"
        $content = $content -replace "fontFamily: 'SpaceMono-Regular',", "fontFamily: 'fontBas',"
        Set-Content $file $content -NoNewline
        Write-Host "Updated: $file"
    }
}

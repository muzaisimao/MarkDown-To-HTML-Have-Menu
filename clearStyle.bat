@echo off

Echo 按任意键清除目录样式... &pause>NUL

for %%1 in (*.html)do (findstr /iv  "menu.js" "%%1">#
move "#" "%%1">nul 2>nul
)

Echo 目录样式清除成功... &pause>NUL
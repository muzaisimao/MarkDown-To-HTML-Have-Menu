@echo off

Echo ����������Ŀ¼��ʽ... &pause>NUL

for %%1 in (*.html)do (findstr /iv  "menu.js" "%%1">#
move "#" "%%1">nul 2>nul
)

Echo Ŀ¼��ʽ����ɹ�... &pause>NUL
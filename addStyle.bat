@echo off

Echo ���������Ŀ¼��ʽ... &pause>NUL

for %%i in (*.html) do (
echo. >> %%i
echo ^<script src="menu/menu.js"^>^</script^> >> %%i
)

Echo Ŀ¼��ʽ��ӳɹ�... &pause>NUL
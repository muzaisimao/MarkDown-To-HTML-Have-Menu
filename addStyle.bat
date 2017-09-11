@echo off

Echo 按任意添加目录样式... &pause>NUL

for %%i in (*.html) do (
echo. >> %%i
echo ^<script src="menu/menu.js"^>^</script^> >> %%i
)

Echo 目录样式添加成功... &pause>NUL
# python


## 虚拟环境

- 创建虚拟环境目录

  ```bash
  mkdir [virtaulenv] // virtaulenv 自定义文件名
  python -m venv [virtualenv] // virtaulenv 虚拟环境名
  ```
  
- 启动虚拟环境

  ```bash
  # linux
  source venv/bin/activate
  # windows
  ./venv/Script/activate.bat
  ```

- 退出虚拟环境

  ```bash
  deactivate
  ```

- 虚拟环境更新升级

```bash
python -m venv myvenv --upgrade
```

## requirements

- 生成```requirements.txt```文件

```bash
pip freeze > requirements.txt # 在根目录下生成
pip freeze > C:/requirements.txt # 在自定义目录下生成
```

- 安装```requirements.txt```中的库

```bash
pip install -r requirements.txt
```

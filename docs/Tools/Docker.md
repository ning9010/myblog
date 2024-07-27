# Docker



Docker 官网 https://www.docker.com

Docker Hub 官网 https://hub.docker.com/



部署Docker必须在Linux环境上。



#### Docker组成

镜像（image）

容器（container）

仓库（repository）



#### 安装步骤

官网教程 https://docs.docker.com/engine/install/





##### 1. 安装环境

```shell
sudo yum -y install gcc
sudo yum -y install gcc-c++
```

##### 2. 更新yum软件包索引

```shell
sodu yum makecache fast
```

##### 3. 安装stable镜像仓库

```shell
sudo yum install -y yum-utils

// 设置stable镜像仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

// 阿里云镜像
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

##### 3.安装Docker ce

```shell
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

##### 4. 启动Docker

```shell
sudo systemctl start docker

// 检查Docker是否启动
ps -ef|gre docker

// 检查Docker版本
docker version
```

##### 5. 运行Docker

```shell
sudo docker run hello-world
```


##### 6. 阿里云镜像加速器

```sh
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://jpgslv5p.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

##### 7. 卸载
```shell
sudo systemctl stop docker

sudo yum remove docker-ce docker-ce-cli containerd.io

rm -rf /var/lib/docker
rm -rf /var/lib/containerd
```

##### 官网卸载

```shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```



#### 常用命令

##### 帮助启动命令

```shell
// 启动docker
systemctl start docker

// 停止docker
systemctl stop docker

// 重启docker
systemctl restart docker

// 查看docker状态
systemctl status docker

// 开机启动
systemctl enable docker

// 查看docker概要信息
docker info

// 查看docker总体帮助文档
docker --help

// 查看docker命令帮助文档
docker 具体命令 --help
```

##### 镜像命令

```shell
// 列出本地所有的镜像
docker images
选项 -a 列出所有
	-q 只显示镜像ID
	
// 搜索远程仓库库的镜像
docker search 镜像名
docker search --limit 5 镜像名

// 下载镜像
docker pull 镜像名:版本号

// 查看占用空间
docker system df

// 删除镜像 f为强制删除
docker rmi -f 镜像名/ID 镜像名2/ID2

// 删除全部
docker rmi -f $(docker images -qa)

```

##### 容器命令
```bash
// 新建启动容器
docker run [options] 镜像 [command][ARG...]
// options说明
--name="容器新名字"
-d 后台运行容器并返回容器ID
-i 以交互模式运行容器 -t 为容器分配一个伪输入终端
-it 一起使用
-P 随机端口映射
-p 指定端口映射 -p 本机端口:docker端口

// 列出所有正在运行的容器
docker ps [options]
// options说明
-a 列出当前所有正在运行的容器+历史上运行过的
-l 显示最近创建的容器
-n 显示最近n个创建的容器
-q 静默模式，只显示容器编号

// 退出容器 进入交互模式后退出
exit 容器会停止
Ctrl + p + q 容器不会停止

// 启动容器
docker start 容器名/ID

// 重启启动容器
docker restart 容器名/ID

// 停止容器
docker stop 容器名/ID

// 强制停止容器 
docker kill 容器名/ID

// 删除已停止的容器 f为强制删除
docker rm 容器名/ID

// docker 后台运行，必须有一个前台进程，否则自动退出
docker run -d 容器名/ID

// 查看容器日志
docker logs 容器名/ID

// 查看容器内运行的进程
docker top 容器名/ID

// 查看容器内部细节
docker inspect 容器名/ID

// 进入正在运行的容器并以命令行交互
docker exec -it 容器ID 推荐 在容器中打开一个新的终端，用exit退出不会导致容器停止
docker attach 容器ID  直接进入容器启动命令的终端，用exit退出会导致容器停止

// 从容器内拷贝文件到主机
docker cp 容器ID：容器内路径 目的主机路径

// 导入导出容器
docker export 容器ID > 文件名.tar 导出容器的内容留作一个tar归档文件
cat 文件名.tar | docker import -镜像用户/镜像名：镜像版本号 从tar包中的内容创建一个新的文件系统再导入为镜像
```



#### Docker镜像

```bash

docker commit -m="提交的描述信息" -a="作者" 容器ID 要创建的目标镜像名：[标签名]

docker push 容器ID
```

#### Docker容器卷

作用：数据持久化

1. 在容器之间共享数据共享或重用，双向绑定
2. 实时生效
3. 数据卷中的更改不会包含在镜像的更新中
4. 数据卷的生命周期一直持续到没有容器使用它为止
5. 默认可读写，只读要在 容器内目录后加：ro

```bash
// -privileged=true 权限
// -v可以有多个

docker run -it --privileged=true -v /宿主机绝对路径目录：/容器内目录 镜像名

// 继承父镜像名的数据卷规则
docker run -it --privileged=true --volumes-from 父镜像名 镜像名
```

#### DockerFile

是用来构建Docker镜像的文本文件。是由一条条构建镜像所需的指令和参数构成的脚本。

```dockerfile
FROM  基础镜像

```




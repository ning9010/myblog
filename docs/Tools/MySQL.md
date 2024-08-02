# MySQL

## 通用语法

1. SQL可以单行也可以多行，以分号结尾。
2. SQL语句可以使用空格/缩进增强语句可读性。
3. MySQL数据库的SQL语句不区分大小写，关键字建议使用大写。
4. 注释：
   - 单行注释：-- 注释内容 或 # 注释内容
   - 多行注释：/* 注释内容 */

## SQL语句分类

- DDL 数据定义语言，用于定义数据库对象（数据库，表，字段）

- DML 数据操作语言，用于数据库表中的数据增删改

- DQL  数据查询语言，用于查询数据库中表的记录
- DCL  数据控制语言，用于创建数据库用户、控制数据库的访问权限



### DDL

#### DDL-数据库操作

- 查询

​查询所有数据库		

```sql
SHOW DATABASES;
```

​查询当前数据库

```sql
SHOW DATABASE();
```

- 创建

```sql
/*
CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];
*/

CREATE DATABASE IF NOT EXISTS mydatabase DEFAULT CHARSET utf8mb4;
```

- 删除

```sql
DROP DATABASE IF NOT EXISTS 数据库名;
```

- 使用

```sql
USE 数据库名;
```

#### DDL-表结构

- 查询当前数据库所有表

```sql
SHOW TABLES;
```

- 查询表结构

```sql
DESC 表名;
```

- 查询指定表的建表语句
```sql
SHOW CREATE TABLE 表名;
```

- 表创建

```sql
create table 表名(
	字段1 数据类型[COMMENT 注释],
	字段1 数据类型[COMMENT 注释]
)[COMMENT 注释];
```

#### DDL-表数据类型

##### 数据类型

- 数值类型

| 类型               | 大小（字节） | 有符号范围                                                                                                          | 无符号范围                     | 描述                 |
| ------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------------ | -------------------- |
| TINYINT            | 1            | -128 到 127                                                                                                         | 0 到 255                       | 小整数值             |
| **SMALLINT**       | 2            | -32,768 到 32,767                                                                                                   | 0 到 65,535                    | 大整数值             |
| **MEDIUMINT**      | 3            | -8,388,608 到 8,388,607                                                                                             | 0 到 16,777,215                | 大整数值             |
| **INT 或 INTEGER** | 4            | -2,147,483,648 到 2,147,483,647                                                                                     | 0 到 4,294,967,295             | 大整数值             |
| **BIGINT**         | 8            | （-2^63，2^63-1）                                                                                                   | （0，2^64-1）                  | 极大整数值           |
| **FLOAT**          | 4            | 大约 -3.402823466E+38 到 -1.175494351E-38，0，和 1.175494351E-38 到 3.402823466E+38                                 | 同左                           | 单精度浮点           |
| **DOUBLE**         | 8            | 大约 -1.7976931348623157E+308 到 -4.9406564584124654E-324，0，和 4.9406564584124654E-324 到 1.7976931348623157E+308 | 同左                           | 双精度浮点           |
| **DECIMAL(M, D)**  |              | 依赖于M（精度）和D（标度）的值                                                                                      | 依赖于M（精度）和D（标度）的值 | 小数值（精确定点数） |

​	1. double(4,1) 4代表整体长度，1代表小数位数

- 字符串类型

| 类型             | 大小                            | 描述                                                                 |
| ---------------- | ------------------------------- | -------------------------------------------------------------------- |
| **CHAR(M)**      | 最大长度为255个字符             | 固定长度的字符串。适用于存储长度几乎相同的字符串，可以提高存储效率。 |
| **VARCHAR(M)**   | 最大长度为65,535个字符          | 可变长度的字符串。适用于存储长度变化较大的字符串，可以节省空间。     |
| **TINYTEXT**     | 最大长度为255个字符             | 非常小的文本数据。以二进制字符串的形式存储，适用于存储短文本。       |
| **TEXT**         | 最大长度为65,535个字符          | 适用于存储较长文本。                                                 |
| **MEDIUMTEXT**   | 最大长度为16,777,215个字符。    | 适用于存储更长的文本。                                               |
| **LONGTEXT**     | 最大长度为4,294,967,295个字符。 | 适用于存储非常大的文本，如文章或书籍内容。                           |
| **BINARY(M)**    | 固定长度为M个字节。             | 与CHAR类似，但存储的是二进制数据而非文本。                           |
| **VARBINARY(M)** | 可变长度，最大长度为M个字节。   | 与VARCHAR类似，但存储的是二进制数据而非文本。                        |
| **BLOB**         | 最大长度为65,535个字符          | 二进制                                                               |

常用**CHAR(M)**和**VARCHAR(M)**

- 日期时间类型

| 类型       | 大小 | 范围                                       | 格式                |
| ---------- | ---- | ------------------------------------------ | ------------------- |
| DATE       | 3    | 1000-01-01 至 999-12-31                    | YYYY-MM-DD          |
| TIME       | 3    | -838:59:59 至 838:59:59                    | HH:MM:SS            |
| YEAR       | 1    | 1901 至 2155                               | YYYY                |
| DATETIME   | 8    | 1000-01-01 00:00:00 至 999-12-31 23:59:59  | YYYY-MM-DD HH:MM:SS |
| TIMESTEAMP | 4    | 1970-01-01 00:00:01 至 2038-01-19 03:14:07 | YYYY-MM-DD HH:MM:SS |

#### DDL-表修改
##### 添加字段
```sql
ALTER TABLE 表名 ADD COLUMN 字段名 数据类型;
```
例如：
```sql
ALTER TABLE mytable ADD COLUMN email VARCHAR(50);
```

##### 修改数据类型
```sql
ALTER TABLE 表名 MODIFY COLUMN 字段名 新数据类型;
```
例如：
```sql
ALTER TABLE mytable MODIFY COLUMN email VARCHAR(100);
```

##### 修改字段名和字段类型
```sql
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 新数据类型;
```
例如：
```sql
ALTER TABLE mytable CHANGE old_column new_column VARCHAR(100);
```
##### 删除字段
```sql
ALTER TABLE 表名 DROP COLUMN 字段名;
```
例如：
```sql
ALTER TABLE mytable DROP COLUMN email;
```
##### 修改表名
```sql
ALTER TABLE 旧表名 RENAME TO 新表名;
```
例如：
```sql
ALTER TABLE mytable RENAME TO newtable;
```

#### DDL-表删除

##### 删除表
```sql
DROP TABLE 表名;
```
例如：
```sql
DROP TABLE mytable;
```
##### 删除指定表，并重新创建该表
```sql
DROP TABLE IF EXISTS 表名;
```
例如：
```sql
DROP TABLE IF EXISTS mytable;
```

### DML

表的增删改

- 添加数据（INSERT）
- 修改数据（UPDATE）
- 删除数据（DELETE）

#### DML-添加数据
##### 给指定字段添加数据
```sql
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
```
##### 给全部字段添加数据
```sql
INSERT INTO table_name VALUES (value1, value2, ...);
```
##### 批量添加数据
```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...),
    (value1, value2, ...),
    ...;
```
#### DML-修改数据
##### 修改语句
```sql
UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
```
#### DML-删除数据
##### 删除语句
```sql
DELETE FROM table_name WHERE condition;
```


### DQL



## 函数

### 字符串函数


1. 字符串拼接 concat(str1, str2, ...)
```sql
SELECT CONCAT('Hello', 'World');
```
2. 大小写转换 lower(str) / upper(str)
```sql
SELECT LOWER('HELLO'), UPPER('world');
```
3. 填充 lpad(str, count, pad) / rpad(str, count, pad)
```sql
SELECT LPAD('123', 5, '0'), RPAD('abc', 5, '*');
```
4. 去掉首尾空格 trim(str)
```sql
SELECT TRIM('  hello  ');
```
5. 字符串截取 substring(str, start, count)
```sql
SELECT SUBSTRING('Hello World', 1, 5);
```


### 数值函数
1. ceil(x)  向上取整
      ```sql
      SELECT CEIL(3.14); // output:4
      ```
2. floor(x) 向下取整
      ```sql
      SELECT FLOOR(3.14); // output:3
      ```
3. mod(x, y) 返回x / y的模
      ```sql
      SELECT MOD(10, 3); // output:1
      ```
4. rand() 返回 0 ~ 1 内的随机数
      ```sql
      SELECT RAND();
      ```
5. round(x, y)  求参数x的四舍五入的值，保留y位小数
      ```sql
      SELECT ROUND(3.14159, 2); // output:3.14
      ```

### 日期函数

### 日期函数
1. 获取当前日期
```sql
SELECT CURDATE();
```
2. 获取当前时间
```sql
SELECT CURTIME();
```
3. 获取当前日期时间
```sql
SELECT NOW();
```
4. 格式化日期时间
```sql
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s');
```
5. 添加日期时间
```sql
SELECT DATE_ADD(NOW(), INTERVAL 1 DAY);
```
6. 减去日期时间
```sql
SELECT DATE_SUB(NOW(), INTERVAL 1 WEEK);
```

### 流程函数

## 流程函数
### IF函数
IF函数用于根据条件返回不同的值。
```sql
SELECT IF(1 > 2, 'True', 'False'); -- output: False
```
### CASE函数
CASE函数用于在满足不同条件时返回不同的值。
```sql
SELECT 
    CASE 
        WHEN 1 > 2 THEN 'Condition 1'
        WHEN 2 > 3 THEN 'Condition 2'
        ELSE 'Default'
    END;
```
## 事务

## 索引

## 优化

## 规范化数据库设计


## 参考资料
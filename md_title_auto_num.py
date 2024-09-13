# 给 markdown 文档的所有标题添加编号，编号形式为：1.2.3.4.5.6.
# 一级起编
# https://blog.csdn.net/u012443641/article/details/126440876
import re
import sys

pattern = r'^(\d+\.)+$'
'''正则表达式，判断字符串是否为一个数字后面跟着一个小数点的形式'''

in_format = False
'''当前行是否在 ```格式化中，如果为格式化内容，则直接忽略'''


def is_title(line: str):
    """
    判断该行内容是否为标题

    :param line: 文件中的某一行内容
    :return: 该行内容是否为标题
    """
    global in_format
    if line.__contains__('```'):
        if in_format:
            in_format = False
        else:
            in_format = True
    if line.startswith('#'):
        if in_format:
            return False
        else:
            return True


def remove_old_num(line: str):
    """
    移除标题中之前生成的编号，依据：
    1. 排除该行内容第一个空格前面的所有 # 号，
    2. 删除剩下的内容以空格分隔之后，从前往后符合编号正则的所有的内容，之后再把前面所有的 # 号和最后剩下的内容拼接起来

    :param line: 文件中的某个标题行
    :return: 去掉标题内容中之前添加的编号
    """
    split1 = line.split(' ', 1)
    if len(split1) < 2:
        raise Exception(F'该行标题内容不符合规范，具体内容为：\n${line}\n标题中的多个 # 后面应该使用空格和标题内容分开')
    # 结果，开头是标题符号
    result = split1[0]
    # 可能会有多个冗余编号，需要循环去除
    title_num_content = split1[1]
    split2 = title_num_content.split(' ')

    # 将去除了标题之后的内容按照空格分隔，如果分隔结果有多个，则循环去除符合编号正则的内容，并将非编号内容拼接到结果中
    if len(split2) > 1:
        for split in split2:
            # 不符合标题编号正则，可以拼接到结果中
            if not re.search(pattern, split):
                result += (' ' + split)
    else:
        result += ' ' + split2[0]

    return result


def title_symbol_num(line):
    """
    判断标题为几级标题
    """
    line = str(line)
    return len(line.split(' ', 1)[0])


auto_num = []
'''存储自动编号，根据标题来不断变化'''


def add_auto_num(line: str):
    """
    给标题行添加新的自动标号\n
    如果标题级别和标题存储变量长度一样，则直接最后一个数字自增即可\n
    如果不一样：\n
    标题级别长，则变量后面新增一个数字1\n
    标题级别短，则变量对应长度位置的数字加1，并且去掉后面所有的数字

    :param line: 无编号的标题行内容
    :return: 添加了编号的标题行内容
    """
    global auto_num
    title_num = title_symbol_num(line)
    title_symbol_content = line.split(' ', 1)
    title_symbol = title_symbol_content[0]
    title_content = title_symbol_content[1]
    if title_num == len(auto_num):
        auto_num[len(auto_num) - 1] += 1
    elif title_num > len(auto_num):
        auto_num.append(1)
    else:
        auto_num = auto_num[0: title_num]
        auto_num[len(auto_num) - 1] += 1
    title_num = ''
    for num in auto_num:
        title_num += str(num) + '.'
    return title_symbol + ' ' + title_num + ' ' + title_content


def file_content_handle(md_file_path: str):
    """
    处理文件内容

    :param md_file_path: 待处理文件路径
    """
    origin_file = open(md_file_path, 'r', encoding='utf-8')
    new_file = open(md_file_path.rsplit('.', 1)[0] + '_num' + '.md', 'w', encoding='utf-8')
    lines = origin_file.readlines()
    for line in lines:
        if is_title(line):
            line = remove_old_num(line)
            line = add_auto_num(line)
        new_file.writelines(line)
    origin_file.close()
    new_file.close()


if __name__ == '__main__':
    file_path = sys.argv[1]
    file_content_handle(sys.argv[1])


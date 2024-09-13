-- 初始化计数器
local header_counters = {0, 0, 0, 0, 0, 0}

-- 处理标题元素
function Header(el)
  local level = el.level

  -- 增加当前级别的计数器
  header_counters[level] = header_counters[level] + 1

  -- 重置较低级别的计数器
  for i = level + 1, 6 do
    header_counters[i] = 0
  end

  -- 生成编号
  local numbering = table.concat(header_counters, ".", 1, level) .. " "

  -- 将编号添加到标题内容前
  el.content = pandoc.List({pandoc.Str(numbering)}) .. el.content

  return el
end

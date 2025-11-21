# 旅行足迹功能使用指南

欢迎使用旅行足迹功能！这份指南将详细说明如何添加新的旅行记录、上传图片以及修改内容。

## 📁 文件结构

```
dashi-website/
├── src/
│   ├── assets/
│   │   └── travel/              # 📸 图片存放目录
│   │       ├── nanjing-hero.jpg    # 示例：南京头图
│   │       ├── nanjing-1.jpg       # 示例：南京照片1
│   │       └── ...
│   └── content/
│       └── travel/              # 📝 游记文档目录
│           ├── nanjing.md          # 示例：南京游记
│           └── your-travel.md      # 你的新游记
```

---

## 🚀 快速开始：添加新的旅行记录

### 第一步：创建游记文件

在 `src/content/travel/` 目录下创建一个新的 Markdown 文件，例如 `chengdu.md`。

**文件命名规范：**
- 使用小写字母
- 使用连字符分隔（如：`xi-an.md`）
- 使用拼音或英文（如：`hangzhou.md` 或 `tokyo.md`）

### 第二步：填写基本信息（Frontmatter）

在文件开头添加 YAML 格式的元数据：

```yaml
---
title: '四川·成都'                    # 标题（必填）
location: '四川省成都市'              # 地点（必填）
date: '2024年5月'                    # 旅行日期（必填）
description: '悠闲慢生活，美食天堂'  # 简短描述（必填）
duration: '5天4晚'                   # 旅行时长（选填）
bestSeason: '3-6月、9-11月'          # 最佳季节（选填）
budget: '2000-3500元'                # 预算参考（选填）
highlights: ['宽窄巷子', '大熊猫基地', '锦里', '春熙路']  # 精彩亮点（选填）
# 下面是图片字段，稍后会说明如何使用
# heroImage: ../../assets/travel/chengdu-hero.jpg
# images:
#   - ../../assets/travel/chengdu-1.jpg
#   - ../../assets/travel/chengdu-2.jpg
---
```

**字段说明：**

| 字段 | 是否必填 | 说明 | 示例 |
|------|---------|------|------|
| `title` | ✅ 必填 | 旅行地标题 | `'江苏·南京'` |
| `location` | ✅ 必填 | 具体位置 | `'江苏省南京市'` |
| `date` | ✅ 必填 | 旅行日期 | `'2024年3月'` |
| `description` | ✅ 必填 | 简短描述（1-2句话） | `'六朝古都的历史底蕴...'` |
| `duration` | ❌ 选填 | 旅行时长 | `'3天2晚'` |
| `bestSeason` | ❌ 选填 | 最佳旅游季节 | `'3-5月、9-11月'` |
| `budget` | ❌ 选填 | 预算参考 | `'1500-2500元'` |
| `highlights` | ❌ 选填 | 精彩亮点（数组） | `['中山陵', '夫子庙']` |
| `heroImage` | ❌ 选填 | 头图 | `../../assets/travel/xxx-hero.jpg` |
| `images` | ❌ 选填 | 照片集（数组） | 见下方说明 |

### 第三步：编写游记内容

在 frontmatter 下方（`---` 之后）开始编写正文内容，使用 Markdown 语法：

```markdown
---
# ... frontmatter ...
---

## 行程概览

在成都待了五天，体验了这座城市的慢生活和美食文化...

## Day 1: 到达成都

### 宽窄巷子

宽窄巷子是成都的名片之一...

**游玩建议：**
- 建议下午4点后去，避开人流高峰
- 推荐喝盖碗茶，体验成都慢生活

### 美食推荐

- 🍜 **担担面** - 必吃
- 🌶️ **麻辣兔头** - 挑战味蕾

> 引用块可以用来强调重点信息

## 总结

成都是一座来了就不想走的城市...
```

**Markdown 语法提示：**
- `## 标题` - 二级标题（会自动添加图标装饰）
- `### 子标题` - 三级标题
- `**加粗文字**` - 粗体
- `- 列表项` - 无序列表
- `> 引用内容` - 引用块
- `[链接文字](URL)` - 超链接

---

## 📸 图片上传和使用

### 上传位置

**所有旅行照片都放在：** `src/assets/travel/` 目录下

### 图片命名规范

使用 `地点-用途.jpg` 的格式命名：

```
src/assets/travel/
├── nanjing-hero.jpg       # 南京的头图
├── nanjing-1.jpg          # 南京照片1（中山陵）
├── nanjing-2.jpg          # 南京照片2（夫子庙）
├── chengdu-hero.jpg       # 成都的头图
├── chengdu-panda.jpg      # 成都照片（熊猫）
└── ...
```

### 图片尺寸建议

| 用途 | 推荐尺寸 | 比例 | 说明 |
|------|---------|------|------|
| **头图** (heroImage) | 1920x500px | 约 16:5 | 会作为页面顶部的大背景图 |
| **照片集** (images) | 1200x800px | 3:2 或 4:3 | 照片墙展示 |

### 图片优化建议

上传前建议：
1. **压缩图片**：使用 [TinyPNG](https://tinypng.com/) 或 ImageOptim
2. **格式选择**：风景照用 JPG，有透明背景用 PNG
3. **大小控制**：单张图片不超过 500KB

### 在 Markdown 中使用图片

#### 方式一：添加头图（Hero Image）

在 frontmatter 中添加 `heroImage` 字段：

```yaml
---
title: '江苏·南京'
# ... 其他字段 ...
heroImage: ../../assets/travel/nanjing-hero.jpg  # 添加这一行
---
```

**效果：** 头图会作为页面顶部的大背景图，文字叠加在上面。

#### 方式二：添加照片集

在 frontmatter 中添加 `images` 字段（数组）：

```yaml
---
title: '江苏·南京'
# ... 其他字段 ...
images:  # 添加照片集
  - ../../assets/travel/nanjing-1.jpg
  - ../../assets/travel/nanjing-2.jpg
  - ../../assets/travel/nanjing-3.jpg
  - ../../assets/travel/nanjing-4.jpg
---
```

**效果：** 照片集会在文章末尾自动生成一个精美的照片墙，支持悬停放大效果。

**注意事项：**
- 路径必须是相对路径：`../../assets/travel/xxx.jpg`
- 图片必须实际存在于 `src/assets/travel/` 目录中
- 如果图片不存在，会显示默认的渐变背景

---

## 📝 完整示例

### 示例文件：`src/content/travel/chengdu.md`

```yaml
---
title: '四川·成都'
location: '四川省成都市'
date: '2024年5月'
description: '悠闲慢生活，美食天堂，一座来了就不想走的城市。'
duration: '5天4晚'
bestSeason: '3-6月、9-11月'
budget: '2000-3500元'
highlights: ['宽窄巷子', '大熊猫基地', '锦里', '春熙路', '太古里']
heroImage: ../../assets/travel/chengdu-hero.jpg
images:
  - ../../assets/travel/chengdu-panda.jpg
  - ../../assets/travel/chengdu-kuanzhai.jpg
  - ../../assets/travel/chengdu-jinli.jpg
  - ../../assets/travel/chengdu-food.jpg
---

## 行程概览

在成都待了五天，完全融入了这座城市的慢节奏生活...

## Day 1: 宽窄巷子

### 初到成都

从机场坐地铁直达市区，入住了宽窄巷子附近的酒店...

### 美食推荐

- 🍜 **担担面** - 麻辣鲜香
- 🌶️ **麻辣兔头** - 成都特色

## Day 2: 大熊猫基地

早起去大熊猫基地，看到了超级可爱的国宝...

> 建议早上8点前到达，这时候熊猫最活跃！

## 总结

成都的美食、美景、慢生活，都让人流连忘返...
```

### 对应的图片文件：

```
src/assets/travel/
├── chengdu-hero.jpg        # 1920x500px，宽窄巷子全景
├── chengdu-panda.jpg       # 1200x800px，熊猫照片
├── chengdu-kuanzhai.jpg    # 1200x800px，宽窄巷子街景
├── chengdu-jinli.jpg       # 1200x800px，锦里夜景
└── chengdu-food.jpg        # 1200x800px，美食照片
```

---

## 🔄 修改内容

### 修改游记文本

直接编辑 `src/content/travel/xxx.md` 文件，保存后刷新网页即可看到变化。

### 修改图片

1. 准备新图片，放到 `src/assets/travel/` 目录
2. 在对应的 `.md` 文件中修改图片路径
3. 保存文件，刷新网页

### 删除旅行记录

直接删除 `src/content/travel/xxx.md` 文件，Gallery 页面会自动更新。

---

## 🎨 查看效果

### 访问页面

- **Gallery 总览页**：`http://localhost:4321/gallery`
- **南京游记详情**：`http://localhost:4321/travel/nanjing`
- **你的游记详情**：`http://localhost:4321/travel/文件名`

### 页面元素说明

#### 1. 英雄区域（顶部）
- 显示头图或渐变背景
- 标题、地点、日期
- 描述文字

#### 2. 信息卡片（悬浮卡片）
- 旅行时长
- 最佳季节
- 预算参考

#### 3. 精彩亮点标签栏
- 显示所有 highlights 标签

#### 4. 主内容区域
- 左侧：游记正文
- 右侧：侧边栏（旅行信息、必游景点）

#### 5. 照片集
- 文章末尾自动生成
- 网格布局，支持悬停放大

---

## 🛠️ 常见问题

### Q1: 图片不显示怎么办？

**检查清单：**
1. ✅ 图片是否在 `src/assets/travel/` 目录下
2. ✅ 路径是否正确：`../../assets/travel/xxx.jpg`
3. ✅ 文件名是否匹配（注意大小写）
4. ✅ 图片格式是否支持（jpg、png、webp）

### Q2: 如何删除示例游记？

已经为你删除了西藏和大理的示例，现在只有南京作为参考。你可以：
- 保留南京作为参考
- 或删除 `src/content/travel/nanjing.md`

### Q3: 可以添加视频吗？

目前不支持视频，但可以：
- 在正文中添加视频链接
- 使用 iframe 嵌入 YouTube/B站视频

### Q4: 如何排序旅行记录？

在 Gallery 页面，旅行记录按文件名字母顺序显示。你可以：
- 使用数字前缀：`01-nanjing.md`、`02-chengdu.md`
- 或在 `gallery.astro` 中修改排序逻辑

---

## 📞 需要帮助？

如果遇到问题：
1. 参考 `src/content/travel/nanjing.md` 示例
2. 检查浏览器控制台是否有错误信息
3. 确保所有必填字段都已填写

祝你使用愉快！✈️ 记录每一次精彩的旅行！


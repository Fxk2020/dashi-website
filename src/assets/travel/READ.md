# 旅行照片目录

## 使用说明

将你的旅行照片放在这个目录下，然后在对应的 markdown 文件中引用。

## 文件命名建议

- 使用小写字母和连字符
- 格式：`地点-描述.jpg`
- 例如：
  - `tibet-hero.jpg` - 西藏的头图
  - `tibet-1.jpg` - 西藏照片1
  - `dali-hero.jpg` - 大理的头图
  - `dali-erhai.jpg` - 大理洱海

## 在 Markdown 中引用图片

### 添加头图（Hero Image）

```yaml
---
title: '西藏·拉萨'
heroImage: ../../assets/travel/tibet-hero.jpg
---
```

### 添加照片集

```yaml
---
title: '西藏·拉萨'
images:
  - ../../assets/travel/tibet-1.jpg
  - ../../assets/travel/tibet-2.jpg
  - ../../assets/travel/tibet-3.jpg
---
```

## 图片尺寸建议

- **头图（Hero Image）**: 1920x500px 或更大，比例约 16:5
- **照片集**: 1200x800px 或更大，比例 3:2 或 4:3

## 图片优化

上传前建议：
1. 压缩图片大小（推荐工具：TinyPNG、ImageOptim）
2. 使用 JPG 格式（风景照）或 PNG 格式（需要透明背景）
3. 单张图片不超过 500KB


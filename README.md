# 晋韵千秋 - 晋剧数字博物馆

## 项目简介

晋韵千秋是一个致力于晋剧文化数字化保护与传承的综合性网站项目。通过现代化的Web技术，将晋剧这一国家级非物质文化遗产以数字化、可视化的方式呈现给大众，让更多人了解、喜爱并传承晋剧艺术。

本项目是一个纯前端实现的晋剧文化展示平台，包含晋剧历史、行当角色、乐器服饰、互动游戏等多个模块，融合了AR技术、数据可视化等现代技术手段。

## 功能模块

### 1. 梨园初章（首页）
- 晋剧艺术简介
- 行当分类展示（生、旦、净、丑）
- AR/3D互动体验
- 团队介绍

### 2. 粉墨春秋（历史沿革）
- 时间轴轮盘展示
- 五大历史时期详细介绍
  - 民国革新（1912-1949）
  - 建国新生（1950-1977）
  - 改革春风（1978-1999）
  - 世纪新声（2000-2019）
  - 数字传承（2020-今）
- 历史图片与音频展示

### 3. 行当经纬（地图展示）
- 晋剧地理分布地图
- 各地晋剧发展情况
- 交互式地图探索

### 4. 晋韵流芳（角色展示）
- 生旦净丑详细分类
- 角色特点介绍
- 经典唱段音频

### 5. 八音琳琅（乐器展示）
- 晋剧主要乐器介绍
- 乐器音色试听
- 3D乐器模型展示

### 6. 霓裳锦绣（服饰展示）
- 晋剧服饰分类
- 服饰图片展示
- 服饰文化解读

### 7. 乐园天地（互动游戏）
- 晋剧知识问答
- 脸谱识别游戏
- 互动学习体验

### 8. 数据观象（数据分析）
- 晋剧发展数据可视化
- 演出场次统计
- 剧团分布图表

## 技术栈

### 前端技术
- **HTML5** - 语义化标签
- **CSS3** - 动画效果、响应式布局
- **JavaScript (ES6+)** - 交互逻辑
- **Font Awesome 6.0** - 图标库

### 特色技术
- **AR技术** - 通过Kivicube平台实现AR体验
- **数据可视化** - ECharts图表展示
- **地图可视化** - 交互式地图展示
- **多媒体集成** - 音频、视频、图片综合展示

## 项目结构

```
jin-opera-website/
├── assets/                    # 资源文件
│   ├── audio/                # 音频文件
│   │   ├── 三弦 小开门.mp3
│   │   ├── 二弦 打金枝.mp3
│   │   └── ...
│   ├── images/               # 图片资源
│   │   ├── costumes/         # 服饰图片
│   │   ├── historys/         # 历史图片
│   │   ├── home/             # 首页图片
│   │   ├── instruments/      # 乐器图片
│   │   ├── map/              # 地图资源
│   │   └── roles/            # 角色图片
│   ├── videos/               # 视频文件
│   └── data/                 # 数据文件
├── css/                       # 样式文件
│   ├── home.css
│   ├── history.css
│   ├── map.css
│   ├── roles.css
│   ├── instruments.css
│   ├── costumes.css
│   ├── game.css
│   └── data-analysis.css
├── js/                        # JavaScript文件
│   ├── home.js
│   ├── history.js
│   ├── map.js
│   ├── roles.js
│   ├── instruments.js
│   ├── costumes.js
│   ├── game.js
│   └── data-analysis.js
├── pages/                     # 页面文件
│   ├── home.html             # 首页
│   ├── history.html          # 历史沿革
│   ├── map.html              # 地图展示
│   ├── roles.html            # 角色展示
│   ├── instruments.html      # 乐器展示
│   ├── costumes.html         # 服饰展示
│   ├── game.html             # 互动游戏
│   └── data-analysis.html    # 数据分析
└── favicon.ico               # 网站图标
```

## 快速开始

### 方式一：直接打开

1. 克隆或下载项目
2. 使用浏览器打开 `pages/home.html`

### 方式二：本地服务器

```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx http-server

# 使用VS Code Live Server插件
```

访问 `http://localhost:8000/pages/home.html`

## 功能特点

### 1. 沉浸式体验
- 视频背景营造氛围
- 平滑的页面过渡动画
- 滚动触发的动画效果

### 2. 丰富的多媒体内容
- 高清图片展示
- 音频播放功能
- 视频背景支持

### 3. 交互式学习
- AR/3D模型体验
- 互动游戏模块
- 知识问答系统

### 4. 数据可视化
- 晋剧发展数据统计
- 交互式图表展示
- 地理分布可视化

### 5. 响应式设计
- 适配桌面端
- 支持平板设备
- 移动端友好

## 核心功能展示

### AR体验

项目集成了AR技术，用户可以通过扫描二维码体验晋剧人物的3D模型：

```html
<iframe 
    src="https://www.kivicube.com/scenes/2N5P877252bB6349NRUin5hL7800r4k0" 
    class="ar-iframe"
    allowfullscreen
    allow="xr-spatial-tracking"
></iframe>
```

### 音频播放

每个行当都配有经典唱段试听：

```javascript
function playAudio(src) {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(src);
    currentAudio.play();
}
```

### 滚动动画

页面元素随滚动逐渐显现：

```javascript
window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.8) {
        section.classList.add('visible');
    }
});
```

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 其他现代浏览器

## 项目亮点

1. **文化传承**：数字化保护晋剧这一非物质文化遗产
2. **技术创新**：融合AR、数据可视化等现代技术
3. **内容丰富**：涵盖晋剧历史、角色、乐器、服饰等多方面
4. **交互友好**：流畅的动画效果和直观的用户界面
5. **教育意义**：寓教于乐的互动学习方式


## 开发历程

本项目为计算机设计大赛参赛作品，旨在通过数字化技术保护和传承晋剧艺术。

## 扩展计划

- [ ] 添加更多晋剧经典剧目介绍
- [ ] 完善AR体验内容
- [ ] 增加用户互动功能
- [ ] 优化移动端体验
- [ ] 添加多语言支持

## 许可证

本项目仅供学习和研究使用，图片和音频资源版权归原所有者所有。

## 致谢

感谢所有为晋剧艺术传承做出贡献的艺术家和研究者。

## 联系方式

如有问题或建议，请联系：13294668088@163.com

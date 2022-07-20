<Back url='/docs' />

# manimgl 常见问题

> 作者：鹤翔万里 & widcardw\
> Manim-Kindergarten\
> version 1.2\
> 更新：2021-10-06

<Logo />

[[toc]]

## 一切之前

`manim` 是一个使用 `python` 制作视频的动画引擎。学习它你首先要会一点 `python`，至少要学会 `python` 的基础语法、模块的调用以及类的基础知识（如果想要阅读源码，还需要掌握更多 `python` 面向对象的知识）。没有 `python` 的知识学 manim 是毫无意义的，会非常吃力，也会遇到非常多的问题。学会了 `python` 之后便可以少走非常多的弯路，这也是我们的忠告。因此，加入我们 Manim-Kindergarten[<sup id="quote-01">1</sup>](#ref-01) 首先要会使用 `python`，我们会在入群问题[<sup id="quote-02">2</sup>](#ref-02)中进行一个最基础的检测。

**最后，本常见问题文档基于 manim 的 master 分支版本[<sup id="quote-03">3</sup>](#ref-03)，此文档中未出现的问题可能在旧版也会有同样问题，所以推荐两个常见问题文档一起查阅。**

### 如何提问

1. 在 mk 群里提问，首先需要阅读完本常见问题文档和基于旧版的常见问题文档
2. 确保你问的问题不是由于 python 基础语法问题而造成的错误。
3. 如果在 `manim` 使用过程中出现了报错：
   1. 确保问题不在本文档和旧版常见问题文档中
   2. 将你的代码和**完整的**报错信息全部发送到群中，这样会方便群友为你解答
4. 如果你想要实现某个效果，但不知道如何操作。请将你想要达到的效果详细易懂地描述出来。
5. 语气友善，态度谦虚，避免造成不必要的纠纷。

### 教程推荐

1. Python 教程
   1. [《Python 编程：从入门到实践》](https://www.ituring.com.cn/book/1861)，ISBN 978-7-115-42802-8
   2. [《流畅的 Python》](https://www.ituring.com.cn/book/1564)，ISBN 978-7-115-45415-7（适合掌握 Python 基础知识后进阶）
   3. 菜鸟教程-Python3 教程 <https://www.runoob.com/python3/python3-tutorial.html>
2. `manim` 教程
   1. MK 中文官网：<https://manim.org.cn/>
   2. manim 教程文档（制作中）：<https://docs.manim.org.cn/>
   3. MK 制作的系列视频教程（制作中）
      - <https://space.bilibili.com/171431343/favlist?fid=947158443>
   4. MK 制作的视频源码 (videos/) 和常用自定义类 (utils/)
   5. 群主 cigar666 的 B 站专栏
      - <https://www.bilibili.com/read/readlist/rl82339>
   6. pdcxs 大大转载的 manim 教程
      - <https://www.bilibili.com/video/av64023740>
      - 源码 <https://github.com/Elteoremadebeethoven/AnimationsWithManim>
   7. GitHub 上 cai-hust 的中文教程
      - <https://github.com/cai-hust/manim-tutorial-CN>
   8. 看 `manim` 源码
3. 新版 `manim` 教程
   1. 新版 `manim` 官方文档 <https://3b1b.github.io/manim/>
   2. 新版 `manim` 中文文档 <https://docs.manim.org.cn/>
4. OpenGL 及 shaders 教程（Grant 亲自推荐）
   1. The Book of Shaders: <https://thebookofshaders.com/>
   2. Python & OpenGL for Scientific Visualization: <https://www.labri.fr/perso/nrougier/python-opengl/>
   3. Geometry Shader: <https://learnopengl.com/Advanced-OpenGL/Geometry-Shader/>

## 1. 安装问题

_注: 这里未提到的部分安装时会出现的问题请见旧版常见问题文档“manim常见问题 v3.1”_

### 1.1 Python 问题

#### Q1: 关于 `pip install manimgl`

如果想要安装新版，请不要这样做。pypi 上目前的 `manimlib` 仍为旧版，即目前 `cairo-backend` 分支中的版本。安装新版请克隆下 GitHub 上的 `3b1b/manim` 的 `master` 分支并根据文档安装使用，或者使用 `pip install manimgl` 来安装 pypi 上的版本。

> 注意：如果想要使用实时最新的版本，请最好克隆 github 的仓库并在该目录中使用 `pip install -e .`来进行安装。由于 pypi 上的版本需要管理员手动操作，因此相对于仓库源码会有一些延迟。

#### Q2: 关于 `pip install manim`

如果想要安装 3b1b 最新版 `manim`，请不要这样做。pypi 上的包 `manim` 为 community 版本，与 3b1b 版本有很大不同。它们的命令区别在后面会提到。

#### Q3: 无法安装包 `mapbox_earcut`

如果在安装包时出现报错

```shell
CMake must be installed to build the following extensions
```

先通过运行 `pip install cmake` 安装 `cmake`，再尝试。

#### Q4: `pip install -e .` 时抛出 `Exception:Versioning for ...` 异常

该问题已在 [#1565](https://github.com/3b1b/manim/pull/1565) 修复。目前可以通过 `git clone https://github.com/3b1b/manim.git`[<sup id="quote-04">4</sup>](#ref-04) 克隆下源码，也可通过下载 zip 后用 `pip install -e .` 命令安装。


## 2. 运行时问题

### 2.1 import 问题

#### Q1: 无法导入 `OpenGL`，抛出 `ImportError`

在最新的 macOS Big Sur 里，`OpenGL` 的默认位置被从 `library` 改到了 `library` 下面的 `frameworks` 中，所以在目前的版本中 `PyOpenGL` 找不到原来的位置，会导致报错。

```shell
ImportError: ('Unable to load OpenGL library', 
              'dlopen(OpenGL, 10): image not found', 'OpenGL', None)
```

为此，长期的解决方法是等待接下来的 Python 更新。短期的解决方法是改变 `PyOpenGL` 的读取位置，步骤如下：

1. 找到 Python 下 `PyOpenGL` 的文件 *OpenGL/platform/ctypesloader.py*，并且在做出任何改动之前做好完整的备份
2. 找到其中的 `fullName = util.find_library(name)`
3. 把它更改为 
   ```python
   fullName = '/System/Library/Frameworks/OpenGL.framework/OpenGL'
   ```

#### Q2: 无法导入 `manim_sandbox`

使用命令 `manimgl <file> <SceneName>` 进行渲染时，当前路径会自动切换到 `<file>` 所在的路径。所以在文件中导入外部库是要以当前文件路径为基础的。解决方法有以下几个：

- 将要渲染的文件和要引用的外部库放在同一个目录下
- 在当前的文件头部将要引用的外部库通过 `sys.path.append(<folder>)` 添加到 `sys.path` 变量中
- 使用 `python manimlib <file> <Scene>` 来代替，这时的基础路径为 `manimlib` 所在的路径，可以方便导入

### 📌 2.2 `LaTeX` 问题

具体 $\LaTeX$ 问题请见旧版常见问题文档 [“manim 常见问题 v3.1”](/problems/manim-cairo)

#### Q1: 如何使用中文

如果要通过 $\LaTeX$（即 `manim` 中的类 `TexText`）使用中文，需要在 `custom_defaults.yml` 文件中进行更改。

将其中的 `tex:` 部分改为

```yaml
tex:
  text_to_replace: [tex_expression]
  executable: xelatex -no-pdf
  template_file: ctex_template.tex
  intermediate_filetype: xdv
```

如果想要使用 $\LaTeX$ 生成自定义字体[<sup id="quote-05">5</sup>](#ref-05)，请在 *tex_templates/ctex_template.tex* 文件的 `\linespread{1}` 的上面添加以下两行代码

```tex
\usepackage{xeCJK}
\setCJKmainfont{SourceHanSerifSC-Medium.otf}
```

另外也请注意，`Text` 和 `TexText` 不同，具体区别下面会提到。

#### Q2: 怎么检测少了哪个包

尝试运行群文件“**入群必看！！**”中的 [*check_latex_packages.py*](/download/check_xelatex_packages.py) 文件，其中哪个包检查后为 `failed`，则缺少了哪个包。可以安装这个包，或者不必要的话将其从 *ctex_template.tex* 中删除。

#### Q3: 未设置 `temporary_storage` 导致的问题

如果未在配置的 `yml` 文件中设置 `temporary_storage` 的目录的话，`manimgl` 将会使用 Windows 默认的缓存路径。这时可能会因为无法访问导致各种问题。所以出现 `OSError: ... not Found` 这样的问题时可以先考虑设置一个 `temporary_storage` 路径。

#### Q4: 我放弃了，不装 LaTeX 了

目前也是有暂时解决方案，可以使用 MK 的 [Manim-MathJax](https://github.com/manim-kindergarten/ManimGL-MathJax) 来生成公式。这个库依赖于 MathJax，因此你需要先安装相关依赖才能使用（相比完整的 $\LaTeX$ 体积更小，速度更快，但功能没有那么丰富）。

同时，目前该库可能还不是很成熟，也不支持带有中文的公式。

### 2.3 dvisvgm 问题

#### 📌 Q1: 报错 `OSError: C:\Users\...\Temp\Tex\<...>.svg not Found`

如果你运行 `manim` 的位置不在 C 盘，那么请按照以下处理；如果你运行的位置在 C 盘，请看旧版常见问题文档中“dvisvgm 问题”部分。

处理这个问题有两种方法：

1. 更换 2.8 以上版本的 dvisvgm
2. 在 `custom_config.yml` 中为 `temporary_storage` 设置一个在同一磁盘下的路径

#### Q2: 报错 `ERROR: MiKTeX session could not be initialized`

有可能在你的环境变量中已经有其他版本的 dvisvgm，而这个版本在 MiKTex 版本的上方，解决方法是将 MiKTeX 所包含 dvisvgm 的环境变量移动到其它版本的上方。

### 2.4 命令行选项问题

#### Q1: `-pl` 选项不能用了怎么办

在新版中，命令行参数有了很大改变。`-p` 选项已经变成了**演讲者模式**，取而代之的是 `-o` 选项（在保存文件后打开文件）。目前常用的选项如下[<sup id="quote-06">6</sup>](#ref-06)：

- `-w` 将场景写入视频文件
- `-o` 将场景写入文件，并打开
- `-s` 直接跳到视频最后一帧，但是并不保存
- `-s` 与 `-o` 连用（`-s -o` 或 `-so`），保存并打开视频最后一帧
- `manimgl -h` 查看常用命令参数


#### Q2: 怎么调整导出画质

目前默认了四种画质

- low: 480p15
- medium: 720p30
- high: 1080p30
- ultra_high: 2160p60

可以通过更改 `custom_config.yml` 中的 `camera_qualities.default_quality` 来设置默认质量。也可以通过使用 `-l,-m,--hd,--uhd` 四个选项指定质量。也可以通过 `-r WxH` 指定分辨率、`--frame_rate FRAME_RATE` 指定帧率。

### 2.5 窗口问题

#### Q1: 在运行的时候为什么会弹出一个窗口，如何交互

这是新版本的特性，有实时播放的窗口，并且可以通过鼠标键盘进行交互。默认支持的交互操作有：

- 滚动鼠标中键来上下移动画面
- 按住键盘上 `z` 键的同时滚动鼠标中键来缩放画面
- 按住键盘上 `s` 键的同时移动鼠标来平移画
- 按住键盘上 `d` 键的同时移动鼠标来改变三维视角

**需要注意**：请确保你的输入法在英文模式，使用中文模式按上述按键无效。

#### Q2: `self.embed()` 模式下窗口卡出，而且无法交互

在进入 `self.embed()` 打开了 `iPython` 终端后，窗口暂时无法触碰，否则会出现无响应的情况（但是只要新的命令输入后就会恢复）。

要想在这是也通过鼠标进行交互，先输入 `touch()` 或者 `self.interact()`。

#### Q3: 如何调整窗口的位置

在 `custom_config.yml` 中，更改 `window_position`。也可以使用 `-f` 选项来全屏显示窗口。

### 📌 2.6 文字问题

#### Q1: 使用 `Text` 时中文都是小方块怎么办

出现这个问题是因为当前 `Text` 的字体不包含中文字形，解决方法是通过 `font=` 指定一个带中文字形的字体，具体字体名字应该写什么请看 Q4。

#### Q2: 有些中文无法正常显示，出现实心等问题怎么办

该问题已经在 [#1586](https://github.com/3b1b/manim/pull/1586) 中基本修复，请更新至最新版本再尝试，如果仍遇到了类似问题，欢迎在群里指出。

#### Q3: `Tex`、`TexText`、`Text` 有什么区别

旧版本中的 `TexMobject` 和 `TextMobject` 改了名字。`TexMobject` 改为了 `Tex`，`TextMobject` 改为了 `TexText`。

- `Tex`: 使用 $\LaTeX$ 的公式环境，使用 $\LaTeX$ 语法
- `TexText`: 使用 $\LaTeX$ 的正文环境，使用 $\LaTeX$ 语法
- `Text`: 使用 `manimpango` 来生成 svg 文字，不使用 $\LaTeX$ 语法，可以更换字体

#### Q4: 如何查看 `Text` 中的 `font` 该填什么

如果填入了 manimpango 无法识别的字体名称，它会自动用默认字体来进行渲染，警告语句如下

```shell
(process:1680): Pango-WARNING **: couldn't load font "X Not-Rotated 48", 
falling back to "Sans Not-Rotated 48", expect ugly output.
```

在 Python 中使用下面的命令可以查看可用的字体列表

```python
>>> import manimpango
>>> fonts = manimpango.list_fonts()
>>> for f in fonts:
...     print(f)
```

同时，字重 (font weight)、斜体 (slant) 等属性可以在 `Text` 的 `weight`和 `slant` 参数中设置。例如：

```python
text = Text(
    "Here is some text.",
    font="Consolas",
    weight="MEDIUM",
    slant="SLANT",
)
```

## 3. 其他问题

#### Q1: 新旧版 `manim` 有什么区别

新版 `manim` 使用 `OpenGL` 和 `moderngl` 来进行 GPU 渲染，会有更快的速度，也支持实时渲染和交互操作。更改了很多底层逻辑和结构，也调整了一些小的用法。具体的所有用法上的更改待更新。

关于三个版本的 `manim` 的简要说明在 [#1243](https://github.com/3b1b/manim/issues/1243)

#### Q2: 三个版本 `manim` 的安装途径和命令怎么区分

| manim 版本                          | 包名称 (pypi) | 导入[<sup id="quote-07">7</sup>](#ref-07) | 命令[<sup id="quote-08">8</sup>](#ref-08) |
| ----------------------------------- | ------------- | ---------------------------- | ---------------------------- |
| 3b1b 新版[<sup id="quote-09">9</sup>](#ref-09)   | manimgl       | `manimlib`                   | `manimgl`                    |
| community 版本                      | manim         | `manim`                      | `manim`                      |
| 3b1b 旧版[<sup id="quote-10">10</sup>](#ref-10) | manimlib      | `manimlib.imports`           | `python manim.py`            |

#### Q3: 带透明度的 `png` 图片背景为黑色怎么办

已经在 [#1541](https://github.com/3b1b/manim/pull/1541) 中修复，请更新至最新版。

#### Q4: 某些线条不显示，或者出现杂乱线条怎么办

这可能是你电脑 GPU 或者 OpenGL 的问题，或许将显卡设置调为“高性能模式”会有效果，但有时它又会自己好了，~~反正这个问题很玄学~~。

## 4. 注意

如果有以上之外的问题, 可以在群里提出, 也可以在 GitHub 上提出 issue，或者按照下图操作

![这种情况你应该致电格兰特·桑德森](/logo/turn_to_grant.jpg)

也请注意群规第 3,4 条

> 3. 虽为 manim 交流群, 但不要一有问题就提出来, 简单的问题能自己解决最好, 不能解决时再寻求帮助
> 4. 群主和管理员平时较忙, 有时若不能及时回复敬请谅解

## 5. 附录

### 更新日志

#### v 1.0

- 开始为新版 `manim` 编写常见问题文档

#### v 1.1

- 更新中文文档的网址到 manim.wiki
- 新增为 $\LaTeX$ 修改默认字体到方法
- 新增了查看字体名字的方法
- 新增了 `pip` 安装 `manimgl` 会出现的问题
- 新增了版本区分的相关内容
- 新增了两个其他问题 Q3、Q4

#### v 1.2

- 更新中文文档网址到 manim.org.cn
- 修复了 pip 安装时的 versioning 问题
- 新增了导入外部库的指引
- 新增了 `temporary_storage` 引起的各种问题
- 新增了窗口相关问题
- 新增了中文 `Text` 字体问题
- 添加了线条不显示问题的解决方法
- 新增了获取版本的方法

### 5.2. 脚注

- <span id="ref-01"></span>[[1]](#quote-01) Manim-Kindergarten QQ 群 862671480
- <span id="ref-02"></span>[[2]](#quote-02) 入群问题：<https://b23.tv/KmAvsG>
- <span id="ref-03"></span>[[3]](#quote-03) 即新版本 `manim`，原 `shaders` 分支版本
- <span id="ref-04"></span>[[4]](#quote-04) 国内可以使用 `git clone https://github.com.cnpmjs.org/3b1b/manim.git`，速度更快
- <span id="ref-05"></span>[[5]](#quote-05) 来自[暗星](https://space.bilibili.com/4694767)的教程 <https://www.bilibili.com/video/BV1D5411s7bR>
- <span id="ref-06"></span>[[6]](#quote-06) 全部选项见文档: [参数配置](https://docs.manim.org.cn/getting_started/configuration.html#id4)
- <span id="ref-07"></span>[[7]](#quote-07) 指 `from < 导入 > import *`
- <span id="ref-08"></span>[[8]](#quote-08) 指在终端，后接包含要渲染场景的 `py` 文件
- <span id="ref-09"></span>[[9]](#quote-09) `3b1b/manim` `master` 分支
- <span id="ref-10"></span>[[10]](#quote-10) `3b1b/manim` `cairo-backend` 分支

<Back url='/docs' />

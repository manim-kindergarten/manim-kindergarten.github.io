<Back url='/docs' />

# 新版 manim 用法变化 v 1.0.1

新版manim的更改非常多，这里仅仅是在代码编写层面可能有影响的改动。对于使用方面的变化，可以看新版文档：<https://docs.manim.org.cn>

这里有部分改动可能对于使用上不会有什么大影响，也有部分影响使用的改动没有在下面提到，如果有漏掉的，以后再更新。

本文档仅供参考，具体看源码。

## Animation 部分

- 增加了 `Fade` 作为 `FadeIn` 和 `FadeOut` 的父类
- `FadeIn` 和 `FadeOut` 可以传入 `shift` 和 `scale` 参数
- 删除了 `FadeInFrom`, `FadeInFromDown`, `FadeOutAndShift`, `FadeOutAndShiftDown`, `FadeInFromLarge` 这些都可以用 `FadeIn`, `FadeOut` 更简单地达到同样效果
- 增加了 `FadeTransform` 在两物体间交叉淡化，和子类 `FadeTransformPieces`
- 增加了 `CountInFrom(decimal_mob, source_number=0)` 将 `decimal_mob` 从 `source_number` 开始依次数到当前值
- `Rotating` 可以直接传入 `angle` 和 `axis` 而不必写关键字 `angle=` , `axis=`
- `Rotate` 变为了 `Rotating` 的子类，不会出现 `Transform` 中扭曲的效果
- 删除了 `MoveCar` 动画
- 增加了 `TransformMatchingShapes(mobject, target_mobject)` 和 `TransformMatchingTex(mobject, target_mobject)`


## Camera 部分

-   删除了除 `Camera` 外的所有相机类（`MappingCamera`, `MovingCamera`, `MultiCamera`）以及 `ThreeDCamera` 中的所有功能
-   实现了 `CameraFrame`（为一个 `Mobject` ）
    -   在 `Scene` 中可通过 `self.camera.frame` 调用
    -   可以使用 `Mobject` 的全部方法，如移动、缩放等
    -   调用 `.to_default_state()` 来放置到默认位置
    -   通过 `.rotate(angle, axis=OUT)` 来旋转画面
    -   通过 `.set_euler_angles(theta, phi, gamma)` 来设置相机的欧拉角
    -   通过 `.set_theta(theta)`, `.set_phi(phi)`, `.set_gamma(gamma)` 分别设置三个欧拉角
    -   通过 `.increment_theta(dtheta)`, `.increment_phi(dphi)`, `.increment_gamma(gamma)`
    -   来分别为三个欧拉角增加一定的数值。可以用于实现自动旋转
        `self.camera.frame.add_updater(lambda mob, dt: mob.increment_theta(0.1 * dt))`
-   `Camera` 增加了光源，为一个 `Point` ，在 `Scene` 中可通过 `self.camera.light_source` 调用，进行移动等。默认位置在 `(-10, 10, 10)`

## Container 部分全部删除

## Mobject 部分

-   svg 相关
    -   增加了 `Checkmark` 和 `Exmark`
    -   `drawings.py` 中删除了一些不必要的类
    -   删除了 `Code` 和 `Paragraph`
    -   `TexMobject` 重命名为了 `Tex` ， `TextMobject` 重命名为了 `TexText`
    -   `Tex`, `TexText` 和 `Text` 均增加了 `font_size`
    -   `Tex` 和 `TexText` 增加了 `isolate` ，为一个列表，是会自动拆分出来的部分
-   物体种类
    -   增加了新一类 `Surface` ，为 `ParametricSurface` 、 `TexturedSurface` 的父类。
    -   增加了针对 `Surface` 的群组 `SGroup`
    -   增加了 `TexturedSurface(uv_surface, image_file, dark_image_file=None)`，其中 `uv_surface` 为一个 `Surface`， `image_file` 为要贴的图， `dark_image_file` 为在黑暗中时要贴的图（默认和 `image_file` 相同）
    -   删除了 `Mobject1D` 、 `Mobject2D` 、 `PointCloudDot`
    -   增加了 `DotCloud` （为一个 `PMobject` ），进行了很大优化
    -   删除了 `AbstractImageMobject` 、 `ImageMobjectFromCamera`
    -   `VMobject` 删除了 `sheen`
-   `Mobject`
    -   增加了 `gloss` 和 `shadow` ，分别为 $[0, 1]$ 间的数。有 `.get_gloss()`, `.set_gloss(gloss)`, `.get_shadow()`, `.set_shadow(shadow)` 四个方法
    -   增加了 `.get_grid(n_rows, n_cols)` 复制成网格
    -   增加了 `.set_color_by_code(glsl_code)` 使用 GLSL 代码来改变颜色
    -   增加了 `.set_color_by_xyz_func(glsl_snippet, min_value=-5.0, max_value=5.0, colormap="viridis")` 以 `x,y,z` 的形式传入 GLSL 表达式，返回值应是浮点数
-   坐标系统（包括 `Axes`, `ThreeDAxes`, `NumberPlane`, `ComplexPlane` ）
    -   不再使用 `x_min`, `x_max`, `y_min`, `y_max` ，而是使用 `x_range`, `y_range` 分别为一个 `np.array()` ，含有三个数 `np.array([最小，最大，步长])`
    -   增加了 `.input_to_graph_point(x, graph)` 的缩写 `.i2gp(x, graph)`
    -   增加了原 `GraphScene` 的部分功能
        -   增加了 `.get_v_line(point)`, `.get_h_line(point)` 返回从 `point` 到两坐标轴的线，通过 `line_func` 关键字参数指定线形（默认 `DashedLine` ）
        -   增加了 `.get_graph_label(graph, label, x, direction, buff, color)` 返回为图像添加的标签
        -   增加了 `.get_v_line_to_graph(x, graph)`, `.get_h_line_to_graph(x, graph)` 返回从 `graph` 上横坐标为 x 的点到两坐标轴的线
        -   增加了 `.angle_of_tangent(x, graph, dx=EPSILON)` ，返回 graph 在 x 处倾斜角
        -   增加了 `.slope_of_tangent(x, graph, dx=EPSILON)` ，返回 graph 在 x 处切线斜率
        -   增加了 `.get_tangent_line(x, graph, length=5)` ，返回 graph 在 x 处的切线
        -   增加了 `.get_riemann_rectangles(graph, x_range, dx, input_sample_type, ...)` 返回黎曼矩形（一个 `VGroup` ）
    -   `Axes` 的属性 `number_line_config` 重命名为 `axis_config`
    -   `Axes` 原 `.get_coordinate_labels(x_values, y_values)` 方法重命名为 `.add_coordinate_labels(x_values, y_values)` （但并没有添加到画面上，估计是忘写了）
    -   `ComplexPlane` 的 `.add_coordinate_labels(numbers)` 会直接将坐标添加到画面上（估计这个是没忘）

<Back url='/docs' />

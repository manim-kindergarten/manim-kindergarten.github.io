import{_ as d}from"./Back.fbb3405d.js";import{j as a,o as t,c as u,b as c,k as i,e,A as l}from"./app.f841af77.js";const r={class:"prose prose-sm m-auto text-left"},s=i('<h1 id="%E6%96%B0%E7%89%88-manim-%E7%94%A8%E6%B3%95%E5%8F%98%E5%8C%96-v-1.0.1" tabindex="-1">\u65B0\u7248 manim \u7528\u6CD5\u53D8\u5316 v 1.0.1</h1><p>\u65B0\u7248 manim \u7684\u66F4\u6539\u975E\u5E38\u591A\uFF0C\u8FD9\u91CC\u4EC5\u4EC5\u662F\u5728\u4EE3\u7801\u7F16\u5199\u5C42\u9762\u53EF\u80FD\u6709\u5F71\u54CD\u7684\u6539\u52A8\u3002\u5BF9\u4E8E\u4F7F\u7528\u65B9\u9762\u7684\u53D8\u5316\uFF0C\u53EF\u4EE5\u770B\u65B0\u7248\u6587\u6863\uFF1A<a href="https://docs.manim.org.cn" target="_blank" rel="noopener">https://docs.manim.org.cn</a></p><p>\u8FD9\u91CC\u6709\u90E8\u5206\u6539\u52A8\u53EF\u80FD\u5BF9\u4E8E\u4F7F\u7528\u4E0A\u4E0D\u4F1A\u6709\u4EC0\u4E48\u5927\u5F71\u54CD\uFF0C\u4E5F\u6709\u90E8\u5206\u5F71\u54CD\u4F7F\u7528\u7684\u6539\u52A8\u6CA1\u6709\u5728\u4E0B\u9762\u63D0\u5230\uFF0C\u5982\u679C\u6709\u6F0F\u6389\u7684\uFF0C\u4EE5\u540E\u518D\u66F4\u65B0\u3002</p><p>\u672C\u6587\u6863\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5177\u4F53\u770B\u6E90\u7801\u3002</p><h2 id="animation-%E9%83%A8%E5%88%86" tabindex="-1">Animation \u90E8\u5206</h2><ul><li>\u589E\u52A0\u4E86 <code>Fade</code> \u4F5C\u4E3A <code>FadeIn</code> \u548C <code>FadeOut</code> \u7684\u7236\u7C7B</li><li><code>FadeIn</code> \u548C <code>FadeOut</code> \u53EF\u4EE5\u4F20\u5165 <code>shift</code> \u548C <code>scale</code> \u53C2\u6570</li><li>\u5220\u9664\u4E86 <code>FadeInFrom</code>, <code>FadeInFromDown</code>, <code>FadeOutAndShift</code>, <code>FadeOutAndShiftDown</code>, <code>FadeInFromLarge</code> \u8FD9\u4E9B\u90FD\u53EF\u4EE5\u7528 <code>FadeIn</code>, <code>FadeOut</code> \u66F4\u7B80\u5355\u5730\u8FBE\u5230\u540C\u6837\u6548\u679C</li><li>\u589E\u52A0\u4E86 <code>FadeTransform</code> \u5728\u4E24\u7269\u4F53\u95F4\u4EA4\u53C9\u6DE1\u5316\uFF0C\u548C\u5B50\u7C7B <code>FadeTransformPieces</code></li><li>\u589E\u52A0\u4E86 <code>CountInFrom(decimal_mob, source_number=0)</code> \u5C06 <code>decimal_mob</code> \u4ECE <code>source_number</code> \u5F00\u59CB\u4F9D\u6B21\u6570\u5230\u5F53\u524D\u503C</li><li><code>Rotating</code> \u53EF\u4EE5\u76F4\u63A5\u4F20\u5165 <code>angle</code> \u548C <code>axis</code> \u800C\u4E0D\u5FC5\u5199\u5173\u952E\u5B57 <code>angle=</code> , <code>axis=</code></li><li><code>Rotate</code> \u53D8\u4E3A\u4E86 <code>Rotating</code> \u7684\u5B50\u7C7B\uFF0C\u4E0D\u4F1A\u51FA\u73B0 <code>Transform</code> \u4E2D\u626D\u66F2\u7684\u6548\u679C</li><li>\u5220\u9664\u4E86 <code>MoveCar</code> \u52A8\u753B</li><li>\u589E\u52A0\u4E86 <code>TransformMatchingShapes(mobject, target_mobject)</code> \u548C <code>TransformMatchingTex(mobject, target_mobject)</code></li></ul><h2 id="camera-%E9%83%A8%E5%88%86" tabindex="-1">Camera \u90E8\u5206</h2><ul><li>\u5220\u9664\u4E86\u9664 <code>Camera</code> \u5916\u7684\u6240\u6709\u76F8\u673A\u7C7B\uFF08<code>MappingCamera</code>, <code>MovingCamera</code>, <code>MultiCamera</code>\uFF09\u4EE5\u53CA <code>ThreeDCamera</code> \u4E2D\u7684\u6240\u6709\u529F\u80FD</li><li>\u5B9E\u73B0\u4E86 <code>CameraFrame</code>\uFF08\u4E3A\u4E00\u4E2A <code>Mobject</code> \uFF09 <ul><li>\u5728 <code>Scene</code> \u4E2D\u53EF\u901A\u8FC7 <code>self.camera.frame</code> \u8C03\u7528</li><li>\u53EF\u4EE5\u4F7F\u7528 <code>Mobject</code> \u7684\u5168\u90E8\u65B9\u6CD5\uFF0C\u5982\u79FB\u52A8\u3001\u7F29\u653E\u7B49</li><li>\u8C03\u7528 <code>.to_default_state()</code> \u6765\u653E\u7F6E\u5230\u9ED8\u8BA4\u4F4D\u7F6E</li><li>\u901A\u8FC7 <code>.rotate(angle, axis=OUT)</code> \u6765\u65CB\u8F6C\u753B\u9762</li><li>\u901A\u8FC7 <code>.set_euler_angles(theta, phi, gamma)</code> \u6765\u8BBE\u7F6E\u76F8\u673A\u7684\u6B27\u62C9\u89D2</li><li>\u901A\u8FC7 <code>.set_theta(theta)</code>, <code>.set_phi(phi)</code>, <code>.set_gamma(gamma)</code> \u5206\u522B\u8BBE\u7F6E\u4E09\u4E2A\u6B27\u62C9\u89D2</li><li>\u901A\u8FC7 <code>.increment_theta(dtheta)</code>, <code>.increment_phi(dphi)</code>, <code>.increment_gamma(gamma)</code></li><li>\u6765\u5206\u522B\u4E3A\u4E09\u4E2A\u6B27\u62C9\u89D2\u589E\u52A0\u4E00\u5B9A\u7684\u6570\u503C\u3002\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0\u81EA\u52A8\u65CB\u8F6C <code>self.camera.frame.add_updater(lambda mob, dt: mob.increment_theta(0.1 * dt))</code></li></ul></li><li><code>Camera</code> \u589E\u52A0\u4E86\u5149\u6E90\uFF0C\u4E3A\u4E00\u4E2A <code>Point</code> \uFF0C\u5728 <code>Scene</code> \u4E2D\u53EF\u901A\u8FC7 <code>self.camera.light_source</code> \u8C03\u7528\uFF0C\u8FDB\u884C\u79FB\u52A8\u7B49\u3002\u9ED8\u8BA4\u4F4D\u7F6E\u5728 <code>(-10, 10, 10)</code></li></ul><h2 id="container-%E9%83%A8%E5%88%86%E5%85%A8%E9%83%A8%E5%88%A0%E9%99%A4" tabindex="-1">Container \u90E8\u5206\u5168\u90E8\u5220\u9664</h2><h2 id="mobject-%E9%83%A8%E5%88%86" tabindex="-1">Mobject \u90E8\u5206</h2>',10),m=e("ul",null,[e("li",null,[l("svg \u76F8\u5173 "),e("ul",null,[e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,"Checkmark"),l(" \u548C "),e("code",null,"Exmark")]),e("li",null,[e("code",null,"drawings.py"),l(" \u4E2D\u5220\u9664\u4E86\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u7C7B")]),e("li",null,[l("\u5220\u9664\u4E86 "),e("code",null,"Code"),l(" \u548C "),e("code",null,"Paragraph")]),e("li",null,[e("code",null,"TexMobject"),l(" \u91CD\u547D\u540D\u4E3A\u4E86 "),e("code",null,"Tex"),l(" \uFF0C "),e("code",null,"TextMobject"),l(" \u91CD\u547D\u540D\u4E3A\u4E86 "),e("code",null,"TexText")]),e("li",null,[e("code",null,"Tex"),l(", "),e("code",null,"TexText"),l(" \u548C "),e("code",null,"Text"),l(" \u5747\u589E\u52A0\u4E86 "),e("code",null,"font_size")]),e("li",null,[e("code",null,"Tex"),l(" \u548C "),e("code",null,"TexText"),l(" \u589E\u52A0\u4E86 "),e("code",null,"isolate"),l(" \uFF0C\u4E3A\u4E00\u4E2A\u5217\u8868\uFF0C\u662F\u4F1A\u81EA\u52A8\u62C6\u5206\u51FA\u6765\u7684\u90E8\u5206")])])]),e("li",null,[l("\u7269\u4F53\u79CD\u7C7B "),e("ul",null,[e("li",null,[l("\u589E\u52A0\u4E86\u65B0\u4E00\u7C7B "),e("code",null,"Surface"),l(" \uFF0C\u4E3A "),e("code",null,"ParametricSurface"),l(" \u3001 "),e("code",null,"TexturedSurface"),l(" \u7684\u7236\u7C7B\u3002")]),e("li",null,[l("\u589E\u52A0\u4E86\u9488\u5BF9 "),e("code",null,"Surface"),l(" \u7684\u7FA4\u7EC4 "),e("code",null,"SGroup")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,"TexturedSurface(uv_surface, image_file, dark_image_file=None)"),l("\uFF0C\u5176\u4E2D "),e("code",null,"uv_surface"),l(" \u4E3A\u4E00\u4E2A "),e("code",null,"Surface"),l("\uFF0C "),e("code",null,"image_file"),l(" \u4E3A\u8981\u8D34\u7684\u56FE\uFF0C "),e("code",null,"dark_image_file"),l(" \u4E3A\u5728\u9ED1\u6697\u4E2D\u65F6\u8981\u8D34\u7684\u56FE\uFF08\u9ED8\u8BA4\u548C "),e("code",null,"image_file"),l(" \u76F8\u540C\uFF09")]),e("li",null,[l("\u5220\u9664\u4E86 "),e("code",null,"Mobject1D"),l(" \u3001 "),e("code",null,"Mobject2D"),l(" \u3001 "),e("code",null,"PointCloudDot")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,"DotCloud"),l(" \uFF08\u4E3A\u4E00\u4E2A "),e("code",null,"PMobject"),l(" \uFF09\uFF0C\u8FDB\u884C\u4E86\u5F88\u5927\u4F18\u5316")]),e("li",null,[l("\u5220\u9664\u4E86 "),e("code",null,"AbstractImageMobject"),l(" \u3001 "),e("code",null,"ImageMobjectFromCamera")]),e("li",null,[e("code",null,"VMobject"),l(" \u5220\u9664\u4E86 "),e("code",null,"sheen")])])]),e("li",null,[e("code",null,"Mobject"),e("ul",null,[e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,"gloss"),l(" \u548C "),e("code",null,"shadow"),l(" \uFF0C\u5206\u522B\u4E3A "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",{stretchy:"false"},"["),e("mn",null,"0"),e("mo",{separator:"true"},","),e("mn",null,"1"),e("mo",{stretchy:"false"},"]")]),e("annotation",{encoding:"application/x-tex"},"[0, 1]")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mopen"},"["),e("span",{class:"mord"},"0"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.16666666666666666em"}}),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},"]")])])]),l(" \u95F4\u7684\u6570\u3002\u6709 "),e("code",null,".get_gloss()"),l(", "),e("code",null,".set_gloss(gloss)"),l(", "),e("code",null,".get_shadow()"),l(", "),e("code",null,".set_shadow(shadow)"),l(" \u56DB\u4E2A\u65B9\u6CD5")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".get_grid(n_rows, n_cols)"),l(" \u590D\u5236\u6210\u7F51\u683C")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".set_color_by_code(glsl_code)"),l(" \u4F7F\u7528 GLSL \u4EE3\u7801\u6765\u6539\u53D8\u989C\u8272")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,'.set_color_by_xyz_func(glsl_snippet, min_value=-5.0, max_value=5.0, colormap="viridis")'),l(" \u4EE5 "),e("code",null,"x,y,z"),l(" \u7684\u5F62\u5F0F\u4F20\u5165 GLSL \u8868\u8FBE\u5F0F\uFF0C\u8FD4\u56DE\u503C\u5E94\u662F\u6D6E\u70B9\u6570")])])]),e("li",null,[l("\u5750\u6807\u7CFB\u7EDF\uFF08\u5305\u62EC "),e("code",null,"Axes"),l(", "),e("code",null,"ThreeDAxes"),l(", "),e("code",null,"NumberPlane"),l(", "),e("code",null,"ComplexPlane"),l(" \uFF09 "),e("ul",null,[e("li",null,[l("\u4E0D\u518D\u4F7F\u7528 "),e("code",null,"x_min"),l(", "),e("code",null,"x_max"),l(", "),e("code",null,"y_min"),l(", "),e("code",null,"y_max"),l(" \uFF0C\u800C\u662F\u4F7F\u7528 "),e("code",null,"x_range"),l(", "),e("code",null,"y_range"),l(" \u5206\u522B\u4E3A\u4E00\u4E2A "),e("code",null,"np.array()"),l(" \uFF0C\u542B\u6709\u4E09\u4E2A\u6570 "),e("code",null,"np.array([\u6700\u5C0F\uFF0C\u6700\u5927\uFF0C\u6B65\u957F])")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".input_to_graph_point(x, graph)"),l(" \u7684\u7F29\u5199 "),e("code",null,".i2gp(x, graph)")]),e("li",null,[l("\u589E\u52A0\u4E86\u539F "),e("code",null,"GraphScene"),l(" \u7684\u90E8\u5206\u529F\u80FD "),e("ul",null,[e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".get_v_line(point)"),l(", "),e("code",null,".get_h_line(point)"),l(" \u8FD4\u56DE\u4ECE "),e("code",null,"point"),l(" \u5230\u4E24\u5750\u6807\u8F74\u7684\u7EBF\uFF0C\u901A\u8FC7 "),e("code",null,"line_func"),l(" \u5173\u952E\u5B57\u53C2\u6570\u6307\u5B9A\u7EBF\u5F62\uFF08\u9ED8\u8BA4 "),e("code",null,"DashedLine"),l(" \uFF09")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".get_graph_label(graph, label, x, direction, buff, color)"),l(" \u8FD4\u56DE\u4E3A\u56FE\u50CF\u6DFB\u52A0\u7684\u6807\u7B7E")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".get_v_line_to_graph(x, graph)"),l(", "),e("code",null,".get_h_line_to_graph(x, graph)"),l(" \u8FD4\u56DE\u4ECE "),e("code",null,"graph"),l(" \u4E0A\u6A2A\u5750\u6807\u4E3A x \u7684\u70B9\u5230\u4E24\u5750\u6807\u8F74\u7684\u7EBF")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".angle_of_tangent(x, graph, dx=EPSILON)"),l(" \uFF0C\u8FD4\u56DE graph \u5728 x \u5904\u503E\u659C\u89D2")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".slope_of_tangent(x, graph, dx=EPSILON)"),l(" \uFF0C\u8FD4\u56DE graph \u5728 x \u5904\u5207\u7EBF\u659C\u7387")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".get_tangent_line(x, graph, length=5)"),l(" \uFF0C\u8FD4\u56DE graph \u5728 x \u5904\u7684\u5207\u7EBF")]),e("li",null,[l("\u589E\u52A0\u4E86 "),e("code",null,".get_riemann_rectangles(graph, x_range, dx, input_sample_type, ...)"),l(" \u8FD4\u56DE\u9ECE\u66FC\u77E9\u5F62\uFF08\u4E00\u4E2A "),e("code",null,"VGroup"),l(" \uFF09")])])]),e("li",null,[e("code",null,"Axes"),l(" \u7684\u5C5E\u6027 "),e("code",null,"number_line_config"),l(" \u91CD\u547D\u540D\u4E3A "),e("code",null,"axis_config")]),e("li",null,[e("code",null,"Axes"),l(" \u539F "),e("code",null,".get_coordinate_labels(x_values, y_values)"),l(" \u65B9\u6CD5\u91CD\u547D\u540D\u4E3A "),e("code",null,".add_coordinate_labels(x_values, y_values)"),l(" \uFF08\u4F46\u5E76\u6CA1\u6709\u6DFB\u52A0\u5230\u753B\u9762\u4E0A\uFF0C\u4F30\u8BA1\u662F\u5FD8\u5199\u4E86\uFF09")]),e("li",null,[e("code",null,"ComplexPlane"),l(" \u7684 "),e("code",null,".add_coordinate_labels(numbers)"),l(" \u4F1A\u76F4\u63A5\u5C06\u5750\u6807\u6DFB\u52A0\u5230\u753B\u9762\u4E0A\uFF08\u4F30\u8BA1\u8FD9\u4E2A\u662F\u6CA1\u5FD8\uFF09")])])])],-1),b={meta:[]},T={__name:"new_usage",setup(_,{expose:n}){return a({meta:[]}),n({frontmatter:{meta:[]}}),(p,h)=>{const o=d;return t(),u("div",r,[c(o,{url:"/docs"}),s,m,c(o,{url:"/docs"})])}}};export{T as default,b as frontmatter};
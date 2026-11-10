---
name: material-crud
description: The creation, read, update, and deletion of materials
---

填写 CSL-JSON 条目：
- 对于书籍，注意《课程、教科书与参考资料》下的《概述》页声明的选书原则。非首选版本填入`custom.variant`；其中如有字段值与首选版本的相应字段值相同，则一般应省略。
- 填写 CSL-JSON 的字段时，遵照 CSL 规范规定的语义。
  - `custom`的预定义字段位于类`packages/bibkit/src/CSL.ts:Custom`。
  - 一般地，各字段能填则填，尤其是`number-of-pages` `issued` `accessed` `ISBN` `ISSN` `URL`，以及`original-`开头的几个字段；但也有少量例外。
    - 例如，自定义字段`keyword` `topic` `subject`不应随意填写。
      - 举例而言，Springer 的信息页提供了 Keywords 和 Topics 字段，Cambridge University Press 的信息页提供 subjects 字段，此时可以分别填入 CSL-JSON 的`custom`中的相应单数字段（与 CSL-JSON 已有的字段名维持相同的单复数命名风格）。
  - `publisher`与`custom.institution`不要混淆。
  - `author`与`custom.lecturer`不要混淆。
  - 字段值保持原有大小写样式，不要随意转换。
  - `custom`中若有字段与 CSL-JSON 中的字段重名，则 CSL-JSON 中的该字段的值为首选，`custom`中该字段的值为附加。附加值不与首选值重复。
    - 例：`URL` 一般首选出版社（如有）信息页 URL；`custom.URL`为提供的该条目的元信息的其余站点的 URL。
  - 在一个条目中，同一 URL 不重复出现，例如既出现在`URL`或`custom.URL`又出现在`custom.free_material`的元素中的`link`。
  - 不在首选 URL 指向的资源中出现的字段，其出处填写于`custom.URL`，并为该`custom.URL`项中使用行末注释（`// `）简短标注此项资源提供的字段。
  - 本项目推荐使用图灵完备方法编程查询条目，因而 CSL-JSON 中的`id`项不填，由 bibkit 自动生成；`Material.id`一项通常填写该条目的知名简称或作者指定的简称；若无此类简称，则此项亦省略不写。
- 该条目所在的 ts 文件的基本名（basename）建议填写作者与标题，二者之间使用英文逗号`,`分隔：作者通常填写第一作者；当有多名作者时，使用` et al.`或` 等`省略非一作；有多名作者但第一作者不明确时，搜索并填写该资料被被提及时提到最多的作者。填写简称（例如`CSAPP`或`SICP`）亦可。非中文且非 Latin1 字符一般需要转写。特殊符号尽量保留，一般不应 slugify。
- 不要记录盗版资源的 URL。
- 租赁（rental）版本无需收录。
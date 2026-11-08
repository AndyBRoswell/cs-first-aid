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
- 不要记录盗版资源的 URL。
- 租赁（rental）版本无需收录。
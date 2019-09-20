---
sidebar: auto
sidebarDepth: 1
---
# HowTo Markdown

## VuePress

Find more details on the following extensions [here](https://v1.vuepress.vuejs.org/guide/markdown.html#github-style-tables).

---

### Tables (GitHub)

#### Input

```
| Tables        | Are           |  Cool |
| ------------- | :------------ | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

#### Result
| Tables        | Are           |  Cool |
| ------------- | :------------ | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---

### Table of Contents

#### Input

```
[[toc]]
```

#### Result

[[toc]]

---

### Custom Container

#### Input
```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger STOP
This is a dangerous warning
:::
```

#### Output
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger STOP
This is a dangerous warning
:::

---

### Syntax Highlighting in Code Blocks

#### Input

```
``` js
export default {
    name: 'MyComponent',
    // ...
}
```


#### Output
``` js
export default {
  name: 'MyComponent',
  // ...
}
```

---

### Line Highlighting in Code Blocks

#### Input
    ``` js{4}
    export default {
    data () {
        return {
        msg: 'Highlighted!'
        }
    }
    }
    ```

#### Output
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Extensions

Find more details on the following extensions can at:

* [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup)
* [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub)
* [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)
* [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist)
* [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr)
* [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)
  [twemoji](https://github.com/twitter/twemoji)
* [markdown-it-checkbox](https://github.com/mcecot/markdown-it-checkbox)
* [markdown-it-kbd](https://github.com/jGleitz/markdown-it-kbd)

---

### Superscript

#### Input

```
October, 29^th^
```

#### Output
October, 29^th^

---

### Subscript

#### Input
```
H~2~O
```

#### Output
H~2~O

---

### Footnote

#### Input
```
Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
```

#### Output

Footnote 1 link[first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

<!-- lint disable code-block-style -->
    and multiple paragraphs.
<!-- lint enable code-block-style -->

[^second]: Footnote text.

---

### Definition Lists

#### Input
```
Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b
```

#### Output
<!-- lint disable code-block-style -->
Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

*Compact style*:

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
<!-- lint enable code-block-style -->

### Abbreviations

#### Input
```
This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language
```

#### Output
This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### Emoji :tada:

::: tip Twemoji

:copyright: 2019 Twitter, Inc and other contributors :bird:  
Code licensed under the MIT License: <http://opensource.org/licenses/MIT>  
Graphics licensed under CC-BY 4.0: <https://creativecommons.org/licenses/by/4.0/>

:::

#### Input
```
*:tada:* :100: :nerd_face:
```

#### Output
**:tada:** :100: :nerd_face:

Lists of all emojis available are [here](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json), [here](https://twemoji.maxcdn.com/2/test/preview.html) and [here](https://github.com/twitter/twemoji/) (`twemoji`).

---

### Checkboxes

#### Input
```
[ ] unchecked
[x] checked
```

#### Output
[ ] unchecked
[x] checked

### Keystrokes

#### Input
```
[[Strg]]+[[Alt]]+[[Entf]]
```

#### Output
[[Strg]]+[[Alt]]+[[Entf]]

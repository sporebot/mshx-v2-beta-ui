import * as monaco from 'https://cdn.jsdelivr.net/npm/monaco-editor@0.39.0/+esm';

const backgroundColor = getComputedStyle(document.body).getPropertyValue("--main-bg")

// todo: move this to its own file
const theme = {
    "inherit": true,
    "base": "vs-dark",
    "colors": {
        "activityBar.background": "#282c34",
        "activityBar.foreground": "#d7dae0",
        "activityBarBadge.background": "#4d78cc",
        "activityBarBadge.foreground": "#f8fafd",
        "badge.background": "#282c34",
        "button.background": "#404754",
        "button.secondaryBackground": "#30333d",
        "button.secondaryForeground": "#c0bdbd",
        "checkbox.border": "#404754",
        "debugToolBar.background": "#21252b",
        "descriptionForeground": "#abb2bf",
        "diffEditor.insertedTextBackground": "#00809b33",
        "dropdown.background": backgroundColor,
        "dropdown.border": "#21252b",
        "editor.background": backgroundColor, // --main-bg
        "editor.findMatchBackground": "#d19a6644",
        "editor.findMatchBorder": "#ffffff5a",
        "editor.findMatchHighlightBackground": "#ffffff22",
        "editor.foreground": "#abb2bf",
        "editorBracketHighlight.foreground1": "#d19a66",
        "editorBracketHighlight.foreground2": "#c678dd",
        "editorBracketHighlight.foreground3": "#56b6c2",
        "editorHoverWidget.highlightForeground": "#61afef",
        "editorInlayHint.foreground": "#abb2bf",
        "editorInlayHint.background": "#0f0f0f55", // selected line
        "editor.lineHighlightBackground": "#0f0f0f55", // selected line
        "editorLineNumber.activeForeground": "#abb2bf",
        "editorGutter.addedBackground": "#109868",
        "editorGutter.deletedBackground": "#9A353D",
        "editorGutter.modifiedBackground": "#948B60",
        "editorOverviewRuler.addedBackground": "#109868",
        "editorOverviewRuler.deletedBackground": "#9A353D",
        "editorOverviewRuler.modifiedBackground": "#948B60",
        "editor.selectionBackground": "#67769660",
        "editor.selectionHighlightBackground": "#ffffff10",
        "editor.selectionHighlightBorder": "#dddddd",
        "editor.wordHighlightBackground": "#d2e0ff2f",
        "editor.wordHighlightBorder": "#7f848e",
        "editor.wordHighlightStrongBackground": "#abb2bf26",
        "editor.wordHighlightStrongBorder": "#7f848e",
        "editorBracketMatch.background": "#515a6b",
        "editorBracketMatch.border": "#515a6b",
        "editorCursor.background": "#ffffffc9",
        "editorCursor.foreground": "#528bff",
        "editorError.foreground": "#c24038",
        "editorGroup.background": "#181a1f",
        "editorGroup.border": "#181a1f",
        "editorGroupHeader.tabsBackground": "#21252b",
        "editorHoverWidget.background": "#21252b",
        "editorHoverWidget.border": "#181a1f",
        "editorIndentGuide.activeBackground": "#c8c8c859",
        "editorIndentGuide.background": "#3b4048",
        "editorLineNumber.foreground": "#495162",
        "editorMarkerNavigation.background": "#21252b",
        "editorRuler.foreground": "#abb2bf26",
        "editorSuggestWidget.background": "#21252b",
        "editorSuggestWidget.border": "#181a1f",
        "editorSuggestWidget.selectedBackground": "#2c313a",
        "editorWarning.foreground": "#d19a66",
        "editorWhitespace.foreground": "#ffffff1d",
        "editorWidget.background": "#21252b",
        "focusBorder": "#3e4452",
        "gitDecoration.ignoredResourceForeground": "#636b78",
        "input.background": "#1d1f23",
        "input.foreground": "#abb2bf",
        "list.activeSelectionBackground": "#2c313a",
        "list.activeSelectionForeground": "#d7dae0",
        "list.focusBackground": "#323842",
        "list.focusForeground": "#f0f0f0",
        "list.highlightForeground": "#ecebeb",
        "list.hoverBackground": "#2c313a",
        "list.hoverForeground": "#abb2bf",
        "list.inactiveSelectionBackground": "#323842",
        "list.inactiveSelectionForeground": "#d7dae0",
        "list.warningForeground": "#d19a66",
        "menu.foreground": "#abb2bf",
        "menu.separatorBackground": "#343a45",
        "minimapGutter.addedBackground": "#109868",
        "minimapGutter.deletedBackground": "#9A353D",
        "minimapGutter.modifiedBackground": "#948B60",
        "panel.border": "#3e4452",
        "panelSectionHeader.background": "#21252b",
        "peekViewEditor.background": "#1b1d23",
        "peekViewEditor.matchHighlightBackground": "#29244b",
        "peekViewResult.background": "#22262b",
        "scrollbar.shadow": "#00000000",
        "scrollbarSlider.activeBackground": "#747d9180",
        "scrollbarSlider.background": "#4e566660",
        "scrollbarSlider.hoverBackground": "#5a637580",
        "settings.focusedRowBackground": "#282c34",
        "settings.headerForeground": "#fff",
        "sideBar.background": "#21252b",
        "sideBar.foreground": "#abb2bf",
        "sideBarSectionHeader.background": "#282c34",
        "sideBarSectionHeader.foreground": "#abb2bf",
        "statusBar.background": "#21252b",
        "statusBar.debuggingBackground": "#cc6633",
        "statusBar.debuggingBorder": "#ff000000",
        "statusBar.debuggingForeground": "#ffffff",
        "statusBar.foreground": "#9da5b4",
        "statusBar.noFolderBackground": "#21252b",
        "statusBarItem.remoteBackground": "#4d78cc",
        "statusBarItem.remoteForeground": "#f8fafd",
        "tab.activeBackground": "#282c34",
        "tab.activeBorder": "#b4b4b4",
        "tab.activeForeground": "#dcdcdc",
        "tab.border": "#181a1f",
        "tab.hoverBackground": "#323842",
        "tab.inactiveBackground": "#21252b",
        "tab.unfocusedHoverBackground": "#323842",
        "terminal.ansiBlack": "#3f4451",
        "terminal.ansiBlue": "#4aa5f0",
        "terminal.ansiBrightBlack": "#4f5666",
        "terminal.ansiBrightBlue": "#4dc4ff",
        "terminal.ansiBrightCyan": "#4cd1e0",
        "terminal.ansiBrightGreen": "#a5e075",
        "terminal.ansiBrightMagenta": "#de73ff",
        "terminal.ansiBrightRed": "#ff616e",
        "terminal.ansiBrightWhite": "#e6e6e6",
        "terminal.ansiBrightYellow": "#f0a45d",
        "terminal.ansiCyan": "#42b3c2",
        "terminal.ansiGreen": "#8cc265",
        "terminal.ansiMagenta": "#c162de",
        "terminal.ansiRed": "#e05561",
        "terminal.ansiWhite": "#d7dae0",
        "terminal.ansiYellow": "#d18f52",
        "terminal.background": "#282c34",
        "terminal.border": "#3e4452",
        "terminal.foreground": "#abb2bf",
        "terminal.selectionBackground": "#abb2bf30",
        "textBlockQuote.background": "#2e3440",
        "textBlockQuote.border": "#4b5362",
        "textLink.foreground": "#61afef",
        "textPreformat.foreground": "#d19a66",
        "titleBar.activeBackground": "#282c34",
        "titleBar.activeForeground": "#9da5b4",
        "titleBar.inactiveBackground": "#282c34",
        "titleBar.inactiveForeground": "#6b717d",
        "tree.indentGuidesStroke": "#ffffff1d",
        "walkThrough.embeddedEditorBackground": "#2e3440",
        "welcomePage.buttonHoverBackground": "#404754"
    },
    "rules": [
        {
            "foreground": "#abb2bf",
            "token": "meta.embedded"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.delayed.unison"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.list.begin.unison"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.list.end.unison"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.ability.begin.unison"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.ability.end.unison"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.operator.assignment.as.unison"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.separator.pipe.unison"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.separator.delimiter.unison"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.hash.unison"
        },
        {
            "foreground": "#c678dd",
            "token": "variable.other.generic-type.haskell"
        },
        {
            "foreground": "#d19a66",
            "token": "storage.type.haskell"
        },
        {
            "foreground": "#e06c75",
            "token": "support.variable.magic.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.period.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.element.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.parenthesis.begin.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.parenthesis.end.python"
        },
        {
            "foreground": "#e5c07b",
            "token": "variable.parameter.function.language.special.self.python"
        },
        {
            "foreground": "#e5c07b",
            "token": "variable.parameter.function.language.special.cls.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "storage.modifier.lifetime.rust"
        },
        {
            "foreground": "#61afef",
            "token": "support.function.std.rust"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.lifetime.rust"
        },
        {
            "foreground": "#e06c75",
            "token": "variable.language.rust"
        },
        {
            "foreground": "#c678dd",
            "token": "support.constant.edge"
        },
        {
            "foreground": "#e06c75",
            "token": "constant.other.character-class.regexp"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.word"
        },
        {
            "foreground": "#d19a66",
            "token": "keyword.operator.quantifier.regexp"
        },
        {
            "foreground": "#abb2bf",
            "token": "variable.parameter.function"
        },
        {
            "foreground": "#5c6370",
            "token": "comment markup.link"
        },
        {
            "foreground": "#e5c07b",
            "token": "markup.changed.diff"
        },
        {
            "foreground": "#61afef",
            "token": "meta.diff.header.from-file"
        },
        {
            "foreground": "#61afef",
            "token": "meta.diff.header.to-file"
        },
        {
            "foreground": "#61afef",
            "token": "punctuation.definition.from-file.diff"
        },
        {
            "foreground": "#61afef",
            "token": "punctuation.definition.to-file.diff"
        },
        {
            "foreground": "#98c379",
            "token": "markup.inserted.diff"
        },
        {
            "foreground": "#e06c75",
            "token": "markup.deleted.diff"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.function.c"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.function.cpp"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.block.begin.bracket.curly.cpp"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.block.end.bracket.curly.cpp"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.terminator.statement.c"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.block.begin.bracket.curly.c"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.block.end.bracket.curly.c"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.parens.begin.bracket.round.c"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.parens.end.bracket.round.c"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.parameters.begin.bracket.round.c"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.parameters.end.bracket.round.c"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.key-value"
        },
        {
            "foreground": "#61afef",
            "token": "keyword.operator.expression.import"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.constant.math"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.property.math"
        },
        {
            "foreground": "#e5c07b",
            "token": "variable.other.constant"
        },
        {
            "foreground": "#e5c07b",
            "token": "storage.type.annotation.java"
        },
        {
            "foreground": "#e5c07b",
            "token": "storage.type.object.array.java"
        },
        {
            "foreground": "#e06c75",
            "token": "source.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.block.begin.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.block.end.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.method-parameters.begin.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.method-parameters.end.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "meta.method.identifier.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.method.begin.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.method.end.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.terminator.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.class.begin.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.class.end.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.inner-class.begin.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.inner-class.end.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "meta.method-call.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.class.begin.bracket.curly.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.class.end.bracket.curly.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.method.begin.bracket.curly.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.method.end.bracket.curly.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.period.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.bracket.angle.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.annotation.java"
        },
        {
            "foreground": "#abb2bf",
            "token": "meta.method.body.java"
        },
        {
            "foreground": "#61afef",
            "token": "meta.method.java"
        },
        {
            "foreground": "#e5c07b",
            "token": "storage.modifier.import.java"
        },
        {
            "foreground": "#e5c07b",
            "token": "storage.type.java"
        },
        {
            "foreground": "#e5c07b",
            "token": "storage.type.generic.java"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.instanceof.java"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.definition.variable.name.java"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.logical"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.bitwise"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.channel"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.property-value.scss"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.property-value.css"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.css"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.scss"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.less"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.color.w3c-standard-color-name.css"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.color.w3c-standard-color-name.scss"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.list.comma.css"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.color.w3c-standard-color-name.css"
        },
        {
            "foreground": "#56b6c2",
            "token": "support.type.vendored.property-name.css"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.module.node"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.type.object.module"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.module.node"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.type.module"
        },
        {
            "foreground": "#e06c75",
            "token": "variable.other.readwrite"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.object-literal.key"
        },
        {
            "foreground": "#e06c75",
            "token": "support.variable.property"
        },
        {
            "foreground": "#e06c75",
            "token": "support.variable.object.process"
        },
        {
            "foreground": "#e06c75",
            "token": "support.variable.object.node"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.json"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.instanceof"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.new"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.ternary"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.optional"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.keyof"
        },
        {
            "foreground": "#e06c75",
            "token": "support.type.object.console"
        },
        {
            "foreground": "#d19a66",
            "token": "support.variable.property.process"
        },
        {
            "foreground": "#61afef",
            "token": "entity.name.function"
        },
        {
            "foreground": "#61afef",
            "token": "support.function.console"
        },
        {
            "foreground": "#abb2bf",
            "token": "keyword.operator.misc.rust"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.sigil.rust"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.delete"
        },
        {
            "foreground": "#56b6c2",
            "token": "support.type.object.dom"
        },
        {
            "foreground": "#e06c75",
            "token": "support.variable.dom"
        },
        {
            "foreground": "#e06c75",
            "token": "support.variable.property.dom"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.arithmetic"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.comparison"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.decrement"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.increment"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.relational"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.assignment.c"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.comparison.c"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.c"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.increment.c"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.decrement.c"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.bitwise.shift.c"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.assignment.cpp"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.comparison.cpp"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.cpp"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.increment.cpp"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.decrement.cpp"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.bitwise.shift.cpp"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.delimiter"
        },
        {
            "foreground": "#c678dd",
            "token": "punctuation.separator.c"
        },
        {
            "foreground": "#c678dd",
            "token": "punctuation.separator.cpp"
        },
        {
            "foreground": "#56b6c2",
            "token": "support.type.posix-reserved.c"
        },
        {
            "foreground": "#56b6c2",
            "token": "support.type.posix-reserved.cpp"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.sizeof.c"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.sizeof.cpp"
        },
        {
            "foreground": "#d19a66",
            "token": "variable.parameter.function.language.python"
        },
        {
            "foreground": "#56b6c2",
            "token": "support.type.python"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.logical.python"
        },
        {
            "foreground": "#d19a66",
            "token": "variable.parameter.function.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.arguments.begin.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.arguments.end.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.arguments.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.list.begin.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.list.end.python"
        },
        {
            "foreground": "#61afef",
            "token": "meta.function-call.generic.python"
        },
        {
            "foreground": "#d19a66",
            "token": "constant.character.format.placeholder.other.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "keyword.operator"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.assignment.compound"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.assignment.compound.js"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.assignment.compound.ts"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.namespace"
        },
        {
            "foreground": "#e06c75",
            "token": "variable"
        },
        {
            "foreground": "#abb2bf",
            "token": "variable.c"
        },
        {
            "foreground": "#e5c07b",
            "token": "variable.language"
        },
        {
            "foreground": "#abb2bf",
            "token": "token.variable.parameter.java"
        },
        {
            "foreground": "#e5c07b",
            "token": "import.storage.java"
        },
        {
            "foreground": "#c678dd",
            "token": "token.package.keyword"
        },
        {
            "foreground": "#abb2bf",
            "token": "token.package"
        },
        {
            "foreground": "#61afef",
            "token": "entity.name.function"
        },
        {
            "foreground": "#61afef",
            "token": "meta.require"
        },
        {
            "foreground": "#61afef",
            "token": "support.function.any-method"
        },
        {
            "foreground": "#61afef",
            "token": "variable.function"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.type.namespace"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.class"
        },
        {
            "foreground": "#e5c07b",
            "token": " entity.name.type.class"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.class.identifier.namespace.type"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.class"
        },
        {
            "foreground": "#e5c07b",
            "token": "variable.other.class.js"
        },
        {
            "foreground": "#e5c07b",
            "token": "variable.other.class.ts"
        },
        {
            "foreground": "#e06c75",
            "token": "variable.other.class.php"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.type"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.control"
        },
        {
            "foreground": "#d19a66",
            "token": "control.elements"
        },
        {
            "foreground": "#d19a66",
            "token": " keyword.operator.less"
        },
        {
            "foreground": "#61afef",
            "token": "keyword.other.special-method"
        },
        {
            "foreground": "#c678dd",
            "token": "storage"
        },
        {
            "foreground": "#c678dd",
            "token": "token.storage"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.delete"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.in"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.of"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.instanceof"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.new"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.typeof"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.void"
        },
        {
            "foreground": "#e5c07b",
            "token": "token.storage.type.java"
        },
        {
            "foreground": "#56b6c2",
            "token": "support.function"
        },
        {
            "foreground": "#abb2bf",
            "token": "support.type.property-name"
        },
        {
            "foreground": "#e06c75",
            "token": "support.type.property-name.toml"
        },
        {
            "foreground": "#e06c75",
            "token": " support.type.property-name.table.toml"
        },
        {
            "foreground": "#e06c75",
            "token": " support.type.property-name.array.toml"
        },
        {
            "foreground": "#abb2bf",
            "token": "support.constant.property-value"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.font-name"
        },
        {
            "foreground": "#abb2bf",
            "token": "meta.tag"
        },
        {
            "foreground": "#98c379",
            "token": "string"
        },
        {
            "foreground": "#56b6c2",
            "token": "constant.other.symbol"
        },
        {
            "foreground": "#d19a66",
            "token": "constant.numeric"
        },
        {
            "foreground": "#d19a66",
            "token": "constant"
        },
        {
            "foreground": "#d19a66",
            "token": "punctuation.definition.constant"
        },
        {
            "foreground": "#e06c75",
            "token": "entity.name.tag"
        },
        {
            "foreground": "#d19a66",
            "token": "entity.other.attribute-name"
        },
        {
            "foreground": "#61afef",
            "token": "entity.other.attribute-name.id"
        },
        {
            "foreground": "#d19a66",
            "token": "entity.other.attribute-name.class.css"
        },
        {
            "foreground": "#c678dd",
            "token": "meta.selector"
        },
        {
            "foreground": "#e06c75",
            "token": "markup.heading"
        },
        {
            "foreground": "#61afef",
            "token": "markup.heading punctuation.definition.heading"
        },
        {
            "foreground": "#61afef",
            "token": " entity.name.section"
        },
        {
            "foreground": "#e06c75",
            "token": "keyword.other.unit"
        },
        {
            "foreground": "#d19a66",
            "token": "markup.bold"
        },
        {
            "foreground": "#d19a66",
            "token": "todo.bold"
        },
        {
            "foreground": "#e5c07b",
            "token": "punctuation.definition.bold"
        },
        {
            "foreground": "#c678dd",
            "token": "markup.italic"
        },
        {
            "foreground": "#c678dd",
            "token": " punctuation.definition.italic"
        },
        {
            "foreground": "#c678dd",
            "token": "todo.emphasis"
        },
        {
            "foreground": "#c678dd",
            "token": "emphasis md"
        },
        {
            "foreground": "#e06c75",
            "token": "entity.name.section.markdown"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.heading.markdown"
        },
        {
            "foreground": "#e5c07b",
            "token": "punctuation.definition.list.begin.markdown"
        },
        {
            "foreground": "#abb2bf",
            "token": "markup.heading.setext"
        },
        {
            "foreground": "#d19a66",
            "token": "punctuation.definition.bold.markdown"
        },
        {
            "foreground": "#98c379",
            "token": "markup.inline.raw.markdown"
        },
        {
            "foreground": "#98c379",
            "token": "markup.inline.raw.string.markdown"
        },
        {
            "foreground": "#e5c07b",
            "token": "punctuation.definition.raw.markdown"
        },
        {
            "foreground": "#e5c07b",
            "token": "punctuation.definition.list.markdown"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.string.begin.markdown"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.string.end.markdown"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.metadata.markdown"
        },
        {
            "foreground": "#e06c75",
            "token": "beginning.punctuation.definition.list.markdown"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.definition.metadata.markdown"
        },
        {
            "foreground": "#c678dd",
            "token": "markup.underline.link.markdown"
        },
        {
            "foreground": "#c678dd",
            "token": "markup.underline.link.image.markdown"
        },
        {
            "foreground": "#61afef",
            "token": "string.other.link.title.markdown"
        },
        {
            "foreground": "#61afef",
            "token": "string.other.link.description.markdown"
        },
        {
            "foreground": "#98c379",
            "token": "markup.raw.monospace.asciidoc"
        },
        {
            "foreground": "#e5c07b",
            "token": "punctuation.definition.asciidoc"
        },
        {
            "foreground": "#e5c07b",
            "token": "markup.list.asciidoc"
        },
        {
            "foreground": "#c678dd",
            "token": "markup.link.asciidoc"
        },
        {
            "foreground": "#c678dd",
            "token": "markup.other.url.asciidoc"
        },
        {
            "foreground": "#61afef",
            "token": "string.unquoted.asciidoc"
        },
        {
            "foreground": "#61afef",
            "token": "markup.other.url.asciidoc"
        },
        {
            "foreground": "#56b6c2",
            "token": "string.regexp"
        },
        {
            "foreground": "#e06c75",
            "token": "punctuation.section.embedded"
        },
        {
            "foreground": "#e06c75",
            "token": " variable.interpolation"
        },
        {
            "foreground": "#c678dd",
            "token": "punctuation.section.embedded.begin"
        },
        {
            "foreground": "#c678dd",
            "token": "punctuation.section.embedded.end"
        },
        {
            "foreground": "#ffffff",
            "token": "invalid.illegal"
        },
        {
            "foreground": "#abb2bf",
            "token": "invalid.illegal.bad-ampersand.html"
        },
        {
            "foreground": "#e06c75",
            "token": "invalid.illegal.unrecognized-tag.html"
        },
        {
            "foreground": "#ffffff",
            "token": "invalid.broken"
        },
        {
            "foreground": "#ffffff",
            "token": "invalid.deprecated"
        },
        {
            "foreground": "#d19a66",
            "token": "invalid.deprecated.entity.other.attribute-name.html"
        },
        {
            "foreground": "#ffffff",
            "token": "invalid.unimplemented"
        },
        {
            "foreground": "#e06c75",
            "token": "source.json meta.structure.dictionary.json > string.quoted.json"
        },
        {
            "foreground": "#e06c75",
            "token": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string"
        },
        {
            "foreground": "#98c379",
            "token": "source.json meta.structure.dictionary.json > value.json > string.quoted.json"
        },
        {
            "foreground": "#98c379",
            "token": "source.json meta.structure.array.json > value.json > string.quoted.json"
        },
        {
            "foreground": "#98c379",
            "token": "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation"
        },
        {
            "foreground": "#98c379",
            "token": "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation"
        },
        {
            "foreground": "#56b6c2",
            "token": "source.json meta.structure.dictionary.json > constant.language.json"
        },
        {
            "foreground": "#56b6c2",
            "token": "source.json meta.structure.array.json > constant.language.json"
        },
        {
            "foreground": "#e06c75",
            "token": "support.type.property-name.json"
        },
        {
            "foreground": "#e06c75",
            "token": "support.type.property-name.json punctuation"
        },
        {
            "foreground": "#c678dd",
            "token": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade"
        },
        {
            "foreground": "#c678dd",
            "token": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.other.namespace.use.php"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.other.namespace.use-as.php"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.other.alias.php"
        },
        {
            "foreground": "#e5c07b",
            "token": "meta.interface.php"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.error-control.php"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.type.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.array.begin.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.array.end.php"
        },
        {
            "foreground": "#f44747",
            "token": "invalid.illegal.non-null-typehinted.php"
        },
        {
            "foreground": "#e5c07b",
            "token": "storage.type.php"
        },
        {
            "foreground": "#e5c07b",
            "token": "meta.other.type.phpdoc.php"
        },
        {
            "foreground": "#e5c07b",
            "token": "keyword.other.type.php"
        },
        {
            "foreground": "#e5c07b",
            "token": "keyword.other.array.phpdoc.php"
        },
        {
            "foreground": "#61afef",
            "token": "meta.function-call.php"
        },
        {
            "foreground": "#61afef",
            "token": "meta.function-call.object.php"
        },
        {
            "foreground": "#61afef",
            "token": "meta.function-call.static.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.parameters.begin.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.parameters.end.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.delimiter.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.scope.begin.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.section.scope.end.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.terminator.expression.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.arguments.begin.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.arguments.end.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.storage-type.begin.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.storage-type.end.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.array.begin.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.array.end.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.begin.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.end.bracket.round.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.begin.bracket.curly.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.end.bracket.curly.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.section.switch-block.end.bracket.curly.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.section.switch-block.start.bracket.curly.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.section.switch-block.begin.bracket.curly.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.section.switch-block.end.bracket.curly.php"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.core.rust"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.ext.php"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.std.php"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.core.php"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.parser-token.php"
        },
        {
            "foreground": "#61afef",
            "token": "entity.name.goto-label.php"
        },
        {
            "foreground": "#61afef",
            "token": "support.other.php"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.logical.php"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.bitwise.php"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.arithmetic.php"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.regexp.php"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.comparison.php"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.heredoc.php"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.nowdoc.php"
        },
        {
            "foreground": "#61afef",
            "token": "meta.function.decorator.python"
        },
        {
            "foreground": "#56b6c2",
            "token": "support.token.decorator.python"
        },
        {
            "foreground": "#56b6c2",
            "token": "meta.function.decorator.identifier.python"
        },
        {
            "foreground": "#abb2bf",
            "token": "function.parameter"
        },
        {
            "foreground": "#abb2bf",
            "token": "function.brace"
        },
        {
            "foreground": "#abb2bf",
            "token": "function.parameter.ruby"
        },
        {
            "foreground": "#abb2bf",
            "token": " function.parameter.cs"
        },
        {
            "foreground": "#56b6c2",
            "token": "constant.language.symbol.ruby"
        },
        {
            "foreground": "#56b6c2",
            "token": "constant.language.symbol.hashkey.ruby"
        },
        {
            "foreground": "#56b6c2",
            "token": "rgb-value"
        },
        {
            "foreground": "#d19a66",
            "token": "inline-color-decoration rgb-value"
        },
        {
            "foreground": "#d19a66",
            "token": "less rgb-value"
        },
        {
            "foreground": "#e06c75",
            "token": "selector.sass"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.type.primitive.ts"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.type.builtin.ts"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.type.primitive.tsx"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.type.builtin.tsx"
        },
        {
            "foreground": "#abb2bf",
            "token": "block.scope.end"
        },
        {
            "foreground": "#abb2bf",
            "token": "block.scope.begin"
        },
        {
            "foreground": "#e5c07b",
            "token": "storage.type.cs"
        },
        {
            "foreground": "#e06c75",
            "token": "entity.name.variable.local.cs"
        },
        {
            "foreground": "#61afef",
            "token": "token.info-token"
        },
        {
            "foreground": "#d19a66",
            "token": "token.warn-token"
        },
        {
            "foreground": "#f44747",
            "token": "token.error-token"
        },
        {
            "foreground": "#c678dd",
            "token": "token.debug-token"
        },
        {
            "foreground": "#c678dd",
            "token": "punctuation.definition.template-expression.begin"
        },
        {
            "foreground": "#c678dd",
            "token": "punctuation.definition.template-expression.end"
        },
        {
            "foreground": "#c678dd",
            "token": "punctuation.section.embedded"
        },
        {
            "foreground": "#abb2bf",
            "token": "meta.template.expression"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.module"
        },
        {
            "foreground": "#61afef",
            "token": "support.type.type.flowtype"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.type.primitive"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.property.object"
        },
        {
            "foreground": "#e06c75",
            "token": "variable.parameter.function.js"
        },
        {
            "foreground": "#98c379",
            "token": "keyword.other.template.begin"
        },
        {
            "foreground": "#98c379",
            "token": "keyword.other.template.end"
        },
        {
            "foreground": "#98c379",
            "token": "keyword.other.substitution.begin"
        },
        {
            "foreground": "#98c379",
            "token": "keyword.other.substitution.end"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.operator.assignment"
        },
        {
            "foreground": "#e5c07b",
            "token": "keyword.operator.assignment.go"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.arithmetic.go"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.address.go"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.package.go"
        },
        {
            "foreground": "#56b6c2",
            "token": "support.type.prelude.elm"
        },
        {
            "foreground": "#d19a66",
            "token": "support.constant.elm"
        },
        {
            "foreground": "#c678dd",
            "token": "punctuation.quasi.element"
        },
        {
            "foreground": "#e06c75",
            "token": "constant.character.entity"
        },
        {
            "foreground": "#56b6c2",
            "token": "entity.other.attribute-name.pseudo-element"
        },
        {
            "foreground": "#56b6c2",
            "token": "entity.other.attribute-name.pseudo-class"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.global.clojure"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.symbol.clojure"
        },
        {
            "foreground": "#56b6c2",
            "token": "constant.keyword.clojure"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.arguments.coffee"
        },
        {
            "foreground": "#e06c75",
            "token": "variable.parameter.function.coffee"
        },
        {
            "foreground": "#98c379",
            "token": "source.ini"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.scope.prerequisites.makefile"
        },
        {
            "foreground": "#e5c07b",
            "token": "source.makefile"
        },
        {
            "foreground": "#e5c07b",
            "token": "storage.modifier.import.groovy"
        },
        {
            "foreground": "#61afef",
            "token": "meta.method.groovy"
        },
        {
            "foreground": "#e06c75",
            "token": "meta.definition.variable.name.groovy"
        },
        {
            "foreground": "#98c379",
            "token": "meta.definition.class.inherited.classes.groovy"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.variable.semantic.hlsl"
        },
        {
            "foreground": "#c678dd",
            "token": "support.type.texture.hlsl"
        },
        {
            "foreground": "#c678dd",
            "token": "support.type.sampler.hlsl"
        },
        {
            "foreground": "#c678dd",
            "token": "support.type.object.hlsl"
        },
        {
            "foreground": "#c678dd",
            "token": "support.type.object.rw.hlsl"
        },
        {
            "foreground": "#c678dd",
            "token": "support.type.fx.hlsl"
        },
        {
            "foreground": "#c678dd",
            "token": "support.type.object.hlsl"
        },
        {
            "foreground": "#e06c75",
            "token": "text.variable"
        },
        {
            "foreground": "#e06c75",
            "token": "text.bracketed"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.type.swift"
        },
        {
            "foreground": "#e5c07b",
            "token": "support.type.vb.asp"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.function.xi"
        },
        {
            "foreground": "#56b6c2",
            "token": "entity.name.class.xi"
        },
        {
            "foreground": "#e06c75",
            "token": "constant.character.character-class.regexp.xi"
        },
        {
            "foreground": "#c678dd",
            "token": "constant.regexp.xi"
        },
        {
            "foreground": "#56b6c2",
            "token": "keyword.control.xi"
        },
        {
            "foreground": "#abb2bf",
            "token": "invalid.xi"
        },
        {
            "foreground": "#98c379",
            "token": "beginning.punctuation.definition.quote.markdown.xi"
        },
        {
            "foreground": "#7f848e",
            "token": "beginning.punctuation.definition.list.markdown.xi"
        },
        {
            "foreground": "#61afef",
            "token": "constant.character.xi"
        },
        {
            "foreground": "#61afef",
            "token": "accent.xi"
        },
        {
            "foreground": "#d19a66",
            "token": "wikiword.xi"
        },
        {
            "foreground": "#ffffff",
            "token": "constant.other.color.rgb-value.xi"
        },
        {
            "foreground": "#5c6370",
            "token": "punctuation.definition.tag.xi"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.label.cs"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.scope-resolution.function.call"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.scope-resolution.function.definition"
        },
        {
            "foreground": "#e06c75",
            "token": "entity.name.label.cs"
        },
        {
            "foreground": "#e06c75",
            "token": "markup.heading.setext.1.markdown"
        },
        {
            "foreground": "#e06c75",
            "token": "markup.heading.setext.2.markdown"
        },
        {
            "foreground": "#abb2bf",
            "token": " meta.brace.square"
        },
        {
            "foreground": "#7f848e",
            "fontStyle": "italic",
            "token": "comment"
        },
        {
            "foreground": "#7f848e",
            "fontStyle": "italic",
            "token": " punctuation.definition.comment"
        },
        {
            "foreground": "#5c6370",
            "token": "markup.quote.markdown"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.definition.block.sequence.item.yaml"
        },
        {
            "foreground": "#56b6c2",
            "token": "constant.language.symbol.elixir"
        },
        {
            "foreground": "#56b6c2",
            "token": "constant.language.symbol.double-quoted.elixir"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.name.variable.parameter.cs"
        },
        {
            "foreground": "#e06c75",
            "token": "entity.name.variable.field.cs"
        },
        {
            "foreground": "#e06c75",
            "token": "markup.deleted"
        },
        {
            "foreground": "#98c379",
            "token": "markup.inserted"
        },
        {
            "fontStyle": "underline",
            "token": "markup.underline"
        },
        {
            "foreground": "#BE5046",
            "token": "punctuation.section.embedded.begin.php"
        },
        {
            "foreground": "#BE5046",
            "token": "punctuation.section.embedded.end.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "support.other.namespace.php"
        },
        {
            "foreground": "#e06c75",
            "token": "variable.parameter.function.latex"
        },
        {
            "foreground": "#e5c07b",
            "token": "variable.other.object"
        },
        {
            "foreground": "#e06c75",
            "token": "variable.other.constant.property"
        },
        {
            "foreground": "#e5c07b",
            "token": "entity.other.inherited-class"
        },
        {
            "foreground": "#e06c75",
            "token": "variable.other.readwrite.c"
        },
        {
            "foreground": "#abb2bf",
            "token": "entity.name.variable.parameter.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "punctuation.separator.colon.php"
        },
        {
            "foreground": "#abb2bf",
            "token": "constant.other.php"
        },
        {
            "foreground": "#c678dd",
            "token": "constant.numeric.decimal.asm.x86_64"
        },
        {
            "foreground": "#d19a66",
            "token": "support.other.parenthesis.regexp"
        },
        {
            "foreground": "#56b6c2",
            "token": "constant.character.escape"
        },
        {
            "foreground": "#e06c75",
            "token": "string.regexp"
        },
        {
            "foreground": "#98c379",
            "token": "log.info"
        },
        {
            "foreground": "#e5c07b",
            "token": "log.warning"
        },
        {
            "foreground": "#e06c75",
            "token": "log.error"
        },
        {
            "foreground": "#c678dd",
            "token": "keyword.operator.expression.is"
        },
        {
            "foreground": "#e06c75",
            "token": "entity.name.label"
        },
        {
            "fontStyle": "italic",
            "token": "entity.other.attribute-name.js"
        },
        {
            "fontStyle": "italic",
            "token": "entity.other.attribute-name.ts"
        },
        {
            "fontStyle": "italic",
            "token": "entity.other.attribute-name.jsx"
        },
        {
            "fontStyle": "italic",
            "token": "entity.other.attribute-name.tsx"
        },
        {
            "fontStyle": "italic",
            "token": "variable.parameter"
        },
        {
            "fontStyle": "italic",
            "token": "variable.language.super"
        },
        {
            "fontStyle": "italic",
            "token": "comment.line.double-slash"
        },
        {
            "fontStyle": "italic",
            "token": "comment.block.documentation"
        },
        {
            "fontStyle": "italic",
            "token": "markup.italic.markdown"
        }
    ],
    "encodedTokensColors": []
}

monaco.editor.defineTheme("mshx-dark", theme)
window.editor = monaco.editor.create(document.querySelector('.monaco-container'), {
    value: `function getTruth()\n    return "mushyhax on top!!"\nend\n\nprint(getTruth())`,
    language: 'lua',
    theme: 'mshx-dark',
    scrollBeyondLastLine: false,
    automaticLayout: true,
    minimap: { enabled: false },
    fontStyle: "Fira Code",
    renderWhitespace: 'boundary',
    guides: {
        indentation: false
    },
    tabSize: 4
});

if (window.editorCreated) {
    window.editorCreated()
}
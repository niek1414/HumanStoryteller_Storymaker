import {Node} from 'tiptap'
import {replaceText} from 'tiptap-commands'
import SuggestionsPlugin from "./SuggestionsPlugin";

export default class VariableMention extends Node {

  get name() {
    return 'vmention'
  }

  get defaultOptions() {
    return {
      matcher : {
        char : 'DISABLED',
        allowSpaces : false,
        startOfLine : false,
      },
      mentionClass : 'mention',
      suggestionClass : 'mention-suggestion',
    }
  }

  get schema() {
    return {
      attrs : {
        variable : {},
      },
      group : 'inline',
      inline : true,
      selectable : false,
      atom : true,
      toDOM : node => [
        'span',
        `/${node.attrs.variable}`,
      ],
      parseDOM : [
        {
          tag : 'span',
          getAttrs : dom => {
            if (!dom.innerText.startsWith("/")) return false;
            return {variable : dom.innerText.substring(1)}
          },
        },
      ],
    }
  }

  commands({schema}) {
    return attrs => replaceText(null, schema.nodes[this.name], attrs)
  }

  get plugins() {
    return [
      SuggestionsPlugin({
        command : ({range, attrs, schema}) => replaceText(range, schema.nodes[this.name], attrs),
        appendText : ' ',
        matcher : this.options.matcher,
        items : this.options.items,
        onEnter : this.options.onEnter,
        onChange : this.options.onChange,
        onExit : this.options.onExit,
        onKeyDown : this.options.onKeyDown,
        onFilter : this.options.onFilter,
        suggestionClass : this.options.suggestionClass,
      }),
    ]
  }
}
import {Mark} from 'tiptap'
import {toggleMark, updateMark} from 'tiptap-commands'

export default class FontSize extends Mark {

  get name() {
    return 'fontsize'
  }

  get defaultOptions() {
    return {
      levels : [5, 6, 7],
    }
  }

  get schema() {
    return {
      attrs : {
        level : {
          default : 5,
        },
      },
      parseDOM : [{
        tag : 'font',
        getAttrs : value => {
          const foundIndex = this.options.levels.findIndex(level => level == value.size);
          if (foundIndex > -1) return {level: value.size};
          return false;
        },
      }],
      toDOM : node => ['font', {"size" : node.attrs.level}, 0],

    }
  }

  commands({type}) {
    return attrs => {
      if (attrs.current && attrs.current !== attrs.level) {
        return updateMark(type, {level : attrs.level});
      }
      return toggleMark(type, {level : attrs.level});
    }
  }
}
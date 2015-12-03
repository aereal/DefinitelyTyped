// Type definitions for classlist

declare module ClassList {
  interface ClassListConstructor {
    (el: Element): ClassListObject;
    new(el: Element): ClassListObject;
  }

  interface ClassListObject {
    add(...names: string[]): ClassListObject;
    remove(...names: string[]): ClassListObject;
    contains(name: string): boolean;
    toggle(name: string, force?: boolean): ClassListObject;
  }
}

declare module 'classlist' {
  var classlist: ClassList.ClassListConstructor;
  export = classlist;
}

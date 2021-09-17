type Items = any[];

interface ObjType {
  items: Items;
  add: <T>(a: T) => Items;
}

const SomeObj: ObjType = {
  items: [1, 2, 3],
  add: function (a) {
    this.items.push(a);
    return this.items;
  }
};

SomeObj.add("3");

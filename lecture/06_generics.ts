interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

const backpack: Backpack<string> = {
  add: (myStr) => {
    myStr.slice(0, 1);
  },
  get: () => {
    return "Hi";
  },
};

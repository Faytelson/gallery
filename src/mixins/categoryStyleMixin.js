export const categoryStyleMixin = {
  methods: {
    getCategoryStyle(categories, category) {
      let style = {};
      for (let key in categories) {
        if (key === category) {
          style.color = categories[key];
        }
      }
      return style;
    },
  },
};

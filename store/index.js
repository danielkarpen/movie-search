// A data store for 'single source of truth' and 'uni-direction data flow'
export default {
  data: [],
  setData(newData) {
    // 'concat' is 'non-mutating'
    this.data = this.data.concat(newData);
  },
};

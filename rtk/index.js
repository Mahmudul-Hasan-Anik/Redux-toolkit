const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");
const { fatchPosts } = require("./features/post/postSlice");

// console.log(store.getState());

store.subscribe(() => {
  //   console.log(store.getState());
});

store.dispatch(fatchPosts());

// store.dispatch(counterActions.decrement());

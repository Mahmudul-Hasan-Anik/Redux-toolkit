const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fatch = require("node-fetch");

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const fatchPosts = createAsyncThunk("post/fatchPosts", async () => {
  const response = await fatch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const posts = await response.json();
  return posts;
});

const postSlice = createSlice({
  name: "post",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fatchPosts.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(fatchPosts.fulfilled, (state, action) => {
      (state.loading = false),
        (state.posts = action.payload),
        (state.error = "");
    });
    builder.addCase(fatchPosts.rejected, (state, action) => {
      (state.loading = false),
        (state.posts = []),
        (state.error = action.error.message);
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fatchPosts = fatchPosts;

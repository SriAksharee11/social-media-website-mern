// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   mode: "light",
//   user: null,
//   token: null,
//   posts: [],
// };

// export const authSlice = createSlice({     
//   name: "auth",
//   initialState,
//   reducers: {
//     setMode: (state) => {
//       state.mode = state.mode === "light" ? "dark" : "light";
//     },
//     setLogin: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     setLogout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//     setFriends: (state, action) => {
//       if (state.user) {
//         state.user.friends = action.payload.friends;
//       } else {
//         console.error("user friends non-existent :(");
//       }
//     },
//     setPosts: (state, action) => {
//       state.posts = action.payload.posts;
//     },
//     setPost: (state, action) => {
//       const updatedPosts = state.posts.map((post) => {
//         if (post._id === action.payload.post._id) return action.payload.post;
//         return post;
//       });
//       state.posts = updatedPosts;

//     },

  
//   },
// });

// export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
//   authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;

      // Find the post in state
      const post = state.posts.find((post) => post._id === postId);

      if (post) {
        // Add the comment to the post's comments array
        post.comments.push(comment);

        // Update the state with the modified post
        state.posts = state.posts.map((p) =>
          p._id === postId ? { ...p, comments: [...post.comments] } : p
        );
      } else {
        console.error("Post not found!");
      }
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, addComment } = authSlice.actions;

export default authSlice.reducer;

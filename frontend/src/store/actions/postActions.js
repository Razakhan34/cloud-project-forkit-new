import axios from "axios";
import {
  myPostActions,
  postActions,
  userPostActions,
} from "../slices/postSlices";

export const postLikeAndDislike = (id) => {
  return async (dispatch) => {
    dispatch(postActions.postRequest());
    try {
      const { data } = await axios.get(`/api/v1/posts/${id}`);
      if (data.success) {
        dispatch(postActions.likeSuccess(data.message));
      }
    } catch (error) {
      dispatch(postActions.postFail(error.response.data.message));
    }
  };
};

export const postComment = (id, comment) => {
  return async (dispatch) => {
    dispatch(postActions.postRequest());
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.patch(
        `/api/v1/posts/comments/${id}`,
        { comment },
        config
      );
      if (data.success) {
        dispatch(postActions.commentSuccess(data.message));
      }
    } catch (error) {
      dispatch(postActions.postFail(error.response.data.message));
    }
  };
};
export const postCommentDelete = (id, commentId) => {
  return async (dispatch) => {
    dispatch(postActions.postRequest());
    try {
      const { data } = await axios.delete(`/api/v1/posts/comments/${id}`, {
        data: { commentId },
      });
      if (data.success) {
        dispatch(postActions.commentDeleteSuccess(data.message));
      }
    } catch (error) {
      dispatch(postActions.postFail(error.response.data.message));
    }
  };
};
export const getAllMyPosts = () => {
  return async (dispatch) => {
    dispatch(myPostActions.myPostRequest());
    try {
      const { data } = await axios.get(`/api/v1/users/getMyPosts`);
      if (data.success) {
        dispatch(myPostActions.myPostSuccess(data.posts));
      }
    } catch (error) {
      dispatch(myPostActions.myPostFail(error.response.data.message));
    }
  };
};

export const createPost = (postData) => {
  return async (dispatch) => {
    dispatch(postActions.postRequest());
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`/api/v1/posts/`, postData, config);
      if (data.success) {
        dispatch(postActions.newPostSuccess(data.message));
      }
    } catch (error) {
      dispatch(postActions.postFail(error.response.data.message));
    }
  };
};
export const deletePost = (id) => {
  return async (dispatch) => {
    dispatch(postActions.postRequest());
    try {
      const { data } = await axios.delete(`/api/v1/posts/${id}`);
      if (data.success) {
        dispatch(postActions.deletePostSuccess(data.message));
      }
    } catch (error) {
      dispatch(postActions.postFail(error.response.data.message));
    }
  };
};

export const updateCaption = (postId, caption) => {
  return async (dispatch) => {
    dispatch(postActions.postRequest());
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.patch(
        `/api/v1/posts/${postId}`,
        {
          caption,
        },
        config
      );
      if (data.success) {
        dispatch(postActions.updateCaptionSuccess(data.message));
      }
    } catch (error) {
      dispatch(postActions.postFail(error.response.data.message));
    }
  };
};

export const getAllPostOfUser = (userId) => {
  return async (dispatch) => {
    dispatch(userPostActions.userPostRequest());
    try {
      const { data } = await axios.get(`/api/v1/users/getUserPosts/${userId}`);
      if (data.success) {
        dispatch(userPostActions.userPostSuccess(data.posts));
      }
    } catch (error) {
      dispatch(userPostActions.userPostFail(error.response.data.message));
    }
  };
};

export const clearPostError = () => {
  return (dispatch) => {
    dispatch(postActions.clearError());
  };
};

export const clearPostMessage = () => {
  return (dispatch) => {
    dispatch(postActions.clearMessage());
  };
};
export const clearMyPostError = () => {
  return (dispatch) => {
    dispatch(myPostActions.clearError());
  };
};
export const clearUserPostError = () => {
  return (dispatch) => {
    dispatch(userPostActions.clearError());
  };
};

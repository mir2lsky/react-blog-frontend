import QueryString from 'qs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { listPosts } from '../../modules/posts';
import PostList from '../../components/posts/PostList';

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const { search: searchString } = useLocation();
  console.log(
    'PostListContainer > username, searchString',
    username,
    searchString,
  );

  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  // 처음 랜더링될때, 중간에 사용자 이름이나 searchString에 변경이 일어날때 실행됨
  // 즉, 리스트에서 사용자 이름이나 태그를 클릭하면 실행됨
  useEffect(() => {
    const { tag, page } = QueryString.parse(searchString, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, searchString, username]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default PostListContainer;

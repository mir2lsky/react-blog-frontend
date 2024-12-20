import QueryString from 'qs';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Pagination from '../../components/posts/Pagination';

const PaginationContainer = () => {
  const { search: searchString } = useLocation();
  const { username } = useParams();
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POST'],
  }));

  // post 데이터가 없거나 로딩중이면 아무 것도 보여주지 않음
  if (!posts || loading) return null;

  // page가 없으면 1을 기본값으로 사용
  const { tag, page = 1 } = QueryString.parse(searchString, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;

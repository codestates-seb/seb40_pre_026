import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import axios from 'axios';
import url from '../url';

function Posts() {
  const [posts, setPosts] = useState([]);
  // const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  const header = {
    headers: {
      'ngrok-skip-browser-warning': 'skip',
    },
  };

  const getData = async () => {
    await axios
      .get(url + '/questions', header)
      .then((res) => {
        setQData(res.data.body);
        // console.log('데이터' + qData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    console.log('모든질문 조회');
  }, []);

  return (
    <Layout>
      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          {/* <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option> */}
        </select>
      </label>

      <main>
        {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
          <article key={id}>
            <h3>
              {id}. {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </main>

      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Posts;

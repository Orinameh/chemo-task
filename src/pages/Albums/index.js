import { useState } from "react";
import styled from "styled-components";
import { Album } from "../../components/album/Album";
import { Pagination } from "../../components/pagination/Pagination";
import { Util } from "../../components/shared/Util";
import { useFetchPhotos } from "../../hooks";

const Title = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;

const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 3rem;
  gap: 3rem;
`;

function Albums() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const { data: albums, loading, error } = useFetchPhotos(page, limit);

  if (loading) {
    return <Util testId="loading" text="Loading...." />;
  }

  if (error) {
    return <Util testId="error" text="An error has occurred." />;
  }

  return (
    <div data-testid="albums">
      <Title data-testid="title">Photo Albums</Title>
      <AlbumContainer>
        {albums?.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </AlbumContainer>
      <Pagination
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default Albums;

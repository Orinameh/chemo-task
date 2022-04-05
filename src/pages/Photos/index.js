import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Photo } from "../../components/photo/Photo";
import { Util } from "../../components/shared/Util";
import { useFetchPhotos } from "../../hooks";
import { Pagination } from "../../components/pagination/Pagination";
import Modal from "../../components/modal/Modal";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8rem;
  margin-top: 3rem;
  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

const BackButton = styled.a`
  font-size: 2.5rem;
  cursor: pointer;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;

const SubTitle = styled.h4`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 3rem;
  gap: 1rem;
`;

function Photos() {
  const { id, title, owner } = useParams();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const [selected, setSelected] = useState();

  const navigate = useNavigate();
  const goBack = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      navigate(-1);
      return;
    }
  };

  const { data: photos, loading, error } = useFetchPhotos(id, page, limit);

  if (loading) {
    return <Util text="Loading Photos..." />;
  }

  if (error) {
    return <Util text="An error has occurred." />;
  }

  const onHide = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setSelected(undefined);
      return;
    }
  };
  return (
    <div data-testid="photos">
      <Top>
        <BackButton
          role={"navigation"}
          tabIndex={0}
          onClick={goBack}
          onKeyDown={goBack}
        >
          &#x2190;
        </BackButton>
        <Title data-testid="title">{title} Photos</Title>
        <div />
      </Top>
      <SubTitle>by {owner}</SubTitle>
      <PhotoContainer>
        {photos?.map((photo) => (
          <Photo key={photo.id} photo={photo} setSelected={setSelected} />
        ))}
      </PhotoContainer>
      <Pagination
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
      />

      <Modal isShown={selected} hide={onHide}>
        <img src={selected?.url} alt={selected?.title} loading="lazy" />
        <p>
          <b>Album Title:</b> {title}
        </p>
        <p>
          <b>Photo Owner:</b> {owner}
        </p>
        <p>
          <b>Photo title:</b> {selected?.title}
        </p>
      </Modal>
    </div>
  );
}

export default Photos;

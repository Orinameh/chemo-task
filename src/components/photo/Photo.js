import styled from "styled-components";

const PhotoStyle = styled.a`
  --dimension: 250px;
  width: var(--dimension);
  height: var(--dimension);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease;


  img {
    width: 150px;
    border-radius: 10px;
    transition: all .2s ease;

    &:hover {
        zoom: 1.2;
        transform: scale(1.5);
        
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  }
`;

export const Photo = ({ photo }) => {
 
  return (
    <PhotoStyle role={"button"} data-testid="photo" tabIndex={0} >
      <img src={photo.thumbnailUrl} alt={photo.title} loading="lazy" />
      <p data-testid="photo-title">{photo.title}</p>
    </PhotoStyle>
  );
};
import styled from "styled-components";
import { colors, } from "../../utils/randomColor";

const AlbumStyle = styled.a`
    --dimension: 250px;
    width: var(--dimension);
    height: var(--dimension);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;


    img {
        width: 200px;
        border-radius: 10px;
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
        color: var(--black-color);
    }
`;

export const Album = ({album}) => {

  return (
    <div data-testid="album">
      <AlbumStyle role={"navigation"} tabIndex={0} href={`/albums/${album.id}/${album.title}/${album.user.username}`}>
        <img src={`https://via.placeholder.com/150/${colors[album.user.id-1]}`} loading="lazy" alt={`${album.title} icon by t-rex`} />
        <p data-testid="album-title">{album.title} <i>by</i> <strong>{album.user.username}</strong></p>
      </AlbumStyle>
    </div>
  );
};
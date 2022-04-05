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
    
    /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
      --dimension: 300px;
      width: var(--dimension);
      height: var(--dimension);
      margin-bottom: 10rem;
  
      img {
          width: var(--dimension);
          border-radius: 10px;
      }
  
      p {
          font-size: 2.5rem;
          font-weight: 400;
          text-align: center;
          color: var(--black-color);
      }
    }
`;

export const Album = ({album}) => {

  // helps to repeat the color in the array if album.user.id-1 is above 10
  const colorId = album.user.id-1 > 10 ? album.user.id-1 % 10 : album.user.id-1;

  return (
    <div data-testid="album">
      <AlbumStyle role={"navigation"} tabIndex={0} href={`/albums/${album.id}/${album.title}/${album.user.username}`}>
        <img src={`https://via.placeholder.com/150/${colors[colorId]}`} loading="lazy" alt={`${album.title} icon by t-rex`} />
        <p data-testid="album-title">{album.title} <i>by</i> <strong>{album.user.username}</strong></p>
      </AlbumStyle>
    </div>
  );
};
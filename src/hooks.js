import { useState, useCallback, useEffect, useRef } from "react";
import { fetchAlbums, fetchPhotos, fetchUsers } from "./api";

export const useFetchAlbums = (page = 0, limit = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //ref is used to prevent calling the fetchUsers api every time since its value doesn't change
  const usersRef = useRef([]);
  const getAlbums = useCallback(async () => {
    setLoading(true);
    try {
      const albums = await fetchAlbums(page, limit);
      if (usersRef.current.length === 0) {
        usersRef.current = await fetchUsers();
      }

      const albumsWithUser = albums.map((album) => {
        const user = usersRef.current.find((user) => user.id === album.userId);
        return {
          ...album,
          user,
        };
      });
      setData(albumsWithUser);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [page, limit]);
  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  return {
    data,
    loading,
    error,
  };
};

export const useFetchPhotos = (id, page = 0, limit = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getPhotos = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchPhotos(id, page, limit);
      setData(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [id, page, limit]);
  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return {
    data,
    loading,
    error,
  };
};

const url =
  "https:jsonplaceholder.typicode.com"; /*To be moved to env variables */

export const fetchAlbums = async (page, limit) => {
  const response = await fetch(`${url}/albums?_start=${page}&_limit=${limit}`);
  return await response.json();
};

export const fetchPhotos = async (id) => {
  const response = await fetch(`${url}/albums/${id}/photos`);
  return await response.json();
};

export const fetchUsers = async () => {
  const response = await fetch(`${url}/users`);
  return await response.json();
};


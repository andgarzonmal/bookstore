const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BHfOudnaPrs5rpU3itrm/books';

export const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const books = Object.entries(data).map((pair) => ({ ...pair[1][0], id: pair[0] }));
  return books;
};

export const uploadData = async (book) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export const removeData = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

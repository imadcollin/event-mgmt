const mockArtists = [
    { id: 1, name: 'Artist A', contact: 'artistA@example.com' },
    { id: 2, name: 'Artist B', contact: 'artistB@example.com' },
  ];
  
  const mockHalls = [
    { id: 1, name: 'Hall X', location: 'Downtown' },
    { id: 2, name: 'Hall Y', location: 'Uptown' },
  ];
  
  export const getArtists = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockArtists), 500);
    });
  };
  
  export const getHalls = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockHalls), 500);
    });
  };
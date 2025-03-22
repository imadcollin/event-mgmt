import { useState } from 'react';

const ArtistsList = () => {
  const [search, setSearch] = useState('');
  const artists = [
    { id: 1, name: 'Artist A', genre: 'Pop' },
    { id: 2, name: 'Artist B', genre: 'Rock' },
    { id: 3, name: 'Artist C', genre: 'Jazz' },
  ];

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Artists</h1>
      <input
        type="text"
        placeholder="Search Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />
      <ul>
        {filteredArtists.map((artist) => (
          <li key={artist.id}>{artist.name} - {artist.genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistsList;
import { useEffect, useState } from 'react';
import { getArtists, getHalls } from '../services/mockService';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [artists, setArtists] = useState([]);
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchArtist, setSearchArtist] = useState('');
  const [searchHall, setSearchHall] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [newMessages, setNewMessages] = useState(2); // Mock unread messages

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const artistsData = await getArtists();
      const hallsData = await getHalls();
      setArtists(artistsData);
      setHalls(hallsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const mockRecentMessages = [
    { id: 1, from: 'User A', content: 'Interested in booking Hall X.' },
    { id: 2, from: 'User B', content: 'Looking for an artist for an event.' }
  ];

  const mockEvents = [
    { id: 1, name: 'Concert A', date: '2025-05-12' },
    { id: 2, name: 'Festival B', date: '2025-06-20' },
    { id: 3, name: 'Show C', date: '2025-07-15' }
  ];

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchArtist.toLowerCase()) &&
    (genreFilter === '' || artist.genre === genreFilter)
  );

  const filteredHalls = halls.filter(hall =>
    hall.name.toLowerCase().includes(searchHall.toLowerCase()) &&
    (locationFilter === '' || hall.location === locationFilter)
  );

  return (
    <div className="p-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 border rounded bg-blue-100">
          <h2 className="text-lg font-semibold">Total Artists</h2>
          <p className="text-2xl font-bold">{artists.length}</p>
        </div>
        <div className="p-4 border rounded bg-green-100">
          <h2 className="text-lg font-semibold">Total Halls</h2>
          <p className="text-2xl font-bold">{halls.length}</p>
        </div>
        <div className="p-4 border rounded bg-yellow-100">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <p className="text-2xl font-bold">{mockEvents.length}</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link to="/artists" className="p-4 border rounded bg-blue-500 text-white hover:bg-blue-600">
          Browse Artists
        </Link>
        <Link to="/halls" className="p-4 border rounded bg-green-500 text-white hover:bg-green-600">
          Browse Halls
        </Link>
        <Link to="/events" className="p-4 border rounded bg-yellow-500 text-white hover:bg-yellow-600">
          View Events
        </Link>
        <Link to="/inbox" className="relative p-4 border rounded bg-purple-500 text-white hover:bg-purple-600">
          Open Inbox
          {newMessages > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
              {newMessages}
            </span>
          )}
        </Link>
      </div>

      {/* Featured Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Featured</h1>
        <div className="grid grid-cols-2 gap-4">
          {filteredArtists.slice(0, 2).map(artist => (
            <div key={artist.id} className="p-4 border rounded bg-gray-50 hover:shadow-md">
              <h2 className="font-bold">{artist.name}</h2>
              <p>Genre: {artist.genre}</p>
            </div>
          ))}
          {mockEvents.slice(0, 2).map(event => (
            <div key={event.id} className="p-4 border rounded bg-gray-50 hover:shadow-md">
              <h2 className="font-bold">{event.name}</h2>
              <p>Date: {event.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Search Artists */}
        <input
          type="text"
          placeholder="Search Artists"
          value={searchArtist}
          onChange={(e) => setSearchArtist(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Genres</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
        </select>

        {/* Search Halls */}
        <input
          type="text"
          placeholder="Search Halls"
          value={searchHall}
          onChange={(e) => setSearchHall(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Locations</option>
          <option value="Downtown">Downtown</option>
          <option value="Uptown">Uptown</option>
          <option value="Suburb">Suburb</option>
        </select>
      </div>

      {/* Artists and Halls */}
      {!loading && (
        <>
          <h1 className="text-2xl font-bold mb-4">Artists</h1>
          {filteredArtists.map(artist => (
            <div key={artist.id} className="p-4 border rounded mb-2">
              {artist.name} – {artist.contact}
            </div>
          ))}

          <h1 className="text-2xl font-bold mt-6 mb-4">Halls</h1>
          {filteredHalls.map(hall => (
            <div key={hall.id} className="p-4 border rounded mb-2">
              {hall.name} – {hall.location}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
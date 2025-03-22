import { useState } from 'react';

const EventList = () => {
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, name: 'Concert A', date: '2025-05-12', location: 'Venue A', description: 'Live concert' },
    { id: 2, name: 'Festival B', date: '2025-06-20', location: 'Venue B', description: 'Music festival' },
    { id: 3, name: 'Show C', date: '2025-07-15', location: 'Venue C', description: 'Comedy show' },
    { id: 4, name: 'Event D', date: '2025-08-05', location: 'Venue D', description: 'Art exhibition' },
    { id: 5, name: 'Event E', date: '2025-09-10', location: 'Venue E', description: 'Dance performance' }
  ];

  const itemsPerPage = 3;

  const filteredEvents = events
    .filter(event => 
      event.name.toLowerCase().includes(search.toLowerCase()) &&
      (dateFilter === '' || event.date === dateFilter)
    )
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'date') return new Date(a.date) - new Date(b.date);
      return 0;
    });

  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleRegister = (event) => {
    alert(`Registered for ${event.name}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Events</h1>

      {/* Search and Filters */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search Events"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>
      </div>

      {/* Event List */}
      <ul>
        {paginatedEvents.map((event) => (
          <li key={event.id} className="p-4 border rounded mb-2 bg-gray-100">
            <div className="flex justify-between">
              <div>
                <strong>{event.name}</strong> – {event.date}
              </div>
              <div>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Details
                </button>
                <button
                  onClick={() => handleRegister(event)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Register
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'} rounded`}
        >
          Previous
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= filteredEvents.length}
          className={`px-4 py-2 border ${currentPage * itemsPerPage >= filteredEvents.length ? 'bg-gray-300' : 'bg-blue-500 text-white'} rounded`}
        >
          Next
        </button>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-2">{selectedEvent.name}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p>{selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventList;
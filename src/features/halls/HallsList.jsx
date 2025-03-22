const HallsList = () => {
  const halls = [
    { id: 1, name: 'Hall X', location: 'Downtown' },
    { id: 2, name: 'Hall Y', location: 'Uptown' },
    { id: 3, name: 'Hall Z', location: 'Suburb' },
  ];

  return (
    <div>
      <h1>Halls</h1>
      <ul>
        {halls.map((hall) => (
          <li key={hall.id}>{hall.name} - {hall.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default HallsList;
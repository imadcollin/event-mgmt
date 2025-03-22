const Inbox = () => {
    const messages = [
      { id: 1, from: 'User A', content: 'Hello, I would like to book you.' },
      { id: 2, from: 'User B', content: 'Can you send me your rates?' },
      { id: 3, from: 'User C', content: 'Available for a performance next month?' },
    ];
  
    return (
      <div>
        <h1>Inbox</h1>
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>
              <strong>{msg.from}:</strong> {msg.content}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Inbox;
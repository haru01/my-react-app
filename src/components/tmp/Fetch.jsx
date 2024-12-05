import React, {useState} from 'react';

export const Fetch = ({url}) => {
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchGreeting = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGreeting(data.greeting);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {greeting && <h1>{greeting}</h1>}
      {error && <div role="alert">Oops, failed to fetch!</div>}
      <button onClick={fetchGreeting} disabled={loading}>
        {loading ? 'Loading...' : 'Load Greeting'}
      </button>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // Получаем текущую дату
  const currentDate = dayjs().format('YYYY MM DD HH:mm:ss');

  // Запрос к API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {/* Блок с текущей датой */}
      <h1>Текущая дата и время:</h1>
      <p>{currentDate}</p>

      {/* Блок с данными из API */}
      <div style={{ marginTop: '20px' }}>
        <h1>Данные из API:</h1>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </div>
  );
}

export default App;
// import React, { useEffect, useState } from 'react';
// import dayjs from 'dayjs';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState(null);

//   const currentDate = dayjs().format('YYYY MM DD HH:mm:ss');

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => setData(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {}
//       <h1>Текущая дата и время:</h1>
//       <p>{currentDate}</p>
//       {}
//       <div style={{ marginTop: '20px' }}>
//         <h1>Данные из API:</h1>
//         {data ? (
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         ) : (
//           <p>Загрузка...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useRef } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
    const inputRef = useRef(null);
    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    return (
      <div className="app-container">
        <Input ref={inputRef} placeholder="Введите текст..." />
        <Button onClick={handleClear} />
      </div>
    );
}

export default App;
import React from 'react';
import './App.css';
import Header from './Header';
import Comparison from './Comparison';
import Form from './Form';
import { api } from '../utils/api';

function App() {

  const [starship1Info, setStarship1Info ] = React.useState('');
  const [starship2Info, setStarship2Info ] = React.useState('');
  const [id1, setId1 ] = React.useState('');
  const [id2, setId2 ] = React.useState('');

  // React.useEffect(() => {
  //   api.getFilmInfo()
  //     .then(res => console.log(res))
  // }, [])

  function handleSubmit (id1, id2) {
    setId1(id1);
    setId2(id2);
    Promise.all([api.getStarshipInfo(id1), api.getStarshipInfo(id2)])
      .then((data) => {
        setStarship1Info(data[0]);
        setStarship2Info(data[1]);
      })
  }

  return (
    <div className="App">
      <Header />
      <Form onSubmit={handleSubmit}/>
      {starship1Info && <Comparison data1={starship1Info} data2={starship2Info} id1={id1} id2={id2}/>}
    </div>
  );
}

export default App;

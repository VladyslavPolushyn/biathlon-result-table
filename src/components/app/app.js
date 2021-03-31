import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTable from '../main-table/main-table';
import data from './data';
import Header from '../header';

const App = () => {
  const [participantsArr, setParticipantsArr] = useState(data);
  const [searchArr, setSearchArr] = useState(participantsArr);

  const sort = type => {
    const sortMethods = {
      'name-hight': elem => {
        return elem.sort((prev, next) => {
          if (prev.name < next.name) {
            return -1;
          }else if (prev.name > next.name) {
            return 1;
          }
          return 0;
        });
      },
      'name-low': elem => {
        return elem.sort((prev, next) => {
          if (prev.name < next.name) {
            return 1;
          }else if (prev.name > next.name) {
            return -1;
          }
          return 0;
        });
      },
      'result-hight': elem => elem.sort((a, b) => a.result - b.result),
      'result-low': elem => elem.sort((a, b) => b.result - a.result),
      'hit-hight': elem => elem.sort((a, b) => eval(a.hit) - eval(b.hit)),
      'hit-low': elem => elem.sort((a, b) => eval(b.hit) - eval(a.hit)),
      'rate-of-fire-hight': elem => elem.sort( (a, b) => a.shootingTime - b.shootingTime),
      'rate-of-fire-low': elem => elem.sort( (a, b) => b.shootingTime - a.shootingTime)
    }

    setParticipantsArr([... sortMethods[type](participantsArr)]);

  }

  const search = value => {
    const text = value.toLowerCase().trim();
    setParticipantsArr(searchArr.filter(item => {
      return item.name.toLowerCase().includes(text);
    }));
  }

  return (
    <div>
      <Header />
      <MainTable
        participantsArr={participantsArr}
        onSort={sort}
        onSearch={search}
      />
    </div>
  );
};

export default App;




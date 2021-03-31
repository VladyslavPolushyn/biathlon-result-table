import React from 'react';
import Participant from '../participant';

const MainTableBody = ( { participantsArr } ) => {

  const participantsElem = participantsArr.map((item) => {
    return (
      <Participant participant={item} key={item.result}/>
    );
  });

  return (
    <tbody>
      { participantsElem }
    </tbody>
  );
}

export default MainTableBody;

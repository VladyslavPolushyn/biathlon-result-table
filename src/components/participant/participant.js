import { React } from 'react';

const Participant = ( { participant } ) => {
  return (
    <tr>
      <td>
        { participant.result }
      </td>
      <td>
        { participant.name }
      </td>
      <td>
        { participant.hit }
      </td>
      <td>
        { participant.shootingTime }
      </td>
      <td>
        { participant.time }
      </td>
    </tr>
  );
}

export default Participant;

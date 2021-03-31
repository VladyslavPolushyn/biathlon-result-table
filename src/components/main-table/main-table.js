import { React } from 'react';
import {Table, Form} from 'react-bootstrap';
import MainTableBody from '../main-table-body';
import MainTableHead from '../main-table-head';

const MainTable = ( { participantsArr, onSort, onSearch } ) => {
  return (
    <div className="container">
      <Form.Control type="text" placeholder="Search" onChange={ e => onSearch(e.target.value) } />
      <Table striped bordered hover variant="dark" className="my-3">
        <MainTableHead onSort={onSort} />
        <MainTableBody participantsArr={participantsArr} />
      </Table>
    </div>
  );
}

export default MainTable;

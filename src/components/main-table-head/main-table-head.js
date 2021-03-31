import { React } from 'react';
import './main-table-head.css';

const MainTableHead = ( {onSort} ) => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th className="sortable">
          Name 
          <span onClick={() => { onSort('name-hight') }}>&#129139;</span>
          <span onClick={() => { onSort('name-low') }}>&#129137;</span>
        </th>
        <th className="sortable">
          Miss shot 
          <span onClick={() => { onSort('hit-hight') }}>&#129139;</span>
          <span onClick={() => { onSort('hit-low') }}>&#129137;</span>
        </th>
        <th className="sortable">
          Rate of fire 
          <span onClick={() => { onSort('rate-of-fire-hight') }}>&#129139;</span>
          <span onClick={() => { onSort('rate-of-fire-low') }}>&#129137;</span>
        </th>
        <th className="sortable">
          Result 
          <span onClick={() => { onSort('result-hight') }}>&#129139;</span>
          <span onClick={() => { onSort('result-low') }}>&#129137;</span>
        </th>
      </tr>
    </thead>
  );
}

export default MainTableHead;

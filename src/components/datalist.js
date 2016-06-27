import React from 'react';
import DataListItem1 from './datalistitem1';

const DataLists = (props) => {

      const qq= props.listinfos.title;
       const DataItem = props.listinfos.map(datas =>
    <DataListItem1 data = {datas} key = {datas._id}
             onDataDel = {props.onDataDel}
    />
    );


    var style={
      paddingTop:'20px'
    }

    return (
      <ul className = "col-md-8 col-md-offset-3" style={style}>
          {DataItem}
      </ul>

    );
}

export default DataLists;

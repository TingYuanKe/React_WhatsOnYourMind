import React from 'react';
import {Button,Glyphicon} from 'react-bootstrap';

const DataListItem = (props,onDataDel) => {
  var class1={
    height:'300px',
    width:'900px',
    paddingTop:'15px'
  }

    var title={
      textAlign:'center',
      color:'rgb(230,230,230)',
      fontSize:'30px',
      fontWeight:'bolder',
      height:'30px'
    }


  if(props.data.mode=='0'){
    return(
    <div class="col-md-6" style={class1}>
      <div style={{
    height:'100%',
      width:'100%',
      backgroundColor:'#EB373C',
      overflow:'hidden',
      borderRadius:'40px'}} >
      <h2 style={title} >
      {props.data.title}
      </h2>``
      <pre style={{
      textAlign:'center',
      color:'rgb(230,230,230)',
      overflow:'hidden',
      background:'#ff8080',
      fontSize:'18px',
      padding:'3px 3px 3px 3px',
      height:'150px'
    }}>
        {props.data.content}
      </pre>
      <Button style = {{color:'#FF1100', background:'3c58a7'}} onClick = {() => props.onDataDel(props.data._id)}><Glyphicon glyph="trash" /></Button>
     </div>
   </div>
  );
}
  if(props.data.mode!='0'){
     return(
    <div class="col-md-6" style={class1}>
    <div style={{
    height:'100%',
      width:'100%',
      backgroundColor:'#3c58a7',
      overflow:'hidden',
      borderRadius:'40px'}} >
      <h2 style={title} >
      {props.data.title}
      </h2>``
      <pre style={{
      textAlign:'center',
      color:'rgb(230,230,230)',
      overflow:'hidden',
      background:'#6699ff',
      fontSize:'18px',
      padding:'3px 3px 3px 3px',
      height:'150px'
    }}>
        {props.data.content}
      </pre>
      <Button style = {{color:'#FF1100', background:'3c58a7'}} onClick = {() => props.onDataDel(props.data._id)}><Glyphicon glyph="trash" /></Button>
    </div>
    </div>
  );
  }


}

export default DataListItem;

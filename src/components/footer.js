import React from 'react';


const Footer = (props) => {
  var footer={
    backgroundColor:'rgb(50,50,50)',
    width:'100%',
    height:'60px'
  }
  var font={
    lineHeight:'40px',
    textAlign:'center',
    fontSize:'20px',
    color:'#EEEEEE'
  }
 return(
  <footer style={footer}>
    <p style={font}>
     @Copyright 2016, Create by TingYuanKeke.
    </p>
  </footer>

  );




}

export default Footer ;

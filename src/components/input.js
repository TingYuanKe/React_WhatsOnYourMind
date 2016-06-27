import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
export default class input extends Component {
	constructor(props) {
		super(props);
		this.state ={title:'',content:'',mode:''};
	}

	render() {
		var background={
			backgroundColor:'rgba(60,88,167,1.0)'
		}
		var padding={
			paddingTop:'10px'
		}
		var font={
			paddingTop:'50px',
			 color:'white',
			 fontSize:'50px',
 			marginTop:'-19px',
			 paddingBottom:'30px'
		}
		var mode={
			backgroundColor:'#ffc0cb',
			placeholder:'#EEEEEE'
		}
		var modefont={
			color:'#EEEEEE',
			fontSize : '12px'
		}
		var button={

		}
		return (
			<section style={background}>
					<form class="form-horizontal" method="post" action="/">
						<div class="col-lg-20">
							<h1 class="section-heading" style={font}>What's on your mind?</h1>
						</div>
						<div class="col-md-20">
							<input  class="form-control input-lg"
									name="title"
									placeholder="title"
									onChange = { event =>
            						this.setState({title:event.target.value}) }/>
						</div>
						<div class="col-md-12" center>
							<textarea class="form-control input-lg"
							cols='50' rows='6'
							name="content"
							placeholder="content"
							onChange = {event=>
            				this.setState({content:event.target.value})}></textarea>
						</div>
						<div class="col-md-6  ">
							<input type="text"
							class="form-control input-lg"
							name="mode"
							placeholder="emergency?"
							style={mode}
							onChange = {event=>
            				this.setState({mode:event.target.value})}></input>
						</div>
						<h3 class="section-heading" style={modefont}>If Yes ,Please input "0"</h3>
						<div>
							<Button bsStyle="primary"
									bsSize="large"
									onClick = {
                                        event => {this.onDataChange(this.state);}
                                      }>Post</Button>
						</div>
					</form>
			</section>
		);
	}
	  onDataChange(data){
    this.setState({data});
    this.props.onPostTermChange(data);
     $("input").val('');
     $("textarea").val('');
  }
}


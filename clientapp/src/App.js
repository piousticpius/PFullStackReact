import { json } from 'body-parser';
import React , {Component} from  'react';

import{Container,NavbarBrand,Row,Col, Navbar, Jumbotron, 
  InputGroup,Input,Button, InputGroupAddon,FormGroup}from 'reactstrap'
import Weather from './Weather'
class App extends Component {
  constructor(props){
  super(props);
  this.state={
    weather:null,
    cityList:[],
    newCityName:''
  };

}
getCityList= () => {
  fetch('/api/cities')
  .then(res=>res.json()) 
  .then(res=>{
    var cityList=res.map(r=>r.city_name);
    this.setState({cityList});
  });

};

handleAddCity=()=>{
  fetch('/api/cities',{
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({city:this.state.newCityName})
   
  })
  .then(res=>res.json())
  .then(res=>{this.getCityList();
    this.setState({newCityName:''})   
});
  };

getWeather=(city)=>{
fetch('/api/weather/'+city).then(res=>res.json()).then(weather=>
  {
    console.log(weather);
  this.setState({weather});
});

}

handleChangeCity=(e)=>{
  this.getWeather(e.target.value);
}; 

handleInputChange=(e)=>{
  this.setState({newCityName:e.target.value});
}; 





componentDidMount() {
  this.getCityList();
}
  render(){
    return (
    <Container fluid className='centered'>
<Navbar dark color="dark">
<NavbarBrand href='/'>MyWeather</NavbarBrand>
</Navbar>
<Row>
  <Col>
  <Jumbotron>
    <h1 className='display-3'>MyWeather</h1>
    <p className='lead'>The current waether for your favourite cities</p>
  </Jumbotron>
  <InputGroup>
  <Input  placeholder="new city name..." value={this.state.newCityName} onChange={this.handleInputChange}
  
  />
  <InputGroupAddon addonType="append"></InputGroupAddon>
  <Button color="primary" onClick={this.handleAddCity}>Add City</Button>
  </InputGroup>
  </Col>
</Row>
<Row>
  <Col>
  <h1 className='display-5'>current weather</h1>
  <FormGroup>
    <Input type="select" onChange={this.handleChangeCity}> 
    {this.state.cityList.length === 0 && <option>no city added yet</option>}
    {this.state.cityList.length > 0 && <option>select a city</option>}
    {this.state.cityList.map((city,i)=><option key={i}>{city}</option>)}
    </Input>
  </FormGroup>
  </Col>
</Row>
<Weather data={this.state.weather}/>
    </Container>
    );
  } 
}


export default App;

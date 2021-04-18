import React from 'react'
import{ Row, Col, Table} from 'reactstrap'
const Weather =(props)=>{
    const {data}=props;
    if(!data)
    
        return <div></div>
    
    return(
        <Row className='weather'>
            <Col sm='12' md={{size:4,offset:4}}>
                <h2>{data.name}</h2>
                <img src={'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png'} alt= 'weather icon'/>
                <span>{data.weather.main}</span>&nbsp;
                <span>{Math.floor(data.main.temp)}&deg;F</span>
                <Table>
                    <tbody>
                    <tr>
                    <td>Wind</td>
                    <td>{Math.floor(data.wind.speed)}</td>
                    </tr>
                    <tr>
                    <td>Pressure</td>
                    <td>{Math.floor(data.main.pressure)}</td>
                    </tr>
                    <tr>
                    <td>Humudity</td>
                    <td>{Math.floor(data.main.humidity)}</td>
                    </tr>
                    </tbody>
                </Table>
                
            <Table>

            </Table>
            </Col>
        </Row>
    );
};
export default Weather;
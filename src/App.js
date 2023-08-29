import React from 'react';
import "./App.css";
import DamCard from "./containers/DamCard/DamCard";
import ApiRequest from '@aerisweather/javascript-sdk/dist/network/api/ApiRequest';

const request = new ApiRequest({
  client: {
       id: 'L1xXeXm7qqCrkYtVwwpA2',
       secret: 'bVIKz2nCj62iicjOpZhTVPxyNN5LhxDORU6CVXA2'
  }
});

function App() {
  const [weatherData, setWeatherData] = React.useState([]);
  const [openGate, setOpenGate] = React.useState("");
  
  React.useEffect(() => {
    request.endpoint('forecasts').place('chennai,in').get().then((result) => {
      setWeatherData(result.data[0])
      var count = 0;
      result.data[0].periods.map(({ weather }) => {
        var isTrue = weather.match(/\bRain\b/g)
        if (isTrue) {
          count += 1;
        }
        return null;
      })
      count > 3 ? setOpenGate("Recommended to Open the Gate") : setOpenGate("No Available Prediction")
    });
    
  },[])

  return (
    <div className="app">
      <h1 className="app__title">Smart Dam Water Controller</h1>
      <DamCard damNumber="Dam1" />
      <div className="prediction">
        <div>
        <h3>Weather Prediction for next 7 days</h3>
        { weatherData.periods && weatherData.periods.map(({ weather }) => (
          <h6>{weather}</h6> 
        ))}
        </div>
        <div>
          <p>{`Suggestion: ${openGate}`}</p>
        </div>
      </div>
      <DamCard damNumber="Dam2" />
      <div className="prediction">
        <div>
        <h3>Weather Prediction for next 7 days</h3>
        { weatherData.periods && weatherData.periods.map(({ weather }) => (
          <h6>{weather}</h6> 
        ))}
        </div>
        <div>
          <p>{`Suggestion: No available suggestion as of now`}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

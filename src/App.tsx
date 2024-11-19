import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";
import Forms from "./components/Form/Forms";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, fetchWeather, loading, hasWeatherData, notFound } =
    useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Forms fetchWeather={fetchWeather} />

        {loading && <Spinner />}

        {hasWeatherData && <WeatherDetail weather={weather} />}

        {notFound && <Alert>Ciudad no Encontrada</Alert>}
        
      </div>
    </>
  );
}

export default App;

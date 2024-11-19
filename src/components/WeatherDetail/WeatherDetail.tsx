import { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../../utils"
import styles from './WeatherDetail.module.css'

type WeatherDetailProps = {
   weather: Weather
}


export default function WeatherDetail({ weather }: WeatherDetailProps) {
  return (
    <div className={styles.container}>
        <h2>Clima en: {weather.name}</h2>
        <p className={styles.current}>{ formatTemperature(weather.main.temp)}&deg;c</p>
        <div className={styles.temperature}>
            <p>Min: <span>{ formatTemperature(weather.main.temp_min)}&deg;c</span></p>
            <p>Max: <span>{ formatTemperature(weather.main.temp_max)}&deg;c</span></p>
        </div>
    </div>
  )
}

import { countries } from "../../data/countries";
import styles from './Form.module.css'
import { ChangeEvent, FormEvent, useState } from "react";
import { SearchType, FormProps } from "../../types";
import Alert from "../Alert/Alert";

export default function Forms( { fetchWeather }: FormProps) {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    })

    const [alert, setAlert] = useState('')

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setSearch((prevSearch) => ({
            ...prevSearch,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }

        fetchWeather(search)
      };

    return (
        <form
            action=""
            className={styles.form}
            onSubmit={ handleSubmit }
        >
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="city">Pais:</label>
                <select
                    name="country"
                    value={search.country}
                    id="country"
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un pais</option>
                    {countries.map(country => (
                        <option
                            value={country.code}
                            key={country.code}
                        >
                            {country.name}
                        </option>
                    ))}
                </select>

            </div>

            <input
                className={styles.submit}
                type="submit"
                value="Consultar Clima"
            />
        </form>
    )
}

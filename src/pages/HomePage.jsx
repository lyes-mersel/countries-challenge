import { useState, useEffect } from "react";

import SearchFilterBars from "../components/SearchFilterBars";
import CountriesList from "../components/CountriesList";
import CircularIndeterminate from "../components/CircularIndeterminate";
import NotFound from "../components/NotFound";
import SelectPage from "../components/SelectPage";
import "./HomePage.css";

const HomePage = () => {
	const MAX_COUNTRIES_PAGE = 16;
	const [countries, setCountries] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [dataFetched, setDataFetched] = useState(false);
	const [url, setUrl] = useState(
		"https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2"
	);

	useEffect(() => {
		async function fetchData() {
			setDataFetched(false);
			const response = await fetch(url);
			const data = await response.json();
			if (response.ok) {
				let countriesList = [];
				let indexGroup = -1;
				data.forEach((country, indexCountry) => {
					if (indexCountry % MAX_COUNTRIES_PAGE === 0) {
						indexGroup++;
						countriesList[indexGroup] = [];
					}
					const countryInfos = {
						name: country.name.common,
						flag: country.flags,
						population: country.population,
						region: country.region,
						capital: country.capital,
						cca2: country.cca2,
					};
					countriesList[indexGroup].push(countryInfos);
				});
				setCountries(countriesList);
			} else {
				setCountries([]);
			}
			setDataFetched(true);
		}
		fetchData();
	}, [url, setCountries, setDataFetched]);

	const searchByName = (name) => {
		setUrl(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
	};

	const searchByRegion = (region) => {
		region === ""
			? setUrl(
					"https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2"
			  )
			: setUrl(
					`https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,capital,cca2`
			  );
	};

	return (
		<main className="home-page">
			<SearchFilterBars
				searchByRegion={searchByRegion}
				searchByName={searchByName}
			/>
			{!dataFetched ? (
				<CircularIndeterminate />
			) : countries.length === 0 ? (
				<NotFound />
			) : (
				<CountriesList countries={countries[pageNumber - 1]} />
			)}
			<SelectPage countries={countries} setPageNumber={setPageNumber} />
		</main>
	);
};

export default HomePage;

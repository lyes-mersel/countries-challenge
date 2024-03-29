import BorderCountry from "./BorderCountry";

const CountryDetails = (props) => {
	return (
		<section className="details-section">
			<img
				src={props.countryInfo.flags.png}
				alt={props.countryInfo.flags.alt}
			/>
			<div>
				<h2>{props.countryInfo.name.common}</h2>
				<dl>
					<div className="details-section-left">
						<dt>Native Names:</dt>
						<dd>
							{Object.values(props.countryInfo.name.nativeName).map(
								(name, index, array) =>
									index != array.length - 1
										? name.common + ", "
										: name.common
							)}
						</dd>
						<dt>Population:</dt>
						<dd>{props.countryInfo.population}</dd>
						<dt>Region:</dt>
						<dd>{props.countryInfo.region}</dd>
						<dt>Sub Region:</dt>
						<dd>{props.countryInfo.subregion}</dd>
						<dt>Capital:</dt>
						<dd>{props.countryInfo.capital}</dd>
					</div>

					<div className="details-section-right">
						<dt>Top Level Domains:</dt>
						<dd>
							{props.countryInfo.tld.map((tld, index, array) =>
								index != array.length - 1 ? tld + ", " : tld
							)}
						</dd>
						<dt>Currencies:</dt>
						<dd>
							{Object.values(props.countryInfo.currencies).map(
								(currency, index, array) =>
									index != array.length - 1
										? currency.name + ", "
										: currency.name
							)}
						</dd>
						<dt>Languages:</dt>
						<dd>
							{Object.values(props.countryInfo.languages).map(
								(language, index, array) =>
									index != array.length - 1
										? language + ", "
										: language
							)}
						</dd>
					</div>

					<div className="details-section-bottom">
						<dt>Border Countries:</dt>
						<dd>
							{"borders" in props.countryInfo ? (
								Object.values(props.countryInfo.borders).map(
									(borderCountry, index) => (
										<BorderCountry key={index} code={borderCountry} />
									)
								)
							) : (
								<>0</>
							)}
						</dd>
					</div>
				</dl>
			</div>
		</section>
	);
};

export default CountryDetails;

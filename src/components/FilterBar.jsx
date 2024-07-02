import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./FilterBar.css";

const FilterBar = (props) => {
	const [region, setRegion] = useState("Filter by Region");
	const [hideRegions, setHideRegions] = useState(true);

	const showHideRegions = (e) => {
		e.preventDefault();
		setHideRegions(!hideRegions);
	};

	const setRegionAll = (e) => {
		e.preventDefault();
		setRegion("All");
		setHideRegions(true);
		props.searchByRegion("");
	};

	const setRegionAfrica = (e) => {
		e.preventDefault();
		setRegion("Africa");
		setHideRegions(true);
		props.searchByRegion("Africa");
	};

	const setRegionAmerica = (e) => {
		e.preventDefault();
		setRegion("America");
		setHideRegions(true);
		props.searchByRegion("America");
	};

	const setRegionAsia = (e) => {
		e.preventDefault();
		setRegion("Asia");
		setHideRegions(true);
		props.searchByRegion("Asia");
	};

	const setRegionEurope = (e) => {
		e.preventDefault();
		setRegion("Europe");
		setHideRegions(true);
		props.searchByRegion("Europe");
	};

	const setRegionOceania = (e) => {
		e.preventDefault();
		setRegion("Oceania");
		setHideRegions(true);
		props.searchByRegion("Oceania");
	};
	return (
		<form className="filter-bar">
			<button className="cursor-pointer" onClick={showHideRegions}>
				{region}
				<span>
					<IoIosArrowDown />
				</span>
			</button>
			<div className={hideRegions ? "hide" : ""}>
				<button className="cursor-pointer" onClick={setRegionAll}>
					All
				</button>
				<button className="cursor-pointer" onClick={setRegionAfrica}>
					Africa
				</button>
				<button className="cursor-pointer" onClick={setRegionAmerica}>
					America
				</button>
				<button className="cursor-pointer" onClick={setRegionAsia}>
					Asia
				</button>
				<button className="cursor-pointer" onClick={setRegionEurope}>
					Europe
				</button>
				<button className="cursor-pointer" onClick={setRegionOceania}>
					Oceania
				</button>
			</div>
		</form>
	);
};

export default FilterBar;

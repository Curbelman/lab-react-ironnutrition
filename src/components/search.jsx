import { useState } from "react";
import { Input } from 'antd';

function Search(props){
    const { setFilterTerm } = props;
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value.toLowerCase());
    }

    return (
        <div>
            <h3>Search</h3>
            <Input
            type="text"
            name="search"
            placeholder="Search for food!"
            value={searchInput}
            onChange={(e) => {
                handleChange(e);
                setFilterTerm(searchInput);
                }
            }
            />
        </div>
    )
}

export default Search;
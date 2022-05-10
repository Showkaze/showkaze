import { React, useState } from "react";
// import TextField from bootstrap??
//this would go in our App()
const [inputText, setInputText] = useState('');
let inputHandler(e) => {
	//convert input text to lower case like we talked about
	let lowerCase = e.target.value.toLowerCase();
	setInputText(lowerCase);
};

//THEN OUR RETURN STATEMENT WOULD BE BELOW THIS WITH OUR HTML STUFF IN IT

import { useState } from 'react';

function App() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredConcerts = filteredConcerts(posts, searchQuery);

    return (
        <div>
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredConcerts.map(concerts => (
                    <li key={concerts.key}>{concerts.name}</li>
                ))}
            </ul>
        </div>
    );
}


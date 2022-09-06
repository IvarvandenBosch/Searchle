import React from "react";
import reactStringReplace from 'react-string-replace';

export default function StrongText(props) {
    const firstName = props.firstName
    const lastName = props.lastName
    const searchBy = props.searchBy
    return (
        <div className="name">
            {/* Tests if the user wants to search for firstName or lastName */}
            <p>{searchBy ? "" : firstName} {searchBy ? reactStringReplace(firstName, props.searchTerm, (match, i) => (
                <strong>{match}</strong>
            )) : reactStringReplace(lastName, props.searchTerm, (match, i) => (
                <strong>{match}</strong>
            ))} {searchBy ? lastName : ""}</p>
            <div className="line"></div>
        </div>
    )
}
import React, { useState, useContext } from "react";
import AlertContext from "../../contexts/alert/alertContext";
import GithubContext from "../../contexts/github/githubContext";

const Search = (props) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');

    const onInputChange = event => {
 const Search = (props) => {

    const submit = () => {
        if(text === ''){
            return props.setAlert({msg: 'Please provide input', type: 'light'});
            alertContext.setAlert('Please provide input', 'light');
            return;
        }
        return githubContext.searchUsers(text);
        githubContext.searchUsers(text);
        setText('');
        return;
    }

    const clear = () => {
 const Search = (props) => {

    return (
        <div>
                <input type="text" name="text" placeholder="Search here..." 
                <input type="text" id="searchInput" name="text" placeholder="Search here..." 
                onChange={onInputChange}
                />
                <button onClick={submit} className="btn btn-dark btn-block">Search</button>

                {props.showClear && <button onClick={clear} className="btn btn-light btn-block">Clear</button>}
                {githubContext.users.length > 0 && <button onClick={clear} className="btn btn-light btn-block">Clear</button>}

        </div>
    );


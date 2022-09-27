import {Component} from 'react';

class UserItem extends Component {
    constructor(){
        super();
        this.state = {
            login : "user name",
            id : 1,
            avatar_url : "httpsskdjfbvkjhgd",
            html_url : "bkkzsjdfkj"
        }
    }
    render(){
        const {login, id, avatar_url, html_url} = this.state;
        return(
            <div>
                <span>{id}</span>
                <h1>{login}</h1>
                <h2>{avatar_url}</h2>
                <h3>{html_url}</h3>
            </div>
        )
    }
}

export default UserItem;
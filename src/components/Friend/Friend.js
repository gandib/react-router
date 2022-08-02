import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        // const path = `friend/${id}`;
        // navigate(path);
        navigate('/friend/' + id);

    }
    return (
        <div>
            <h2>Name: {name}</h2>
            {/* Link use koreo link banano jay button er moto */}
            <Link to={'/friend/' + id} >Show Detail</Link>
            <button onClick={showFriendDetail}>{username} id: {id}</button>
        </div>
    );
};

export default Friend;
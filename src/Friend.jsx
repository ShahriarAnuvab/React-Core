import PropTypes from 'prop-types';

export default function Friend({friend}){
    return(
        <div>
            <h4>Name: {friend.name} </h4>
            <p>Email: {friend.email} </p>
        </div>
    )
}

Friend.propTypes = {
    friend: PropTypes.object
  };
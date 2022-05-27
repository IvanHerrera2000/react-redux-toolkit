import React from 'react';

function User({ avatar, email, first_name, last_name }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card ">
        <img src={avatar} alt="avatar"></img>
        <div className="card-body">
          <h5 className="card-title">
            {first_name} {last_name}
          </h5>
          <p className="card-text">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default User;

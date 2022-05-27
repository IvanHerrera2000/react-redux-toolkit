import React, { useEffect } from 'react';
import User from '../User';
import { fetchALLUsers } from '../../store/slices/users';
import { useDispatch } from 'react-redux';

function Users() {
  const dispatch = useDispatch();
  const user = [];

  useEffect(() => {
    dispatch(fetchALLUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {user.map((user, index) => (
          <User
            avatar={user.avatar}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Users;

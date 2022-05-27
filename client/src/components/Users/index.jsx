import React, { useEffect } from 'react';
import User from '../User';
import { fetchAllUsers } from '../../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';

function Users() {
  const { list: users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row">
        {users.map((user, index) => (
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

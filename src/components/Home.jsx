import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Home = () => {

      const {user} = useContext(AuthContext);
      // console.log(user)

      return (
            <div>
                 <h2>{user?.email}</h2>
            </div>
      );
};



export default Home;
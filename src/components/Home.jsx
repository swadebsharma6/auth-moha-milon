import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Home = () => {

      const {user} = useContext(AuthContext);
      // console.log(user)

      return (
            <div className='bg-slate-400'>
                 <div className='min-h-[900px] flex justify-center items-center'>
                  <h2 className='text-6xl font-bold text-purple-700'>Home Page</h2>
                 </div>
            </div>
      );
};



export default Home;
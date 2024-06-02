import React from 'react';
import { Spinner } from '@nextui-org/react';
import logo from '../../public/Assets/logo.jpeg';
import Image from 'next/image';

const Loading = () => {
  return (
    <>
     <div className="flex items-center justify-center h-screen">
       <Spinner color="primary" size="lg">
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <Image src={logo} width={120} height={120} className="rounded-full" alt='logo' />
         </div>
       </Spinner>
     </div>
     
    
    </>
    
  );
};



export default Loading;

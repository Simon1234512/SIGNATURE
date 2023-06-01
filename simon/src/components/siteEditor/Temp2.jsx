import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { EditerContext } from '../../AppContext';

export default function Temp2() {
  const {switching , setSwitching} = useContext(EditerContext)
  const handleSkeletonClick = () => {
    // Handle the click event here
    setSwitching(true)
    console.log("Switched to True");
  };
  return (
    <Stack spacing={1} sx={{ width: "50%", margin: "0 auto", boxShadow: 3, marginY: 4, width: "fit-content",backgroundColor:"white" }}>
    <br />
    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} onClick={handleSkeletonClick}>
      {/* Profile picture */}
      <div style={{ marginRight: '10px',marginLeft:"10px" }}>
        <Skeleton variant="circular" width={140} height={140} style={{ backgroundColor: "gray" }} />
      </div>
       {/* Vertical line */}
       <div style={{ borderLeft: '1px solid black', height: '200px', margin: '0 10px' }}></div>

      {/* Content */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <Skeleton variant="rectangular" width={210} height={40} style={{ backgroundColor: "gray", marginBottom: "5px" }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <Skeleton variant="square" width={230} height={30} style={{ marginRight: '10px', marginBottom: "5px"  }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Skeleton variant="square" width={60} height={20} style={{ marginRight: '5px', backgroundColor: "black", marginBottom: "5px"  }} />
            <Skeleton variant="rectangular" width={90} height={20} style={{ marginRight: '20px', marginBottom: "5px"  }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Skeleton variant="square" width={60} height={20} style={{ marginRight: '5px', backgroundColor: "black", marginBottom: "5px"  }} />
            <Skeleton variant="rectangular" width={90} height={20} style={{ marginRight: '20px', marginBottom: "5px"  }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Skeleton variant="square" width={60} height={20} style={{ marginRight: '5px', backgroundColor: "black", marginBottom: "5px"  }} />
            <Skeleton variant="rectangular" width={90} height={20} style={{ marginRight: '20px', marginBottom: "5px"  }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <Skeleton variant="square" width={60} height={20} style={{ marginRight: '5px', backgroundColor: "black", marginBottom: "5px"  }} />
            <Skeleton variant="rectangular" width={90} height={20} style={{ marginRight: '20px', marginBottom: "5px"  }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <Skeleton variant="rectangular" width={20} height={20} style={{ backgroundColor: "blue", marginRight: '10px' }} />
          <Skeleton variant="rectangular" width={20} height={20} style={{ backgroundColor: "darkblue", marginRight: '10px' }} />
          <Skeleton variant="rectangular" width={20} height={20} style={{ backgroundColor: "lightblue", marginRight: '10px' }} />
          <Skeleton variant="rectangular" width={20} height={20} style={{ backgroundColor: "red" }} />
        </div>
      </div>
    </div>
    <br />
  </Stack>
  )
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState({ task, color }) {

  

  return (
    <PopupState variant="popover" popupId="demo-popup-popover"  >
      {(popupState) => (
        <div> {/*className='border-2 border-black'*/}
          <div  {...bindTrigger(popupState)} className={`${color} border-2 border-black`} >
            {task}
          </div>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div className="divide-y divide-slate-200 text-center" onClick={(e) => {
              popupState.close()
              console.log(e.target.innerHTML)
              }}>
              <Typography sx={{ p: 1 }} className='bg-red-500 text-white'>New</Typography>
              <Typography sx={{ p: 1 }} className='bg-orange-500 text-white'>Ongoing</Typography>
              <Typography sx={{ p: 1 }} className='bg-green-500 text-white'>Done</Typography>
              <Typography sx={{ p: 1 }} className='bg-sky-500 text-white'>On Hold</Typography>
              <Typography sx={{ p: 1 }} className='bg-gray-500 text-white'>Cancelled</Typography>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const status_ = ['New', 'Ongoing', 'Done', 'On Hold', 'Cancelled']
const tracked_ = ['True', 'False']
const strategy_ = ['SSJ', 'Tendering']
const type_ = ['PO', 'Contract', 'Amendment']

export default function PopoverPopupState({ task, color, className, onChanging }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover" >
      {(popupState) => (
        <div className=''>
          <div  {...bindTrigger(popupState)} 
            className={`${color} ${className} w-full`}
            > 
          {/* <div  {...bindTrigger(popupState)} className={className} >  */}
            {task}
          </div>

          {/* Status_ */}
          {status_.includes(task) && (
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
                onChanging(e.target.innerHTML)
                }}>
                <Typography sx={{ p: 1 }} className='bg-red-500 text-white'>New</Typography>
                <Typography sx={{ p: 1 }} className='bg-orange-500 text-white'>Ongoing</Typography>
                <Typography sx={{ p: 1 }} className='bg-green-500 text-white'>Done</Typography>
                <Typography sx={{ p: 1 }} className='bg-sky-500 text-white'>On Hold</Typography>
                <Typography sx={{ p: 1 }} className='bg-gray-500 text-white'>Cancelled</Typography>
              </div>
            </Popover>
          )}

          {/* Tracked_ */}
          {tracked_.includes(task) && (
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
                onChanging(e.target.innerHTML)
                }}>
                <Typography sx={{ p: 1 }} className='bg-red-500 text-white'>False</Typography>
                <Typography sx={{ p: 1 }} className='bg-green-500 text-white'>True</Typography>
              </div>
            </Popover>
          )}

          {/* Type_ */}
          {type_.includes(task) && (
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
                onChanging(e.target.innerHTML)
                }}>
                <Typography sx={{ p: 1 }} className='bg-gray-100 text-gray-800'>Contract</Typography>
                <Typography sx={{ p: 1 }} className='bg-gray-400 text-white'>Amendment</Typography>
                <Typography sx={{ p: 1 }} className='bg-gray-500 text-gray-100'>PO</Typography>
              </div>
            </Popover>
          )}

          {/* Strategy_ */}
          {strategy_.includes(task) && (
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
                onChanging(e.target.innerHTML)
                }}>
                <Typography sx={{ p: 1 }} className='bg-gray-100 text-gray-800'>SSJ</Typography>
                <Typography sx={{ p: 1 }} className='bg-gray-500 text-white'>Tendering</Typography>
              </div>
            </Popover>
          )}

        </div>
      )}
    </PopupState>
  );
}

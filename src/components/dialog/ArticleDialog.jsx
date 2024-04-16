import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ArticleDialog({open,handleClose}) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle class="mb-12 mt-4 pb-4 text-center text-3xl font-bold">
      Latest articles
    </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
        <div class="container my-24 mx-auto md:px-6">
  <section class="mb-32 text-center">
    

    <div class="grid gap-6 ">
      <div class="mb-6 lg:mb-0">
        <div
          class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <div class="flex">
            <div
              class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
               <img  src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg" className="w-full " alt="Louvre"  />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out  bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
            </div>
          </div>
          <div class="p-6">
          <h3 className="mb-3 text-2xl font-bold">Lorem ipsum dolor. </h3>            <p class="mb-4 text-neutral-500 dark:text-neutral-300">
              <small>Опубліковано <u>01.01.2024</u> by
                <a href="#!"> Intelekt</a></small>
            </p>
            <p class="mb-4 pb-2">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Sit molestiae veniam sapiente repudiandae? Numquam, voluptatum? 
             Facilis exercitationem iure error dolorum blanditiis 
             mollitia adipisci, officiis, excepturi consequuntur neque corporis molestiae quam.
            </p>
            
          </div>
        </div>
      </div>


    </div>
  </section>
  </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}sx={{color:'black'}}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
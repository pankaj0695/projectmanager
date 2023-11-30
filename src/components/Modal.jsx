import { forwardRef, useImperativeHandle, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';
import { ProjectContext } from '../store/project-context';

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialogRef = useRef();
  const { deleteProject } = useContext(ProjectContext);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  let content;

  if (buttonCaption === 'Delete') {
    content = (
      <>
        <Button>No</Button>
        <Button type='button' onClick={deleteProject}>
          Yes
        </Button>
      </>
    );
  } else {
    content = <Button>{buttonCaption}</Button>;
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className='backdrop:bg-stone-900/80 p-4 rounded-md shadow-md'
    >
      {children}
      <form method='dialog' className='mt-4 text-right'>
        {content}
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;

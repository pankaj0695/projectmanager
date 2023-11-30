import { useRef, useContext } from 'react';

import Input from './Input';
import Modal from './Modal';
import { ProjectContext } from '../store/project-context';

function NewProject() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  const { addProject, cancelAddProject } = useContext(ProjectContext);

  const submitHandler = () => {
    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const dueDate = dueDateRef.current.value;

    if (title === '' || description === '' || dueDate === '') {
      modalRef.current.open();
      return;
    }

    addProject({ title, description, dueDate });

    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dueDateRef.current.value = '';
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption='Ok'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              onClick={cancelAddProject}
              className='text-stone-800 hover:text-stone-950'
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={submitHandler}
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} type='text' label='Title' />
          <Input ref={descriptionRef} label='Description' textarea />
          <Input ref={dueDateRef} type='date' label='Due Date' />
        </div>
      </div>
    </>
  );
}

export default NewProject;

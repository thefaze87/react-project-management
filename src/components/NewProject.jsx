import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescritpion = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (
            !enteredTitle.trim().length ||
            !enteredDescritpion.trim().length ||
            !enteredDueDate.trim().length
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescritpion,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Ok">
                <h2>Invalid Input</h2>
                <p>Oops... looks like you forgot to enter a value.</p>
                <p>
                    Please make sure to provide a valid value for every field.
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    );
}

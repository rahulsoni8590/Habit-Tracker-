import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

import { useState } from 'react';
import { useHabit } from '../context/habitContext';
function NewHabit(props) {
    const [habit, setHabit] = useState("")
    const {createHabit} = useHabit()
    
    const addHabit = () => {
        if(habit === "" || habit.length <= 2){
            toast.error("Please Enter the habit name")
            return
        }
        createHabit(habit)
        setHabit("")
        props.onHide()
        toast.success("New Habit Added")
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New habit
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="inputPassword5">Enter Habit Name</Form.Label>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e)=>{setHabit(e.target.value)}}
                />
                <br></br>
                <Button onClick={addHabit} variant="outline-secondary" id="button-addon2">
                    Add
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewHabit;

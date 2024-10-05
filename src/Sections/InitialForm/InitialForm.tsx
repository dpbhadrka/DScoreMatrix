import Form from '../../Components/FormContainer/Form';
import Input from '../../Components/FormElements/Input-Element/Input';
import Button from '../../Components/FormElements/Button/Button'
import { FormEvent } from 'react';


const InitialForm = () => {

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formDataEntries = Object.fromEntries(formData.entries());
        console.log(formDataEntries);
    }
    return (
        <>
            <Form handleFormSubmit={handleFormSubmit}>
                <h2 className='text-center'>Ready to Play</h2>
                <Input name="team" id="teamName" placeholder="Enter Team Name...." type="text" label='Team Name' className="form-input" required={true} />
                <Input name="over" id="over" placeholder="Enter Playing Over...." type="number" label='Playing Over' className="form-input" required={true} />
                <div className="radio-group">
                    <Input name="game-type" id="target-type" type="radio" label='Target' className="form-input-radio" isChecked={true} required={true} />
                    <Input name="game-type" id="chase-type" type="radio" label='Chase' className="form-input-radio" required={true} />
                </div>
                <Button text="Lets Go..!" className="form-submit-btn" />
            </Form>
        </>
    )
}

export default InitialForm;
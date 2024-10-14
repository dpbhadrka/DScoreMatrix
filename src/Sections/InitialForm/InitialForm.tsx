import Form from '../../Components/FormContainer/Form';
import Input from '../../Components/FormElements/Input-Element/Input';
import Button from '../../Components/FormElements/Button/Button'
import { FormEvent, useContext } from 'react';
import Context from '../../Context/Context';
import { useNavigate } from 'react-router-dom';


const InitialForm = () => {

    const { setTeamName, setTotalOvers } = useContext(Context);
    const navigateTo = useNavigate();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const teamName = String(formData.get('team'));
        const totalOvers = Number(formData.get('over'));
        const gameType = formData.get('game-type');
        // Form value returns a FormDataEntryValue (string | File) or null if the form field doesn’t exist.
        setTeamName(teamName);
        setTotalOvers(totalOvers);
        navigateTo(`/${gameType}/${teamName}`);
    }
    return (
        <>
            <Form handleFormSubmit={handleFormSubmit}>
                <h2 className='text-center'>Ready to Play</h2>
                <Input name="team" id="teamName" placeholder="Enter Team Name...." type="text" label='Team Name' required={true} />
                <Input name="over" id="over" placeholder="Enter Playing Over...." type="number" label='Playing Over' required={true} />
                <div className="radio-group">
                    <Input name="game-type" id="target-type" type="radio" label='Target' isChecked={true} required={true} />
                    <Input name="game-type" id="chase-type" type="radio" label='Chase' required={true} />
                </div>
                <Button text="Lets Go..!" className="form-submit-btn" />
            </Form>
        </>
    )
}

export default InitialForm;
import { FormEvent, useContext } from 'react'
import ReactDOM from 'react-dom'
import Input from '../../Components/FormElements/Input-Element/Input'
import Form from '../../Components/FormContainer/Form'
import Button from '../../Components/FormElements/Button/Button'
import Context from '../../Context/Context'
import './overpopup.css'

export default function Overpopup() {
    const { setTotalOvers } = useContext(Context);
    const handleOverSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const overData = new FormData(e.currentTarget);
        const totalOvers = Number(overData.get('over'));
        setTotalOvers(totalOvers);

    }

    const modalPortal = document.querySelector("#modal-root")!;
    return ReactDOM.createPortal(
        <div className='modal-container'>
            <div className='overpopup'>
                <Form handleFormSubmit={handleOverSubmit}>
                    <h3 className='text-center'>Please Enter Total Over:</h3>
                    <Input name="over" id="over" placeholder="Enter Playing Over...." type="number" label='Playing Over' required={true} />
                    <Button text="Submit" className="form-submit-btn" />
                </Form>
            </div>
        </div>
        , modalPortal
    )
}

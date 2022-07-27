import { TextField, Button } from "@material-ui/core";
import { Form } from "react-bootstrap";
import "./reentercard.scss";

const ReEnterCard = () => {
    return (
        <>
            <div className="ui-re-enter-card-box my-4 d-none">
                <p>Please re-enter your card number</p>
                <Form>
                    <div className="mb">
                        <div className="ui-rec-filed">
                            <TextField
                                id="outlined-basic"
                                label="Ending in 1234"
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                            <Button variant="contained">Confirm</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default ReEnterCard;

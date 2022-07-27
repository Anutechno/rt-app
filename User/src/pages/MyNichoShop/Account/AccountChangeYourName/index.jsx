import { Button, TextField } from "@mui/material";
import "./accountchangeyourname.scss";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";

const AccountChangeYourName = () => {
    return (
        <>
            <div className="ui-cyn-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="ui-cyn-log">
                                <Logo />
                            </div>
                            <div className="ui-cyn-form">
                                <h2>Change your username</h2>
                                <p>
                                    <b>Current username:</b> username <br /> You
                                    can only change your username on every 30
                                    days.
                                </p>
                                <form action="" method="get">
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="New NichoShop username"
                                            variant="outlined"
                                            fullWidth
                                            size="medium"
                                        />
                                    </div>
                                    <Button variant="contained">
                                        Save changes
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountChangeYourName;

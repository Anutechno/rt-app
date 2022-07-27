import { Button, TextField } from "@mui/material";
// import "./accountchangeyourname.scss";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";

const AccountVerifyYou = () => {
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
                                <h2>Update your email address</h2>
                                <p>
                                    <b>Current email:</b> example@domain.com
                                    <br /> A valid email address is requiered to
                                    bid, buy and sell with us. <br /> <br />{" "}
                                    Enter the new email address you would like
                                    to associate with your account below. We
                                    will send a Single-Use Code (SUC) to that
                                    address.
                                </p>
                                <form action="" method="get">
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="New email address"
                                            variant="outlined"
                                            fullWidth
                                            size="medium"
                                            type="email"
                                        />
                                    </div>
                                    <Button variant="contained">
                                        Continue
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

export default AccountVerifyYou;

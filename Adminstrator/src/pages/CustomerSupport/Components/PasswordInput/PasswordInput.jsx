import "./passwordinput.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRef, useState } from "react";

const PasswordInput = () => {
    const inputRef = useRef();

    const [isShow, setIsShow] = useState(false);

    const showHandler = () => {
        setIsShow(false);
        if (inputRef.current.type === "text") {
            inputRef.current.type = "password";
        }
    };

    const hideHandler = () => {
        setIsShow(true);
        if (inputRef.current.type === "password") {
            inputRef.current.type = "text";
        }
    };
    return (
        <>
            <div className="ui-pwd-component">
                <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    ref={inputRef}
                />
                <div className="ui-pwd-icon">
                    {isShow ? (
                        <button onClick={showHandler} type="button">
                            <AiOutlineEye />
                        </button>
                    ) : (
                        <button onClick={hideHandler} type="button">
                            <AiOutlineEyeInvisible />
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default PasswordInput;

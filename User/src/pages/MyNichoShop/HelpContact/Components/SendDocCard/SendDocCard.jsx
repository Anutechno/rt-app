import { useEffect, useRef } from "react";
import filesize from "filesize";
import "./senddoccard.scss";

const SendDocCard = ({ img, name, size }) => {
    const imgRef = useRef();
    const calSize = filesize.partial({ base: 2, standard: "jedec" });
    useEffect(() => {
        console.log(img);
    }, []);
    return (
        <>
            <div className="ui-send-doc-card">
                <div className="ui-send-doc-img">
                    <img
                        ref={imgRef}
                        src={URL.createObjectURL(img)}
                        alt="file"
                    />
                </div>
                <p>{name}</p>
                <p>{calSize(size)}</p>
            </div>
        </>
    );
};

export default SendDocCard;

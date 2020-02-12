import React, {useEffect, useState} from "react"
import ReactQuill from "react-quill"

const WritePost = (props) => {

    const [text,setText] = useState("");
    const handleChange = () => {
        
    }

    return(
        <ReactQuill value={text}
                    onChange={handleChange}
                    />
    )
}
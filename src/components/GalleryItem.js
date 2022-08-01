import { useState } from "react";

function GalleryItem (props) {
    let [View, setView] = useState(false)

    return (
        <div onClick={() => setView(!View)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
        </div>
    )
}

export default GalleryItem
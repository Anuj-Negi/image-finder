import React, { useState, useEffect } from 'react'
import { fabric } from "fabric";

const AddCapPage = (props) => {

    const [canvas, setCanvas] = useState();
    console.log(canvas);
    const [caption, setCaption] = useState('');



    const addRect = () => {
        canvas.add(new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20,
        }))
    }


    const addTriangle = () => {
        canvas.add(new fabric.Triangle({
            width: 20,
            height: 30,
            fill: 'blue',
            left: 50,
            top: 50
        }));
    }


    const addCircle = () => {
        canvas.add(new fabric.Circle({
            radius: 20, fill: 'green', left: 100, top: 100
        }));
    }


    const addText = () => {
        canvas.add(new fabric.IText(caption, { left: 100, top: 100, fill: "white", editable: true }));
    }

    // let image = new Image()
    // image.crossOrigin = "anonymous";
    // image.src = 'HTTPS://REMOTE.HOST/IMG';

    // image.drawImage(image, canvas);

    // canvas.toDataURL();

    function convertCanvasToImage() {
        let image = new Image();
        image.src = canvas.toDataURL();
        return image;
    }





    useEffect(() => {
        const Image = new fabric.Canvas('canvas', {
            width: 500,
            height: 500,
            backgroundColor: "white",
            backgroundImage: props.location.state,
            selectable: true,
            crossOrigin: ""
        })
        


        // fabric.Image.fromURL(props.location.state, (img) => {
        //     Image.backgroundImage = img;
        //     // Image.calcOffset();
        // });

        setCanvas(Image)


    }, [Image])







    return (
        <div className="root ">
            <div className="editPage">
                <canvas id="canvas" crossorigin="anonymous"></canvas>
                <div className="editPanel">
                    <div className="addCaption">
                        <button onClick={addText}>Add Caption</button><input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
                    </div>
                    <div className="shapes">
                        <button className="editBtn" onClick={addRect}>Add Rectangle</button>
                        <button className="editBtn" onClick={addTriangle}>Add Triangle</button>
                        <button className="editBtn" onClick={addCircle}>Add Circle</button>
                        {/* <button onClick={addPolygon}>Add Polygon</button> */}
                    </div>
                    <button className="editBtn" onClick={convertCanvasToImage}><a download="myImage.jpg" href="">Download</a></button>

                </div>
            </div>


        </div>
    )
}

export default AddCapPage

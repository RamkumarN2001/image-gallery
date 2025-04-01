import Image_gallery from "./Components/Image-cnt.js"
import "./Style.css"

import img1 from "./assests/images/BMW.jpg"
import img2 from "./assests/images/Ducaati.jpg"
import img3 from "./assests/images/Hero.jpg"
import img4 from "./assests/images/Pulsar.jpg"
import img5 from "./assests/images/R15.jpg"
import img6 from "./assests/images/Ray.jpg"
import img7 from "./assests/images/Royal Enfield.jpg"
import img8 from "./assests/images/Splender.jpg"


function App() {

const gallery = [
    { image: img1, Name: "BMW Bike" },
    { image: img2, Name: "Ducati Bike" },
    { image: img3, Name: "Hero Bike" },
    { image: img4, Name: "Pulsar Bike" },
    { image: img5, Name: "Yamaha R15 Bike" },
    { image: img6, Name: "Yamaha Ray" },
    { image: img7, Name: "Royal Enfield Bike" },
    { image: img8, Name: "Splender Bike" },
];

    return (
        <div class="Image-Container">
            {
                gallery.map(function (item) {
                    return (
                        <Image_gallery Image={item.image} Brand={item.Name}></Image_gallery>
                    )
                })
            }
        </div>
    )
}
export default App
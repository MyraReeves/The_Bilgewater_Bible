import skull from "./images/skull_mini.jpg"
import ships from "./images/PageNotFound_ships.jpg"


const PageNotFound = () => {

    return (
        <main>
            <div className="page-not-found">
                <h1>
                    <img src={skull} alt="small black and white icon of a skull"/> 404 ERROR <img src={skull} alt="small black and white icon of a skull"/>
                </h1>
                <h2>Scuttle me ship, ye toothless, chum-breathed kraken! <br/>That page does not exist!</h2>
                <img src={ships} alt="Image of a fleet of ships far off in the distance at sea"/>
            </div>

        </main>
    );
};

export default PageNotFound
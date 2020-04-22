import React, {useState} from "react";
import City from "./City";
import cities from "../data";
import "../styles/CardCollection.scss";
import EditComponent from "./EditComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddComponent from "./AddComponent";

export default function CardCollection(props) {
    const [showEditing, setShowEditing] = useState(false);
    const [showAdding, setShowAdding] = useState(false);

    const [id, setId] = useState(0);
    const [sort, setSort] = useState("name ascending");
    const [filter, setFilter] = useState("");


    function toggleEdit(id) {
        setShowEditing(!showEditing);
        setId(id);
    }

    function onCityChanged(newCity) {
        const index = cities.findIndex(city => city.id === newCity.id);
        cities.splice(index, 1, newCity);
        setShowEditing(false);
    }

    function onCityDeleted(id) {
        const index = cities.findIndex(city => city.id === id);
        cities.splice(index, 1);
        setShowEditing(false);
    }

    function onCityAdded(newCity) {
        cities.push({...newCity, id: cities.length + 1});
        setShowAdding(false);
    }


    function changeSort(value) {
        setSort(value);
    }

    function sortCities(by) {
        switch (by) {
            case "name ascending":
                return (a, b) => a.title.localeCompare(b.title);
            case "name descending":
                return (a, b) => b.title.localeCompare(a.title);
            case "rating descending":
                return (a, b) => b.rating - a.rating;
            case "rating ascending":
                return (a, b) => a.rating - b.rating;

        }

    }

    function changeFilter(value) {
        setFilter(value)
    }


    function addNewPlace() {
        setShowAdding(!showAdding);
    }

    return (
        <div className='CardCollection'>
            <div className="menu-area">
                <h1>"Place" Holder</h1>
            </div>

            <div className='sorting-form'>
                <Form>
                    <Form.Group controlId="sorting">
                        <Form.Label>Sort by:</Form.Label>
                        <Form.Control as="select" onChange={(event) => changeSort(event.target.value)}>
                            <option>name ascending</option>
                            <option>name descending</option>
                            <option>rating descending</option>
                            <option>rating ascending</option>
                        </Form.Control>
                        <br/>

                        <Form.Control type="text" onChange={(event) => changeFilter(event.target.value)}
                                      placeholder="search by name"/>
                        <br/>
                    </Form.Group>
                </Form>

            </div>

            <div className="cities-wrapper">

                <Card style={{width: '18rem'}} bg="light">
                    <Card.Img variant="top" src="https://useringo.github.io/project/img/plus-empty.png"/>
                    <Card.Body>
                        <Card.Title>Add new Place</Card.Title>
                        <Button variant="outline-success" onClick={() => addNewPlace()}>Add</Button>
                    </Card.Body>
                </Card>

                {cities
                    .sort(sortCities(sort))
                    .filter(city => city.title.toLowerCase().includes(filter))
                    .map(city => {
                        return <>
                            <City key={city.id}
                                  id={city.id}
                                  title={city.title}
                                  description={city.description}
                                  img={city.img}
                                  rating={city.rating}
                                  toggleEdit={toggleEdit}/>
                        </>
                    })}
                {showEditing ? <EditComponent
                    show={showEditing}
                    city={cities.find(city => city.id === id)}
                    cityChange={onCityChanged}
                    cityDelete={onCityDeleted}
                    onCloseClicked={toggleEdit}/> : null}

                {showAdding ? <AddComponent
                    show={showAdding}
                    cityAdded={onCityAdded}
                    onCloseClicked={addNewPlace}/> : null}

            </div>
        </div>
    )
}
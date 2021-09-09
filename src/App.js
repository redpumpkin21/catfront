import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AllCats from "./Pages/AllCats";
import SingleCat from "./Pages/SingleCat";
import Form from "./Pages/Form";
import Footer from "./Componets/footer";
import About from "./Pages/About";
import './App.css';

function App(props) {
  const url = "https://catapi-628.herokuapp.com/cats/"

  const [cat, setCat] = useState([])

  const nullcat = {
    name: "",
    description: "",
    image: "",
  }

  const [targetCat, setTargetCat] = useState(nullcat)

  const getCats = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setCat(data)
  }
  useEffect (() => {getCats()}, [])
  
  const addCats = async(newCat) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    });    
    getCats();
  };

  const getTargetCat = (cat) => {
    setTargetCat(cat);
    props.history.push("/edit");
  };

  const updateCat = async (cat) => {
    const response = await fetch(url + cat.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cat),
    });
    getCats();
  };
  const deleteCat = async (cat) => {
    const response = await fetch(url + cat.id + "/", {
      method: "delete",
    });
    getCats();
    props.history.push("/");
  };

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };
  
  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };
  
  return (
    <div className="App">
      <h1 style={h1}>Adoptable Cats in Kannapolis</h1>
      <h2>Adopt a cat</h2>
      <Link to="/new">
        <button style={button}>Share a cat</button>
      </Link>
      <Link to="/about">
        <button style={button}>About this site!</button>
      </Link>
      <Link to="/">
        <button style={button}>Home</button>
      </Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllCats {...routerProps} cat={cat} />}
        />

        <Route
          exact
          path="/cats/:id"
          render={(routerProps) => 
            <SingleCat
              {...routerProps}
              cats={cat}
              edit={getTargetCat}
              deleteCat={deleteCat}
            />
          }
        />
        <Route exact path='/about' 
         render={(routerProps) => 
          <About
            {...routerProps}
            cats={cat}
            edit={getTargetCat}
            deleteCat={deleteCat}
          />
        }
          />
        <Route
          exact
          path="/new"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialCat={nullcat}
              handleSubmit={addCats}
              buttonLabel="create cat"
            />
          )}
        />

        <Route
          exact
          path="/edit"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialCat={targetCat}
              handleSubmit={updateCat}
              buttonLabel="update cat"
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

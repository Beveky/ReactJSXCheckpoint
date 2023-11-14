import React from "react";
import { Card } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import { Name, Price, Description, Image } from "./Component"; // Assuming components are in a folder named 'components'
import product from "./Component/product";

const App = () => {
  const firstName = "Beveky";
  return (
    <>
      <div className="App">
        <br />
        <h1> Product </h1>
        <br />

        <div className="Cardss">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              ///////////////////////////////////////////////////////////////////////////////////////////////////
              // a saif el && Image zedtha 8adi just bech ina7ili el problem mta3 image is defined but never used
              ///////////////////////////////////////////////////////////////////////////////////////////////////
              src={firstName && Image && product.image}
              alt={product.name}
            />
            <Card.Body>
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
        </div>
        <div>
          <br />
          <p>Hello, {firstName ? firstName : "there"}!</p>
          {firstName && (
            <img
              className="provided"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Emoji_u1f44c.svg/800px-Emoji_u1f44c.svg.png"
              alt="TheNameProvided"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;

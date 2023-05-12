import Form from "react-bootstrap/Form";

const Search = (props) => {
  const { gameOfThronesData } = props;

  const searchedName = (event) => {
    const app = document.querySelector("#results");

    let resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";
    if (event.target.value === "") {
      return;
    }
    const result = gameOfThronesData.filter((item) => {
      return item.fullName
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    result.forEach((character) => {
      const element = document.createElement("div");
      const name = document.createElement("h2");
      const title = document.createElement("p");
      const pic = document.createElement("img");
      name.textContent = `${character.firstName} ${character.lastName}`;
      title.textContent = character.title;
      pic.src = character.imageUrl;
      element.className = "figure";
      pic.style.width = "100%";
      pic.style.height = "70%";
      pic.style.paddingBottom = "10px";
      name.style.maxWidth = "80%";
      name.style.margin = "auto";
      name.style.fontSize = "25px";
      name.style.fontWeight = "bold";
      name.style.paddingBottom = "10px";
      title.style.maxWidth = "80%";
      title.style.margin = "auto";
      title.style.fontWeight = "bold";
      element.style.margin = "5px";
      element.style.width = "250px";
      element.style.height = "400px";
      app.style.display = "flex";
      app.style.flexFlow = "row wrap";
      app.style.flexDirection = "row";
      app.style.justifyContent = "center";
      element.append(pic);
      element.append(name);
      element.append(title);
      app.append(element);
    });
  };
  return (
    <>
      <div className="h-100 flex justify-content-center">
        <div className="row w-100">
          <h1 className="text-center p-4 w-100">Character Search</h1>
        </div>
        <div className="justify-content-center d-flex">
          <Form.Label for="characterSearch" className="p-2">
            Search for Game of Thrones Character:{" "}
          </Form.Label>
          <Form.Control
            type="text"
            id="characterSearch"
            name="characterSearch"
            className="form-control w-50 align-center"
            onChange={searchedName}
          />
        </div>
        <div id="results" />
      </div>
    </>
  );
};

export default Search;

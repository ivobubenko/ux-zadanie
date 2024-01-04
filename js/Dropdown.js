import changeContent from "./ChangeContent.js";

class Dropdown {
  _name;
  _content;
  constructor(name, content) {
    this._name = name;
    this._content = content;
  }

  createDropdownEl() {
    const listEl = document.createElement("li");
    const dropdown = document.createElement("a");
    dropdown.classList.add("dropdown");
    dropdown.innerText = this._name;

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");

    this._content.forEach((option) => {
      const optionEl = document.createElement("a");
      optionEl.innerText = option;
      optionEl.href = "#";
      const text = optionEl.innerText;
      if (text.includes("Kvíz")) {
        optionEl.addEventListener("click", function (e) {
          e.preventDefault();
          changeContent(text.charAt(0));
        });
      }

      dropdownContent.insertAdjacentElement("beforeend", optionEl);
    });

    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      dropdownContent.classList.toggle("showed");
    });

    listEl.insertAdjacentElement("beforeend", dropdown);
    listEl.insertAdjacentElement("beforeend", dropdownContent);
    return listEl;
  }
}

export default Dropdown;

/*
 <a class="dropdown" href="#">Kvízy</a>
            <div class="dropdown-content">
              <a href="#">Introduction</a>
              <a href="#">Algorithm properties</a>
              <a href="#">Recursion</a>
              <a href="#">Variables & I/O</a>
              <a href="#">Arrays</a>
              <a href="#">Strings</a>
              <a href="#">2D array</a>
              <a href="#">Curses & Command-line Args</a>
              <a href="#">Files</a>
            </div>

*/

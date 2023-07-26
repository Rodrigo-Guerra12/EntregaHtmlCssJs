function noReiniciar() {

    const formElem = document.getElementsByTagName("form")[0];
    formElem.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  
    
    const addTaskButtonElement =
      document.getElementsByClassName("submit")[0];
  
    addTaskButtonElement.addEventListener("click", addTaskHandler)

    console.log("funciona");
  
    
  }

  function addTaskHandler() {
    const nameElem = document.getElementById("nameInput");
    const lastNameElem = document.getElementById("lastNameInput");
    const emailElem = document.getElementById("emailInput");
    const phoneElem = document.getElementById("phoneInput");
  

    const name = nameElem.value;
    const lastName = lastNameElem.value;
    const email = emailElem.value;
    const phone = phoneElem.value;
  
    const datosUser = { name, lastName, email, phone };
  
    if (name && lastName && email && phone) {
      mostrarDatos(datosUser);
     
  
    
    }
  }
 
  function mostrarDatos(datos) {
    console.log("datos: ", datos);
    const { name, lastName, email, phone } = datos;
    window.alert(
      ` Nombre: ${name} | Apellido: ${lastName} | Email: ${email} | Telefono: ${phone} `
      
    );
    console.log(` Nombre: ${name}, Apellido: ${lastName}, Email: ${email}, Telefono: ${phone} `);
  }
  
  
  noReiniciar();

  // mostrarDatos();
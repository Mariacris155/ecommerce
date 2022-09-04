import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario(total,setTotal) {
  
   let [email, setEmail] = useState("")
   let [nombre, setNombre] = useState("")
   let [apellidos, setApellidos] = useState("")
   let [ciudad, setCiudad] = useState("")
   let [calle, setCalle] = useState("")
   let [piso, setPiso] = useState("")
   let [telefono, setTelefono] = useState("")
   let [init, setInit] = useState(
      {
         email: "",

         name: {
            nombre: "",
            apellidos: ""
         },
         direccion: {
            ciudad: "",
            calle: ""
         },
         telefono: ""
      }
   )


   function enviarFormulario() {
      setInit([
         {
            email: email,
            name: {
               nombre: nombre,
               apellidos: apellidos
            },
            address: {
               ciudad: ciudad,
               calle: calle,
               piso: piso
            },
            telefono: telefono
         }])

      if (email !== "" &&  nombre !== "" && apellidos !== "" && ciudad !== "" && calle !== "" && piso !== "" && telefono !== "") {
         alert("En breve recibiras un correo de confirmación")
         JSON.stringify(init)
         

      } else {
         alert("Por favor rellena todos los campos")
      }
   }

   return (
      <div className="container">
         <div className="formulario">
            <h3>Datos de facturación</h3>

            <Form>
            <Form.Text className="text-muted">
                 {/*  Tu compra es de {/* {total}€ En realidad queria poner tambien el total pero se rompe la pagina*/} 
               </Form.Text>
               <Form.Text className="text-muted">
                  No compartiremos tus datos con nadie.
               </Form.Text>
               <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                     onChange={(e) => (setEmail((e.target.value)))} value={email} />
               </Form.Group>

               <Form.Group className="mb-2" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="nombre" placeholder="Nombre"
                     onChange={(e) => (setNombre((e.target.value)))} value={nombre} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="apellidos" placeholder="Apellido"
                     onChange={(e) => (setApellidos((e.target.value)))} value={apellidos} />
               </Form.Group>

               <Form.Group className="mb-4" controlId="formBasicCiudad">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control type="ciudad" placeholder="Ciudad"
                     onChange={(e) => (setCiudad((e.target.value)))} value={ciudad} />
               </Form.Group>

               <Form.Group className="mb-5" controlId="formBasicCalle">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control type="calle" placeholder="Calle"
                     onChange={(e) => (setCalle((e.target.value)))} value={calle} />
               </Form.Group>

               <Form.Group className="mb-6" controlId="formBasicPiso">
                  <Form.Label>Piso</Form.Label>
                  <Form.Control type="piso" placeholder="Piso"
                     onChange={(e) => (setPiso((e.target.value)))} value={piso} />
               </Form.Group>

               <Form.Group className="mb-7" controlId="formBasicTelefono">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="telefono" placeholder="Telefono"
                     onChange={(e) => (setTelefono((e.target.value)))} value={telefono} />
               </Form.Group>


               <Button onClick={() => enviarFormulario()} variant="primary" type="submit">
                  Enviar
               </Button>
            </Form>

         </div>

      </div>

   )
}
export default Formulario

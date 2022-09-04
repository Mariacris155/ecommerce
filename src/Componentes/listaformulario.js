
<div className="formulario">
               <h3>Datos de facturación</h3>

               <p>
                  <label className="colocar_email">email
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={email}
                     onChange={(e) => (setEmail((e.target.value)))} type="email" id="email" placeholder="Escribe tu email" required />
               </p>
             
               <p>
                  <label className="colocar_nombre">Nombre
                  </label>
                  <input value={nombre}
                     onChange={(e) => (setNombre((e.target.value)))} type="text" placeholder="Escribe tu nombre" required />
               </p>

               <p>
                  <label className="colocar_apellidos">Apellidos
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={apellidos}
                     onChange={(e) => (setApellidos((e.target.value)))} type="text" placeholder="Escribe tus apellidos" required />
               </p>

               <p>
                  <label className="colocar_ciudad">Ciudad
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={ciudad}
                     onChange={(e) => (setCiudad((e.target.value)))} type="text" placeholder="Escribe tu ciudad" required />
               </p>
               <p>
                  <label className="colocar_calle">Calle
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={calle}
                     onChange={(e) => (setCalle((e.target.value)))} type="text" placeholder="Escribe tu calle" required />
               </p>

               <p>
                  <label className="colocar_Telefono">Telefono
                     <span className="obligatorio">*</span>
                  </label>
                  <input value={telefono}
                     onChange={(e) => (setTelefono((e.target.value)))} type="phone" id="mensaje" placeholder="Escribe tu telefono" required />
               </p>

               <button onClick={() => enviarFormulario()} type="submit"><p>Enviar</p></button>

               <p className="aviso">
                  <span className="obligatorio"> * </span>los campos son obligatorios.
               </p>


            </div>
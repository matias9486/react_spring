import React from 'react'

export default function AgregarEmpleado() {
    return (
        <div className='container'>
            <div className='container' style={{ margin: "30px" }}>
                <h3 className='text-center'>Agregar Empleado</h3>

                <form>
                    <div className="mb-3">
                        <label htmlfor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name='nombre' required ={true}/>                    
                    </div>

                    <div className="mb-3">
                        <label htmlfor="departamento" className="form-label">Departamento</label>
                        <input type="text" className="form-control" id="departamento" name='departamento' required ={true}/>
                    </div>

                    <div className="mb-3">
                        <label htmlfor="sueldo" className="form-label">Sueldo</label>
                        <input type="number" step="any"  className="form-control" id="sueldo" name='sueldo' required ={true}/>
                    </div>
                    
                    <div className='text-center'>
                        <button type="submit" className="btn btn-warning btn-sm me-3">Agregar Empleado</button>
                        <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}

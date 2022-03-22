import { Route, Routes, Navigate } from "react-router-dom";
import Actualizar from "../component/Actualizar";
import Crear from "../component/Crear";
import Historial from "../component/Historial";
import { Preguntas } from "../component/Preguntas";


export const Dasboard = () => {



    return (
        <div>
             
            <Routes>
                <Route path="/preguntas" element={<Preguntas />} />
                <Route path="/historial" element={<Historial />} />
                <Route path="/actualizar" element={<Actualizar />} />
                <Route path="/crear" element={<Crear />} />
                <Route path="*" element={<Navigate to="/preguntas" />} />
            </Routes>
        </div>
    )
}
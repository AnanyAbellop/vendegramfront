import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Ingresar = () => {
	const { store, actions } = useContext(Context);
	const [datos, setDatos] = useState({
		nombre_usuario: "",
		clave: ""
	});

	return (
		<div
			className="container  justify-content-center my-5  rounded  px-0"
			style={{ background: "#c4c4c4", border_radius: "25px" }}>
			<form>
				<div className="text-center rounded-top" style={{ background: "#03989E" }}>
					<h1 style={{ color: "#ffffff" }}>
						<i className="fas fa-user-circle  mx-2 my-2" style={{ color: "#ffffff" }} />
						{`Ingresa`}
					</h1>
				</div>
				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Nombre de usuario`}</label>
					<input
						type="text"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="nombreHelp"
						value={datos.nombre}
						onChange={e => {
							setDatos({ ...datos, nombre_usuario: e.target.value });
						}}
					/>
				</div>

				<div className="form-group px-3">
					<label htmlFor="exampleInputEmail1">{`Contraseña`}</label>
					<input
						type="password"
						className="form-control rounded-lg"
						id="exampleInputEmail1"
						aria-describedby="contrasenaHelp"
						value={datos.clave}
						onChange={e => {
							setDatos({ ...datos, clave: e.target.value });
						}}
					/>
				</div>
				<div className="justify-content-around d-flex">
					<Link
						type="submit"
						to="/"
						className="btn btn-primary my-3 "
						style={{ background: "#03989E", border: "none" }}
						onClick={() => {
							//	actions.datosRegistroUsuario(datos);
						}}>
						{"Continuar"}
					</Link>
				</div>
			</form>
		</div>
	);
};
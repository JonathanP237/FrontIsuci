"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';

function RegistrarPagina() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [pais, setPais] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const router = useRouter();
  const onSubmit = handleSubmit(async data => {
    if (data.Contraseña !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    // Realiza la lógica de envío de datos al servidor aquí
    const res = await fetch("/auth/Registrar", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  const paises = [
    { value: 'Colombia', label: 'Colombia' },
    { value: 'España', label: 'España' },
    { value: 'Francia', label: 'Francia' },
    { value: 'Italia', label: 'Italia' },
    { value: 'Alemania', label: 'Alemania' },
  ];

  const tiposUsuario = [
    { value: 'Masajista', label: 'Masajista' },
    { value: 'Director de escuadra', label: 'Director de escuadra' },
    { value: 'Ciclista', label: 'Ciclista' },
  ];

  const escuadras = {
    Colombia: 'Team Colombia',
    España: 'Movistar Team',
    Francia: 'Team Sky',
    Italia: 'Team Ineos',
    Alemania: 'Bora-Hansgrohe',
  };

  const tiposContextura = [
    { value: 'Ligera', label: 'Ligera' },
    { value: 'Media', label: 'Media' },
    { value: 'Pesado', label: 'Pesado' },
  ];

  const especialidades = [
    { value: 'Escaladores', label: 'Escaladores' },
    { value: 'Rodadores', label: 'Rodadores' },
    { value: 'Sprinters o embaladores', label: 'Sprinters o embaladores' },
    { value: 'gregarios', label: 'gregarios' },
    { value: 'clasicómanos', label: 'clasicómanos' },
    { value: 'contrarrelojista', label: 'contrarrelojista' },
  ];

  const tiposDocumento = [
    { value: 'Cédula de ciudadanía', label: 'Cédula de ciudadanía' },
    { value: 'Pasaporte', label: 'Pasaporte' },
  ];

  const generos = [
    { value: 'M', label: 'M' },
    { value: 'F', label: 'F' },
  ];

  return (
    <div className=" flex justify-center items-center bg-black">
      <form onSubmit={onSubmit} className="w-1/4">
        <div className="text-white text-center mb-6">
          <div className="font-bold">
            <span className="text-red-600">ISU</span>CI
          </div>
          <h1 className="text-3xl font-bold">Registrar</h1>
          <div className="border-2 w-10 border-white mx-auto mb-2"></div>
        </div>
        
        <label htmlFor="Nombre" className="text-white mb-2 block text-sm text-left">Nombre</label>
        <input type="text" {...register('Nombre', { required: true })} placeholder="Nombre" className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" />
        {errors.Nombre && <span className="text-black text-xs">Nombre es requerido</span>}

        <label htmlFor="Apellido" className="text-white mb-2 block text-sm text-left">Apellido</label>
        <input type="text" {...register('Apellido', { required: true })} placeholder="Apellido" className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" />
        {errors.Apellido && <span className="text-black text-xs">Apellido es requerido</span>}

        <label htmlFor="Correo" className="text-white mb-2 block text-sm text-left">Correo</label>
        <input type="email" {...register('Correo', { required: true })} placeholder="Correo@gmail.com" className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" />
        {errors.Correo && <span className="text-black text-xs">Correo es requerido</span>}

        <label htmlFor="Contraseña" className="text-white mb-2 block text-sm text-left">Contraseña</label>
        <input type="password" {...register('Contraseña', { required: true })} placeholder="Contraseña" className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" />
        {errors.Contraseña && <span className="text-black text-xs">Contraseña es requerida</span>}

        <label htmlFor="confirmPassword" className="text-white mb-2 block text-sm text-left">Confirmar Contraseña</label>
        <input type="password" {...register('confirmPassword', { required: true })} placeholder="Confirmar Contraseña" className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" />
        {errors.confirmPassword && <span className="text-black text-xs">Confirmar Contraseña es requerido</span>}

        <label htmlFor="TipoDocumento" className="text-white mb-2 block text-sm text-left">Tipo de Documento</label>
        <select className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" {...register('TipoDocumento', { required: true })}>
          <option value="">Selecciona el tipo de documento</option>
          {tiposDocumento.map((tipo) => (
            <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
          ))}
        </select>
        {errors.TipoDocumento && <span className="text-black text-xs">Tipo de Documento es requerido</span>}

        <label htmlFor="Documento" className="text-white mb-2 block text-sm text-left">Número de Documento</label>
        <input type="text" {...register('Documento', { required: true })} placeholder="Documento" className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" />
        {errors.Documento && <span className="text-black text-xs">Número de Documento es requerido</span>}

        <label htmlFor="AñosExperiencia" className="text-white mb-2 block text-sm text-left">Años de Experiencia</label>
        <input type="number" {...register('AñosExperiencia', { required: true })} placeholder="Años de experiencia" className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" />
        {errors.AñosExperiencia && <span className="text-black text-xs">Años de Experiencia es requerido</span>}

        <label htmlFor="Genero" className="text-white mb-2 block text-sm text-left">Género</label>
        <select className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" {...register('Genero', { required: true })}>
          <option value="">Selecciona tu género</option>
          {generos.map((genero) => (
            <option key={genero.value} value={genero.value}>{genero.label}</option>
          ))}
        </select>
        {errors.Genero && <span className="text-black text-xs">Género es requerido</span>}

        <label htmlFor="Pais" className="text-white mb-2 block text-sm text-left">País</label>
        <select className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" {...register('Pais', { required: true })} onChange={(e) => setPais(e.target.value)}>
          <option value="">Selecciona tu país</option>
          {paises.map((pais) => (
            <option key={pais.value} value={pais.value}>{pais.label}</option>
          ))}
        </select>
        {errors.Pais && <span className="text-black text-xs">País es requerido</span>}

        <label htmlFor="TipoUsuario" className="text-white mb-2 block text-sm text-left">Tipo de Usuario</label>
        <select className="p-3 rounded block mb-2 w-full bg-white text-black font-bold" {...register('TipoUsuario', { required: true })} onChange={(e) => setTipoUsuario(e.target.value)}>
          <option value="">Selecciona el tipo de usuario</option>
          {tiposUsuario.map((tipo) => (
            <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
          ))}
        </select>
        {errors.TipoUsuario && <span className="text-black text-xs">Tipo de Usuario es requerido</span>}

        {tipoUsuario === 'Ciclista' && (
          <>
            <label htmlFor="TipoContextura" className="text-white mb-2 block text-sm text-left">Tipo de Contextura</label>
            <select className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" {...register('TipoContextura', { required: true })}>
              <option value="">Selecciona tu contextura</option>
              {tiposContextura.map((contextura) => (
                <option key={contextura.value} value={contextura.value}>{contextura.label}</option>
              ))}
            </select>
            
            <label htmlFor="Especialidad" className="text-white mb-2 block text-sm text-left">Especialidad</label>
            <select className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" {...register('Especialidad', { required: true })}>
              <option value="">Selecciona tu especialidad</option>
              {especialidades.map((especialidad) => (
                <option key={especialidad.value} value={especialidad.value}>{especialidad.label}</option>
              ))}
            </select>
            
            <label htmlFor="Escuadra" className="text-white mb-2 block text-sm text-left">Escuadra</label>
            <select className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" {...register('Escuadra', { required: true })}>
              <option value="">Selecciona tu escuadra</option>
              {Object.entries(escuadras).map(([key, value]) => (
                pais === key && <option key={key} value={value}>{value}</option>
              ))}
            </select>
            
            <label htmlFor="Peso" className="text-white mb-2 block text-sm text-left">Peso del Ciclista</label>
            <input type="number" {...register('Peso', { required: true })} placeholder="Peso del ciclista" className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" />
            
            <label htmlFor="Potencia" className="text-white mb-2 block text-sm text-left">Potencia del Ciclista</label>
            <input type="number" {...register('Potencia', { required: true })} placeholder="Potencia del ciclista" className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" />
            
            <label htmlFor="Aceleracion" className="text-white mb-2 block text-sm text-left">Aceleración del Ciclista</label>
            <input type="number" {...register('Aceleracion', { required: true })} placeholder="Aceleración del ciclista" className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" />
            
            <label htmlFor="VelocidadMaxima" className="text-white mb-2 block text-sm text-left">Velocidad Máxima del Ciclista</label>
            <input type="number" {...register('VelocidadMaxima', { required: true })} placeholder="Velocidad máxima del ciclista" className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" />
            
            <label htmlFor="Tiempo" className="text-white mb-2 block text-sm text-left">Tiempo del Ciclista</label>
            <input type="number" {...register('Tiempo', { required: true })} placeholder="Tiempo del ciclista" className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" />
            
            <label htmlFor="GradoRampa" className="text-white mb-2 block text-sm text-left">Grado de la Rampa</label>
            <input type="number" {...register('GradoRampa', { required: true })} placeholder="Grado de la rampa" className="p-3 rounded block mb-2 w-full h-12 bg-white text-black font-bold" />
          </>
        )}
      <div className="flex justify-center items-center">
      <button type="submit" className="bg-green-600 border-2 border-white rounded-full px-12 py-2 font-semibold
       text-white hover:bg-white hover:text-green-600 transition duration-300 ease-in-out"
       onClick={() => router.push('/Login')}>
      Registrar
      </button>
      </div>
      </form>
    </div>
  );
}
export default RegistrarPagina;

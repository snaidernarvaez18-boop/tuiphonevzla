'use client';
import { useState } from 'react';

export default function Home() {
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState('TODAS');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const ciudades = ['TODAS', 'Caracas', 'Valencia', 'Maracaibo', 'Barquisimeto', 'Maracay'];
  const estadosVenezuela = ['Distrito Capital', 'Carabobo', 'Zulia', 'Lara', 'Aragua', 'Miranda', 'Anzoátegui'];

  const [formData, setFormData] = useState({
    model: 'iPhone 13',
    storage: '128GB',
    batteryHealth: '88',
    state: 'Caracas',
    zone: 'Chacao',
    condition: 'Como nuevo',
    details: 'Face ID operativo, libre de fábrica, entrega personal.',
    price: '380'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡iPhone publicado con éxito!');
    setMostrarFormulario(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pb-12 p-4">
      <header className="bg-white shadow-sm border p-4 flex justify-between items-center max-w-6xl mx-auto rounded-xl mb-6">
        <h1 className="text-xl font-extrabold text-blue-600">📱 iPhoneMarket VE</h1>
        <button 
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-700"
        >
          {mostrarFormulario ? 'Ver Catálogo' : '+ Publicar iPhone'}
        </button>
      </header>

      <div className="max-w-6xl mx-auto">
        {mostrarFormulario ? (
          <div className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-xl border">
            <h2 className="text-2xl font-bold mb-4">Publica tu dispositivo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Modelo</label>
                  <select 
                    className="w-full border rounded p-2 mt-1"
                    value={formData.model}
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                  >
                    <option>iPhone 11</option>
                    <option>iPhone 12</option>
                    <option>iPhone 13</option>
                    <option>iPhone 13 Pro Max</option>
                    <option>iPhone 14 Pro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">Capacidad</label>
                  <select 
                    className="w-full border rounded p-2 mt-1"
                    value={formData.storage}
                    onChange={(e) => setFormData({...formData, storage: e.target.value})}
                  >
                    <option>64GB</option>
                    <option>128GB</option>
                    <option>256GB</option>
                    <option>512GB</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Salud de Batería (%)</label>
                  <input 
                    type="number" 
                    className="w-full border rounded p-2 mt-1"
                    value={formData.batteryHealth}
                    onChange={(e) => setFormData({...formData, batteryHealth: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Precio ($ USD)</label>
                  <input 
                    type="number" 
                    className="w-full border rounded p-2 mt-1"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Estado</label>
                  <select 
                    className="w-full border rounded p-2 mt-1"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  >
                    {estadosVenezuela.map(est => <option key={est} value={est}>{est}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">Zona / Municipio</label>
                  <input 
                    type="text" 
                    className="w-full border rounded p-2 mt-1"
                    value={formData.zone}
                    onChange={(e) => setFormData({...formData, zone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Detalles específicos</label>
                <textarea 
                  rows="3"
                  className="w-full border rounded p-2 mt-1"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                />
              </div>

              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">
                Guardar Publicación
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Filtra por Ubicación</h2>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {ciudades.map((ciudad) => (
                  <button
                    key={ciudad}
                    onClick={() => setUbicacionSeleccionada(ciudad)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                      ubicacionSeleccionada === ciudad
                        ? 'bg-blue-600 text-white shadow'
                        : 'bg-white text-gray-700 border hover:bg-gray-100'
                    }`}
                  >
                    {ciudad === 'TODAS' ? '🌍 Todo el país' : `📍 ${ciudad}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">📍 Caracas (Chacao)</span>
                <h3 className="font-bold text-lg mt-2">iPhone 13 Pro - 128GB</h3>
                <p className="text-gray-600 text-sm">Batería: 89% | Libre de fábrica</p>
                <p className="text-xs text-gray-500 mt-1">Face ID activo, incluye caja y cable original.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-extrabold text-green-600">$420</span>
                  <button className="bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-600">
                    💬 Enviar Mensaje
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

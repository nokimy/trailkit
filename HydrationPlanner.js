import React, { useState } from 'react';
import { Droplet, Thermometer, Wind, Watch, User } from 'lucide-react';

const HydrationPlanner = () => {
  const [distance, setDistance] = useState(0);
  const [temperature, setTemperature] = useState(20);
  const [humidity, setHumidity] = useState(50);
  const [duration, setDuration] = useState(0);
  const [weight, setWeight] = useState(70);
  const [sweatRate, setSweatRate] = useState('medium');

  const calculateHydration = () => {
    // Cette formule est simplifiée et devrait être ajustée avec des données plus précises
    let baseRate = 500; // ml par heure
    
    // Ajustements basés sur la température
    baseRate += (temperature - 20) * 25;
    
    // Ajustements basés sur l'humidité
    baseRate += (humidity - 50) * 2;
    
    // Ajustements basés sur le taux de transpiration
    if (sweatRate === 'low') baseRate *= 0.8;
    if (sweatRate === 'high') baseRate *= 1.2;
    
    // Ajustements basés sur le poids (simplifié)
    baseRate *= (weight / 70);
    
    const totalHydration = (baseRate / 1000) * (duration / 60);
    
    return Math.round(totalHydration * 100) / 100; // Arrondi à 2 décimales
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Droplet className="mr-2" /> Hydration Planner
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Distance (km)</label>
            <input 
              type="number" 
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
            <div className="flex items-center">
              <Thermometer className="mr-2" />
              <input 
                type="range" 
                min="0" 
                max="40" 
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full"
              />
              <span className="ml-2">{temperature}°C</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Humidity (%)</label>
            <div className="flex items-center">
              <Wind className="mr-2" />
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={humidity}
                onChange={(e) => setHumidity(Number(e.target.value))}
                className="w-full"
              />
              <span className="ml-2">{humidity}%</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Estimated Duration (minutes)</label>
            <div className="flex items-center">
              <Watch className="mr-2" />
              <input 
                type="number" 
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Body Weight (kg)</label>
            <div className="flex items-center">
              <User className="mr-2" />
              <input 
                type="number" 
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Sweat Rate</label>
            <select 
              value={sweatRate}
              onChange={(e) => setSweatRate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-green-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Hydration Recommendation</h3>
        <p className="text-lg">
          Based on your inputs, you should aim to drink approximately <strong>{calculateHydration()} liters</strong> of water during your run.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Remember to adjust your intake based on how you feel during the run. It's better to drink small amounts frequently rather than large amounts infrequently.
        </p>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Tips for Staying Hydrated</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Start your run well-hydrated by drinking 400-600ml of water 2-3 hours before your run.</li>
          <li>For runs longer than 60-90 minutes, consider using sports drinks to replenish electrolytes.</li>
          <li>Practice your hydration strategy during training runs to find what works best for you.</li>
          <li>Listen to your body - if you're thirsty, drink!</li>
        </ul>
      </div>
    </div>
  );
};

export default HydrationPlanner;

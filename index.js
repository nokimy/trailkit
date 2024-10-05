jsx
import React, { useState } from'react';
import { 
  Search, 
  Home, 
  Info, 
  Send, 
  Globe, 
  Cpu, 
  Navigation, 
  Shield, 
  Apple, 
  Activity, 
  Mountain,
  Droplet, Thermometer, Wind, Watch, User
} from 'lucide-react';

// Composants principaux
const Header = () => (
  <header className="flex justify-between items-center p-4 bg-green-600 text-white">
    <div className="flex items-center">
      <Mountain className="mr-2" />
      <h1 className="text-xl font-bold">The Runner Jar</h1>
    </div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="flex items-center"><Home className="mr-1" /> Home</a></li>
        <li><a href="#" className="flex items-center"><Info className="mr-1" /> About</a></li>
        <li><a href="#" className="flex items-center"><Send className="mr-1" /> Submit Resource</a></li>
      </ul>
    </nav>
  </header>
);

const SearchBar = () => (
  <div className="max-w-2xl mx-auto my-8">
    <div className="flex items-center bg-white rounded-full shadow-lg">
      <input 
        type="text" 
        placeholder="Search resources..." 
        className="w-full py-2 px-6 rounded-l-full focus:outline-none"
      />
      <button className="bg-green-500 text-white rounded-r-full p-2">
        <Search />
      </button>
    </div>
  </div>
);

const CategoryFilter = () => {
  const categories = ['Gear', 'Training', 'Navigation', 'Safety', 'Nutrition'];
  return (
    <div className="flex justify-center space-x-2 my-4">
      {categories.map(category => (
        <button key={category} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-green-500 hover:text-white">
          {category}
        </button>
      ))}
    </div>
  );
};

const ToolCard = ({ icon, title, description, tags, link }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap mb-4">
      {tags.map(tag => (
        <span key={tag} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2 mb-2">{tag}</span>
      ))}
    </div>
    <a href={link} className="text-green-600 hover:text-green-800 font-semibold">View tool →</a>
  </div>
);

const ToolGrid = () => {
  const tools = [
    {
      icon: <Cpu />,
      title: "Trail Running Shoe Finder",
      description: "Interactive tool to help you find the perfect trail running shoes based on your preferences and running style.",
      tags: ["shoes", "gear", "interactive"],
      link: "#"
    },
    {
      icon: <Activity />,
      title: "Elevation Gain Calculator",
      description: "Calculate the total elevation gain for your trail run using GPS data or manual input.",
      tags: ["elevation", "calculator"],
      link: "#"
    },
    {
      icon: <Apple />,
      title: "Hydration Planner",
      description: "Plan your hydration strategy for long trail runs based on distance, weather, and personal factors.",
      tags: ["hydration", "nutrition", "planning"],
      link: "/hydration-planner"
    },
    {
      icon: <Shield />,
      title: "Trail Safety Checklist",
      description: "Comprehensive checklist to ensure you're prepared for safe trail running adventures.",
      tags: ["safety", "checklist", "preparation"],
      link: "#"
    },
    {
      icon: <Activity />,
      title: "Interval Training Generator",
      description: "Create custom interval training plans tailored to your trail running goals.",
      tags: ["training", "intervals", "workout"],
      link: "#"
    },
    {
      icon: <Mountain />,
      title: "Trail Difficulty Rater",
      description: "Assess and compare trail difficulties using factors like distance, elevation, terrain, and features.",
      tags: ["trails", "difficulty", "rating"],
      link

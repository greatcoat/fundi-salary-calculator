import React, { useState, useMemo } from 'react';
import salaryData from '../data/salaryData';

const SalaryCalculator = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState(null);

  const categories = Object.keys(salaryData);
  const locations = useMemo(
    () => (category ? Object.keys(salaryData[category]) : []),
    [category]
  );
  const roles = useMemo(
    () =>
      category && location
        ? Object.keys(salaryData[category][location])
        : [],
    [category, location]
  );
  const experienceLevels = ['0-2', '2-5', '5-9'];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setLocation('');
    setRole('');
    setExperience('');
    setSalary(null);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setRole('');
    setExperience('');
    setSalary(null);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setExperience('');
    setSalary(null);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
    setSalary(null);
  };

  const calculateSalary = () => {
    if (category && location && role && experience) {
      const salaryValue =
        salaryData[category][location][role][experience];
      setSalary(salaryValue);
    }
  };

  return (
    <div className="container">
      <h2>Salary Calculator</h2>
      <p>Based on Fundi 2023 Survey Results</p>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="input-field"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <select
          id="location"
          value={location}
          onChange={handleLocationChange}
          className="input-field"
          disabled={!category}
        >
          <option value="">Select Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          value={role}
          onChange={handleRoleChange}
          className="input-field"
          disabled={!location}
        >
          <option value="">Select Role</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience</label>
        <select
          id="experience"
          value={experience}
          onChange={handleExperienceChange}
          className="input-field"
          disabled={!role}
        >
          <option value="">Select Experience</option>
          {experienceLevels.map((exp) => (
            <option key={exp} value={exp}>
              {exp} years
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={calculateSalary}
        className="button"
        disabled={!category || !location || !role || !experience}
      >
        Calculate Salary
      </button>
      {salary !== null && (
        <div className="salary-display">
          Estimated Monthly Salary: R{salary.toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default SalaryCalculator;
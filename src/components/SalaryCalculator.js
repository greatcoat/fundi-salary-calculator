import React, { useState, useEffect } from 'react';
import salaryData from '../data/salaryData';
import { CustomSelect } from './CustomInputs';

const SalaryCalculator = () => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [role, setRole] = useState('');
    const [experience, setExperience] = useState(0);  // Default to 0
    const [salary, setSalary] = useState(null);

    useEffect(() => {
        const slider = document.getElementById("experienceSlider");
        if (slider) {
            const progress = (experience / slider.max) * 100;  // Calculate progress percentage
            slider.style.setProperty("--progress", `${progress}%`);
        }
    }, [experience]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setLocation('');
        setRole('');
        setExperience(0);
        setSalary(null);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
        setRole('');
        setExperience(0);
        setSalary(null);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        setExperience(0);
        setSalary(null);
    };

    // Function to map experience in years to a specific range
    const getExperienceRange = (years) => {
        if (years >= 0 && years <= 2) return "0-2";
        if (years >= 3 && years <= 5) return "2-5";
        if (years >= 6 && years <= 9) return "5-9";
        return null;  // Fallback if no valid range is found
    };

    // Function to infer the role level based on available salary data
    const inferRoleLevel = (roleData) => {
        const hasJunior = roleData["0-2"] !== null;
        const hasMid = roleData["2-5"] !== null;
        const hasSenior = roleData["5-9"] !== null;

        // Role is Junior if it only has salary data for "0-2"
        if (hasJunior && !hasMid && !hasSenior) return "Junior";

        // Role is Mid if it only has salary data for "2-5"
        if (!hasJunior && hasMid && !hasSenior) return "Mid";

        // Role is Senior if it only has salary data for "5-9"
        if (!hasJunior && !hasMid && hasSenior) return "Senior";

        // Role is Junior/Mid if it has "0-2" and "2-5" but no "5-9"
        if (hasJunior && hasMid && !hasSenior) return "Junior/Mid";

        // Role is Mid/Senior if it has "2-5" and "5-9" but no "0-2"
        if (!hasJunior && hasMid && hasSenior) return "Mid/Senior";

        // Role spans all levels if it has salary data for all ranges (Junior, Mid, Senior)
        if (hasJunior && hasMid && hasSenior) return "All Levels";

        // Return null if no data is found (edge case)
        return null;
    };

    const interpolateSalary = (roleData, experienceRange, roleLevel) => {
        const ranges = ["0-2", "2-5", "5-9"];
        const rangeIndex = ranges.indexOf(experienceRange);

        // Prevent interpolation outside of role-level constraints
        if (roleLevel === "Junior" && experienceRange === "5-9") {
            return null;  // Junior roles shouldn't interpolate into Senior levels
        }

        if (roleLevel === "Mid" && (experienceRange === "0-2" || experienceRange === "5-9")) {
            return null;  // Mid-level roles shouldn't interpolate into Junior or Senior levels
        }

        if (roleLevel === "Senior" && experienceRange !== "5-9") {
            return null;  // Senior roles shouldn't interpolate into Junior or Mid levels
        }

        if (roleLevel === "Junior/Mid" && experienceRange === "5-9") {
            return null;  // Junior/Mid roles shouldn't interpolate into Senior levels
        }

        if (roleLevel === "Mid/Senior" && experienceRange === "0-2") {
            return null;  // Mid/Senior roles shouldn't interpolate into Junior levels
        }

        // **Allow interpolation across all levels** if the role is classified as "All Levels"
        if (roleLevel === "All Levels") {
            // Interpolate freely across Junior, Mid, and Senior levels
        }

        // Proceed with interpolation within the valid ranges for the role level
        let prevValue = null, nextValue = null;

        // Search for the previous available salary
        for (let i = rangeIndex - 1; i >= 0; i--) {
            if (roleData[ranges[i]] !== null) {
                prevValue = roleData[ranges[i]];
                break;
            }
        }

        // Search for the next available salary
        for (let i = rangeIndex + 1; i < ranges.length; i++) {
            if (roleData[ranges[i]] !== null) {
                nextValue = roleData[ranges[i]];
                break;
            }
        }

        // If both previous and next values exist, calculate the average
        if (prevValue !== null && nextValue !== null) {
            return (prevValue + nextValue) / 2;
        }

        // If only one side has data, return that as a fallback
        return prevValue !== null ? prevValue : nextValue;
    };

    useEffect(() => {
        if (category && location && role && experience !== '') {
            const experienceRange = getExperienceRange(experience);
            const roleData = salaryData[category][location][role];
            const roleLevel = inferRoleLevel(roleData);

            let salaryValue = roleData[experienceRange];

            // If the salary for the selected range is missing, interpolate only if it makes sense for the role level
            if (salaryValue === null) {
                salaryValue = interpolateSalary(roleData, experienceRange, roleLevel);
            }

            // If salary is still null, provide a message instead of interpolating
            if (salaryValue === null) {
                setSalary(`The experience level (${experienceRange}) is not applicable for a ${roleLevel} role like ${role}.`);
            } else {
                setSalary(salaryValue);  // Set the interpolated or available salary
            }
        }
    }, [category, location, role, experience]);
    return (
        <div className="container">
            <h2>Salary Calculator</h2>
            <p>Based on Fundi 2024 Candidate data</p>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <CustomSelect
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    options={Object.keys(salaryData)}
                    placeholder="Select Category"
                />
            </div>

            <div className="form-group">
                <label htmlFor="location">Location</label>
                <CustomSelect
                    id="location"
                    value={location}
                    onChange={handleLocationChange}
                    options={category ? Object.keys(salaryData[category]) : []}
                    disabled={!category}
                    placeholder="Select Location"
                />
            </div>

            <div className="form-group">
                <label htmlFor="role">Role</label>
                <CustomSelect
                    id="role"
                    value={role}
                    onChange={handleRoleChange}
                    options={location ? Object.keys(salaryData[category][location]) : []}
                    disabled={!location}
                    placeholder="Select Role"
                />
            </div>

            <div className="slider-container">
                <label htmlFor="experienceSlider" className="slider-label">
                    Experience (<span className="slider-value">{experience}</span> yrs)
                </label>
                <div className="slider-wrapper">
                    <input
                        type="range"
                        id="experienceSlider"
                        min="0"
                        max="9"
                        value={experience}
                        onChange={(e) => setExperience(Number(e.target.value))}
                        disabled={!role}
                        className="slider-progress"
                    />
                </div>
            </div>

            {salary !== null && (
                <div className="salary-display">
                    {typeof salary === "number" ? (
                        <p>Estimated Monthly Salary: <span>R{salary.toLocaleString()}</span></p>
                    ) : (
                        <p>{salary}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SalaryCalculator;
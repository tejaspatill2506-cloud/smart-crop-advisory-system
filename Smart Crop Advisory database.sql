CREATE DATABASE smart_crop_db;

USE smart_crop_db;

CREATE TABLE crops (
    id INT AUTO_INCREMENT PRIMARY KEY,
    crop_name VARCHAR(100),
    soil_type VARCHAR(50),
    season VARCHAR(50),
    fertilizer TEXT,
    pesticide TEXT
);

INSERT INTO crops (crop_name, soil_type, season, fertilizer, pesticide) VALUES
('Rice', 'Clay', 'Kharif', 'Urea, DAP', 'Carbaryl'),
('Wheat', 'Loamy', 'Rabi', 'NPK', 'Chlorpyrifos'),
('Cotton', 'Black', 'Kharif', 'Potash', 'Imidacloprid'),
('Maize', 'Loamy', 'Kharif', 'DAP', 'Thiamethoxam');

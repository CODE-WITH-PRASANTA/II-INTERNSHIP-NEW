import React, { useState } from 'react';
import './Map.css';

const Map = () => {
  const [mapType, setMapType] = useState('roadmap'); // 'roadmap' | 'satellite'
  const [zoomLevel, setZoomLevel] = useState(12);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Noida Location Coordinates
  const latitude = 28.5355;
  const longitude = 77.3910;

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 1, 4));
  };

  const toggleMapType = () => {
    setMapType((prev) => (prev === 'roadmap' ? 'satellite' : 'roadmap'));
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=${mapType === 'satellite' ? 'k' : 'm'}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`map-section-wrapper ${isFullscreen ? 'map-fullscreen-mode' : ''}`}>
      <div className="map-card-container">
        
        {/* Google Maps Iframe */}
        <iframe
          title="Google Map Noida"
          className="map-iframe-display"
          src={mapEmbedUrl}
          loading="lazy"
          allowFullScreen
        />

        {/* Top-Left Location Info Card */}
        <div className="map-location-badge">
          <div className="map-location-details">
            <h4 className="map-location-title">Noida</h4>
            <p className="map-location-subtitle">Noida, Uttar Pradesh</p>
          </div>
          <div className="map-location-actions">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-badge-btn"
              title="View larger map"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-badge-btn map-badge-btn--primary"
              title="Get Directions"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Single Satellite / Map Switcher Button */}
        <div className="map-layer-switch-box">
          <button 
            type="button" 
            className="map-layer-thumbnail-btn" 
            onClick={toggleMapType}
            title={`Switch to ${mapType === 'roadmap' ? 'Satellite' : 'Map'} view`}
          >
            <div className={`map-thumbnail-preview ${mapType === 'roadmap' ? 'thumb-satellite' : 'thumb-roadmap'}`} />
            <span className="map-layer-label">
              {mapType === 'roadmap' ? 'Satellite' : 'Map'}
            </span>
          </button>
        </div>

        {/* Bottom-Right Zoom & Fullscreen Controls */}
        <div className="map-custom-controls">
          <button 
            type="button" 
            className="map-ctrl-btn" 
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
          </button>

          <div className="map-zoom-btn-group">
            <button 
              type="button" 
              className="map-ctrl-btn map-btn-top" 
              onClick={handleZoomIn}
              title="Zoom In"
            >
              +
            </button>
            <button 
              type="button" 
              className="map-ctrl-btn map-btn-bottom" 
              onClick={handleZoomOut}
              title="Zoom Out"
            >
              −
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Map;
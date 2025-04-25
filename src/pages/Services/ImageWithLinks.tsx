import React from 'react';

interface ClickableArea {
  coords: string;  // Format: "x1,y1,x2,y2" for rect or "x,y,radius" for circle
  href: string;
  shape: 'rect' | 'circle' | 'poly';
  alt: string;
}

interface ImageWithLinksProps {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  clickableAreas: ClickableArea[];
  mapName: string;
  showDebugAreas?: boolean; // Optional prop to show debug outlines
}

const ImageWithLinks: React.FC<ImageWithLinksProps> = ({
  src,
  alt,
  width,
  height,
  clickableAreas,
  mapName,
  showDebugAreas = false // Default to false
}) => {
  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        useMap={`#${mapName}`}
        className="max-w-full h-auto border-2 border-indian-saffron/30 rounded-md transition-all duration-300 group-hover:border-indian-saffron shadow-sm group-hover:shadow-md"
      />

      {/* Debug outlines for clickable areas */}
      {showDebugAreas && clickableAreas.map((area, index) => {
        if (area.shape === 'rect') {
          const [x1, y1, x2, y2] = area.coords.split(',').map(Number);
          return (
            <div
              key={`debug-${index}`}
              className="absolute border-2 border-red-500 bg-red-200 bg-opacity-30 cursor-pointer"
              style={{
                left: `${x1}px`,
                top: `${y1}px`,
                width: `${x2 - x1}px`,
                height: `${y2 - y1}px`,
                pointerEvents: 'none'
              }}
              title={area.alt}
            />
          );
        }
        return null;
      })}

      <map name={mapName}>
        {clickableAreas.map((area, index) => (
          <area
            key={index}
            shape={area.shape}
            coords={area.coords}
            href={area.href}
            alt={area.alt}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </map>
    </div>
  );
};

export default ImageWithLinks;

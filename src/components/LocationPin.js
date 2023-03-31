import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
const LocationPin = ({ lat, lng, text }) => {
  return (
    <div>
      <Icon icon={locationIcon} className="pin-icon" />
    </div>
  );
};

export default LocationPin;

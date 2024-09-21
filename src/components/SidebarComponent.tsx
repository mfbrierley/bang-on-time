import "../styles/SidebarComponent.scss";
import { Set } from "../types/types";

interface SidebarProps {
  sets: string[];
  selectedSet: Set;
  onSetLinkClick: (set: Set) => void;
}

const SidebarComponent: React.FC<SidebarProps> = (props) => {
  const handleSetLinkClick = (set: string) => {
    props.onSetLinkClick(set as Set);
  };

  return (
    <div className="mb-sidebar">
      {props.sets.map((set: string) => (
        <div
          key={set}
          className={`${
            set === props.selectedSet ? "mb-active" : ""
          } mb-set-link`}
          onClick={() => handleSetLinkClick(set)}
        >
          <p className="mb-set-name">{`💥 ${set}`}</p>
        </div>
      ))}
    </div>
  );
};

export default SidebarComponent;

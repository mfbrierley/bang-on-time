import { Set } from "../types/types";
import "../styles/ContentComponent.scss";
import SetComponent from "./SetComponent";

interface ContentProps {
  selectedSet: Set;
}

const ContentComponent: React.FC<ContentProps> = (props) => {
  const renderContent = () => {
    switch (props.selectedSet) {
      case "Set 1":
        return <SetComponent setName="Set 1" />;
      case "Set 2":
        return <SetComponent setName="Set 2" />;
      case "Set 3":
        return <SetComponent setName="Set 3" />;
      case "Finale":
        return <SetComponent setName="Finale" />;
      default:
        return <div>Select a set to see the content</div>;
    }
  };

  return <div className="mb-content-panel">{renderContent()}</div>;
};

export default ContentComponent;

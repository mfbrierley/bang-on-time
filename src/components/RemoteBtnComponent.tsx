import "../styles/RemoteBtnComponent.scss";
import { Firework } from "../types/types";

interface RemoteBtnProps {
  data: Firework;
}

const RemoteBtnComponent: React.FC<RemoteBtnProps> = (props) => {
  return (
    <div className="mb-remote-btn">
      <span>{props.data.cueNumber}</span>
    </div>
  );
};

export default RemoteBtnComponent;

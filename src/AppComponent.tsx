import { Col, Container, Row } from "react-bootstrap";
import SidebarComponent from "./components/SidebarComponent";
import "./styles/AppComponent.scss";
import { useState } from "react";
import { Set } from "./types/types";
import ContentComponent from "./components/ContentComponent";

const sets: Set[] = ["Set 1", "Set 2", "Set 3", "Finale"];

const AppComponent: React.FC = () => {
  const [selectedSet, setSelectedSet] = useState<Set>("Set 1");
  return (
    <div className="mb-app-container">
      <Container fluid="md" className="mb-app" style={{ maxWidth: "1400px" }}>
        <Row>
          <Col md={2} className="mb-sidebar">
            <SidebarComponent
              sets={sets}
              selectedSet={selectedSet}
              onSetLinkClick={setSelectedSet}
            />
          </Col>
          <Col md={10} className="mb-content">
            <ContentComponent selectedSet={selectedSet} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppComponent;

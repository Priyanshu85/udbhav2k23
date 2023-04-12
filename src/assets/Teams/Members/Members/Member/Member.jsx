import React from "react";
import { Container, Designation } from "../../../../../components/shared/Teams/style";

// Dummy Image
import img from "../../../../assets/dummy-person.webp";

function Member({ size = 0 }) {
  const [hover, setHover] = React.useState(false);

  return (
    <Container
      size={size}
      style={{
        backgroundImage: hover
          ? `linear-gradient(128deg, #0000006b 0%, #0000006b 100%), url(${img})`
          : `linear-gradient(128deg, #65429987 4%, #6170ba46 46%, #2acabf46 81%), url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          display: hover ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>Mosh Hamedani</div>
        <Designation>UI/UX</Designation>
      </div>
    </Container>
  );
}

export default Member;

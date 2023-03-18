import React, { useEffect, useState } from "react";
import { Box, Typography, Rating, Button, Grid } from "@mui/material";

const Evaluation = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNextSection = () => {
    if (currentSection < sectionContents.length) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleRating = () => {
    handleNextSection();
  };

  const sectionContents = [
    <Box>
      <Typography component="legend">{`님은 아직 평가하지 않으셨습니다`}</Typography>
      <Button onClick={handleNextSection}>평가하기</Button>
    </Box>,
  ];

  [
    "아이디어와 내용의 새로움",
    "내용의 풍부함",
    "내용의 논리성",
    "구조의 독창성",
    "구조의 유기성",
    "표현의 참신성",
    "표현의 적절성",
    "관점과 개성",
    "재미와 설득력",
  ].forEach((content) => {
    sectionContents.push(
      <Box>
        <Typography component="legend">{content}</Typography>
        <Rating
          onChange={() => {
            handleRating();
          }}
        ></Rating>
      </Box>
    );
  });

  sectionContents.push(
    <Box>
      <Typography component="legend">모든 평가가 완료되었습니다.</Typography>
      <Button>다음 데이터</Button>
    </Box>
  );

  useEffect(() => {
    console.log("currentSection", currentSection);
  }, [currentSection]);
  return (
    <>
      <Grid
        container
        flexDirection={"column"}
        sx={{
          overflow: "hidden",
        }}
      >
        {sectionContents.map((sectionContent, idx) => (
          <Grid
            item
            key={idx}
            sx={{
              top: 0,
              transition: "transform 0.5s ease-in-out",
              width: "100%",
              transform:
                currentSection === idx
                  ? "translateX(0)"
                  : `translateX(${100 * (idx - currentSection)}%)`,
              zIndex: idx === currentSection ? 1 : 0,
              position: idx === currentSection ? "relative" : "absolute",
            }}
          >
            {sectionContent}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Evaluation;

import React, { useEffect, useState } from "react";
import { Box, Typography, Rating, Button, Grid } from "@mui/material";

const questions = [
  "아이디어와 내용의 새로움",
  "내용의 풍부함",
  "내용의 논리성",
  "구조의 독창성",
  "구조의 유기성",
  "표현의 참신성",
  "표현의 적절성",
  "관점과 개성",
  "재미와 설득력",
];

const Evaluation = (props) => {
  const { userName } = props;
  const [currentSection, setCurrentSection] = useState(0);
  const [rating, setRating] = useState([]);

  const handleNextSection = () => {
    if (currentSection < sectionContents.length) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleRating = (newRate) => {
    setRating([...rating, newRate]);
    handleNextSection();
  };

  const handleUndo = () => {
    const curRating = rating;
    curRating.pop();
    setRating(curRating);
    setCurrentSection(currentSection - 1);
  };

  const handleReset = () => {
    setRating([]);
    setCurrentSection(0);
  };

  const sectionContents = [
    <Box>
      <Typography
        component="legend"
        sx={{ padding: "20px 0px" }}
      >{`${userName} 님은 아직 평가하지 않으셨습니다`}</Typography>
      <Button variant="outlined" onClick={handleNextSection}>
        평가하기
      </Button>
    </Box>,
  ];

  questions.forEach((content) => {
    sectionContents.push(
      <>
        <Box>
          <Typography component="legend">{content}</Typography>
          <Typography component="legend">{`(${rating.length + 1} / ${
            questions.length
          })`}</Typography>
          <Rating
            onChange={(event, newValue) => {
              handleRating(newValue);
            }}
          />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Button variant="outlined" onClick={handleUndo}>
            이전으로
          </Button>
        </Box>
      </>
    );
  });

  sectionContents.push(
    <>
      <Box>
        <Typography component="legend" sx={{ marginBottom: "20px" }}>
          모든 평가가 완료되었습니다.
        </Typography>
      </Box>
      <Box
        sx={{ marginTop: 2, display: "flex", gap: 3, justifyContent: "center" }}
      >
        <Button variant="outlined" onClick={handleUndo}>
          이전으로
        </Button>
        <Button variant="outlined">다음 데이터</Button>
      </Box>
    </>
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
              position: idx === currentSection ? "relative" : "absolute",
              opacity: idx === currentSection ? 1 : 0,
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

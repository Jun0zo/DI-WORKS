import React, { cloneElement, useEffect, useState } from "react";
import { Chip, ToggleButtonGroup, Box, ToggleButton } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import PaletteIcon from "@mui/icons-material/Palette";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TranslateIcon from "@mui/icons-material/Translate";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NumbersIcon from "@mui/icons-material/Numbers";

const wordAndIconMaps = [
  { word: "@PERSON(\\d+)", icon: <FaceIcon />, symbol: "사람" },
  { word: "@CAPS(\\d+)", icon: <PaletteIcon />, symbol: "작품" },
  { word: "@MONTH(\\d+)", icon: <CalendarTodayIcon />, symbol: "날짜" },
];

const _replaceSymbols = (sentence, isListed, isSymboled) => {
  sentence = sentence + ". ";
  const words = sentence.split(" ");

  // Replace any words that match the wordsToReplace list with "Icon Chip" components
  const replacedWords = words.map((word, idx) => {
    if (isSymboled) {
      for (const { word: regex, icon, symbol } of wordAndIconMaps) {
        const pattern = new RegExp(regex);
        const match = word.match(pattern);
        if (match) {
          const match = word.match(pattern);
          const number = match[1];
          return <Chip key={idx} icon={icon} label={symbol + " " + number} />;
        }
      }
      return word;
    } else {
      return word;
    }
  });

  const separatedWords = replacedWords.reduce((acc, cur) => [acc, " ", cur]);
  return <>{separatedWords}</>;
};
const getArticle = (sentenceLists, isListed, isSymboled) => {
  return (
    <div>
      {sentenceLists.map((sentenceInfo, idx) => {
        const sentence = sentenceInfo[`s${idx + 1}`];
        return (
          <span style={{ lineHeight: "25px" }} key={idx}>
            {isListed ? `${idx + 1}. ` : ""}
            {_replaceSymbols(sentence, isListed, isSymboled)}
            {isListed ? <br /> : ""}
          </span>
        );
      })}
    </div>
  );
};

const Article = (props) => {
  const { korean, english } = props;

  const [article, setArticle] = useState(<></>);
  const [formats, setFormats] = useState(() => ["translate", "symbol"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  useEffect(() => {
    const isTranslated = formats.find((format) => format === "translate");
    const isListed = formats.find((format) => format === "list");
    const isSymboled = formats.find((format) => format === "symbol");

    if (korean && english) {
      const article = isTranslated ? korean : english;
      const chnaged_article = getArticle(article, isListed, isSymboled);
      setArticle(chnaged_article);
    } else {
      setArticle(<></>);
    }
  }, [formats, korean, english]);

  return (
    <Box sx={{ textAlign: "left" }}>
      <div style={{ textAlign: "right" }}>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formats"
          sx={{ marginBottom: "20px" }}
        >
          <ToggleButton value="translate" aria-label="translate" size="small">
            <TranslateIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list" size="small">
            <FormatListBulletedIcon />
          </ToggleButton>
          <ToggleButton value="symbol" aria-label="symbol" size="small">
            <NumbersIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>{article}</div>
    </Box>
  );
};

export default Article;

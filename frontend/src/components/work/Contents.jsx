import { Grid, Button, Box, Stack, Chip, Typography } from "@mui/material";

import ProgressBar from "src/components/global/ProgressBar";

import Rank1 from "src/images/rank_1.svg";
import Rank2 from "src/images/rank_2.svg";
import Rank3 from "src/images/rank_3.svg";
import Rank4 from "src/images/rank_4.png";
import Rank5 from "src/images/rank_5.png";

const rankingImagesURL = [Rank1, Rank2, Rank3, Rank4, Rank5];

const WorkCard = ({ workInfo }) => {
  const { workId, imageURL, title, hashTagList, progressInfo } = workInfo;
  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        gap: "4px",
        padding: "10px",
        borderRadius: "5px",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.cursor = "pointer";
        e.currentTarget.style.boxShadow = "0px 4px 16px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0)";
      }}
    >
      <Grid item>
        <a href={`/work/${workId}/overview`}>
          <div
            style={{
              width: "100%",
              height: "160px",
              borderRadius: 12,
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
            alt={"thumb-nail"}
          />
        </a>
      </Grid>
      <Grid item>
        <h3>{title}</h3>
      </Grid>
      <Grid item>
        <Box sx={{ marginBottom: 1 }}>
          <ProgressBar value={progressInfo.percentage} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
          }}
        >
          <span>{`${progressInfo.currentCount} / ${progressInfo.totalCount}`}</span>
          <span>{`${progressInfo.percentage}%`}</span>
        </Box>
      </Grid>
      <Grid item>
        <Stack direction="row" spacing={1}>
          {hashTagList.map((hashTag) => (
            <Chip
              size="small"
              sx={{ borderRadius: "10px" }}
              label={`# ${hashTag}`}
              variant="outlined"
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

const WorkList = ({ workInfoList }) => {
  return (
    <Grid container spacing={2}>
      {workInfoList.map((workInfo, idx) => (
        <Grid
          className="card-wrapper"
          item
          xs={12}
          sm={6}
          md={4}
          xl={3}
          sx={{ paddingLeft: "0 !important" }}
        >
          <WorkCard key={idx} workInfo={workInfo} />
        </Grid>
      ))}
    </Grid>
  );
};

const LeaderBoard = () => {
  const leaderRankingList = ["평가자5", "평가자2", "평가자1"];
  return (
    <Grid
      container
      sx={{ flexDirection: "column", gap: "10px", padding: "10px 0px" }}
    >
      {leaderRankingList.map((leader, idx) => (
        <Grid item>
          <Box
            key={idx}
            sx={{
              padding: "20px 10px",
              border: "1px solid #cfcfcf",
              borderRadius: "5px",
              display: "flex",
              gap: "10px",
            }}
          >
            <Box>
              <img src={rankingImagesURL[idx]} alt={"ranking_img"} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography align={"center"}>{leader}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

const Contents = ({ workInfoList }) => {
  return (
    <Grid container sx={{ padding: "30px" }}>
      <Grid item xs={12} lg={9} sx={{ padding: "0px 15px" }}>
        <Box style={{ marginBottom: "14px" }}>
          <h3 style={{ marginBottom: "6px" }}>진행중인 작업 목록</h3>
          <span style={{ color: "#4d4d4d" }}>
            현재 평가가 진행중인 작업입니다
          </span>
        </Box>

        <WorkList workInfoList={workInfoList} />
      </Grid>
      <Grid item xs={12} lg={3} sx={{ padding: "0px 15px" }}>
        <Box style={{ marginBottom: "14px" }}>
          <h3 style={{ marginBottom: "6px" }}>리더보드</h3>
          <span style={{ color: "#4d4d4d" }}>
            레이블링에 기여한 평가자들 입니다
          </span>
        </Box>
        <LeaderBoard />
      </Grid>
    </Grid>
  );
};

export default Contents;

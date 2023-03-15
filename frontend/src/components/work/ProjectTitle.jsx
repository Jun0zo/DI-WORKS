import ProjectTitleImage from "src/projectTitleImage.png";

const ProjectTitle = () => {
  return (
    <img
      src={ProjectTitleImage}
      alt=""
      style={{
        width: "100%",
        height: "200px",
        maxWidth: "100%",
      }}
    />
  );
};

export default ProjectTitle;

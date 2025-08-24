import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        border: "1px solid #444",
        borderRadius: 3,
        boxShadow: "0 4px 15px rgba(0,255,255,0.2)",
        transition: "0.4s",
        "&:hover": {
          boxShadow: "0 10px 25px rgba(0,255,255,0.3)",
          transform: "translateY(-8px)",
          borderColor: "#0ff",
        },
        position: "relative",
        backgroundColor: "#1e1e1e",
        maxWidth: "300px",
        "&:hover .overlay": {
          opacity: 1,
        },
      }}
    >
      {/* Project Image */}
      <CardMedia
        component="img"
        height="145"
        image={project.image}
        alt={project.image_fallback}
        sx={{ objectFit: "cover", maxHeight: "145px" }}
      />

      {/* Overlay Icons */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.6)", // darker overlay
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      >
        {/* Live Link Icon */}
        <IconButton
          component="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#39FF14", // neon green
            bgcolor: "rgba(0,0,0,0.45)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.6)",
              color: "white",
              boxShadow: "0 0 20px #39FF14",
            },
            width: 60,
            height: 60,
          }}
        >
          <LinkIcon sx={{ fontSize: 32 }} />
        </IconButton>

        {/* GitHub Icon */}
        <IconButton
          component="a"
          href={project.git_url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#FF6EC7", // neon pink
            bgcolor: "rgba(0,0,0,0.45)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.6)",
              color: "white",
              boxShadow: "0 0 20px #FF6EC7",
            },
            width: 60,
            height: 60,
          }}
        >
          <GitHubIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      {/* Project Info */}
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{ color: "#0ff" }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.category}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ProjectsFeed = ({ projects }) => {
  return (
    <Box sx={{ padding: "10px 20px", background: "#121212", mb: 5, mt: 4 }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: "#0ff",
          mb: 4,
          fontWeight: 700,
          textAlign: "center",
          // textShadow: "0 0 5px #0fff, 0 0 10px #0ff",
        }}
      >
        My Projects
      </Typography>

      {/* Projects Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsFeed;

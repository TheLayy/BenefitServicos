import React, { useEffect, useState } from "react";
import { Fab, Fade, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    // Run once to set initial state in case we're already scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={visible}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 85, right: 27, zIndex: 1300 }}
      >
        <Fab
          size="large"
          aria-label="scroll back to top"
          sx={{
            width: 46,
            height: 46,
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#f5f5f5" },
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: 30, color: "var(--color)" }} />
        </Fab>
      </Box>
    </Fade>
  );
};

export default BackToTopButton;

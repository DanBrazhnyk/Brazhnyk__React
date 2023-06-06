import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function HomeIcon() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20%"}}>
      <StyledBadge badgeContent={4} color="secondary" style={{marginRight:"20px"}}>
        <FavoriteIcon />
      </StyledBadge>

      <StyledBadge badgeContent={4} color="secondary" style={{marginRight:"20px"}}>
        <ThumbDownAltIcon />
      </StyledBadge>

      <StyledBadge badgeContent={4} color="secondary" style={{marginRight:"20px"}}>
        <ThumbUpAltIcon />
      </StyledBadge>

      <StyledBadge badgeContent={4} color="secondary" style={{marginRight:"20px"}}>
        <MoodBadIcon />
      </StyledBadge>

      <StyledBadge badgeContent={4} color="secondary" style={{marginRight:"20px"}}>
      <InsertEmoticonIcon />
      </StyledBadge> 
      <StyledBadge badgeContent={4} color="secondary">
      <SentimentVeryDissatisfiedIcon />
      </StyledBadge>
    </div>
  );
}

export default HomeIcon;

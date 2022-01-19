import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import { useTheme } from "@mui/material/styles";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
//import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import IconButton from "@mui/material/IconButton";
//import { useSelector } from "react-redux";
import { PLANT_DATA } from "../../utils/dummyDataTemplate";
import { TableViewStylesFunction } from "../../theme/Theme";

export default function TaskAccords() {
  // const themeType = useSelector((store) => store.themeType.themeType);
 // const themeVariable = useTheme();
  const tableViewStyles = TableViewStylesFunction();
  const {
    accordionStyle,

    accordionHeading,
    tablePadding,
   // tablePaddingIcons,
    primaryName,
    secondaryName,
    tertiaryName,
    green,
    red,
   // blue,
    grey,
  //  yellow,
    datePadding,
    iconsContainer,
    accordionCollapseIcon,
    tableStickyColumn,
    nameColumn,
    namePadding,
    iconColors,
    tableMinWidh
  } = tableViewStyles;

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange2 = (panel2) => (event, isExpanded2) => {
    setExpanded2(isExpanded2 ? panel2 : false);
  };
  const PlantRows = (props) => {
    return (
      <TableRow>
        <TableCell sx={[tableStickyColumn, nameColumn]}>
          <div style={namePadding}>
            <span style={primaryName}>{PLANT_DATA.plant_name}</span>
          </div>
          <div style={namePadding}>
            <span style={secondaryName}>{PLANT_DATA.plant_id}</span>
          </div>
          <div style={namePadding}>
            <span style={tertiaryName}>{PLANT_DATA.plant_details}</span>
          </div>
        </TableCell>
        <TableCell sx={tablePadding} align="center">
          <span style={green}>{PLANT_DATA.site_view}</span>
          <div style={datePadding}>
            <span>{PLANT_DATA.site_view_date}</span>
          </div>
        </TableCell>
        <TableCell sx={tablePadding} align="center">
          <span style={red}>{PLANT_DATA.proposal}</span>
          <div style={datePadding}>
            <span>{PLANT_DATA.proposal_date}</span>
          </div>
        </TableCell>
        <TableCell sx={tablePadding} align="center">
          <span style={green}>{PLANT_DATA.customer_approval}</span>
          <div style={datePadding}>
            <span>{PLANT_DATA.customer_approval_date}</span>
          </div>
        </TableCell>
        <TableCell sx={tablePadding} align="center">
          <span style={red}>{PLANT_DATA.booking_advance}</span>
          <div style={datePadding}>
            <span>{PLANT_DATA.booking_advance_date}</span>
          </div>
        </TableCell>
        <TableCell sx={tablePadding} align="center">
          <span style={grey}>{PLANT_DATA.site_inspection}</span>
          <div style={datePadding}>
            <span>{PLANT_DATA.site_inspection_date}</span>
          </div>
        </TableCell>
        <TableCell sx={tablePadding} align="center">
          <span style={grey}>{PLANT_DATA.material_purchase}</span>
          <div style={datePadding}>
            <span>{PLANT_DATA.material_purchase_date}</span>
          </div>
        </TableCell>

        <TableCell align="center" sx={[tableStickyColumn, iconsContainer]}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid xs={12} sm={12} md={12} lg={6}>
                <IconButton size="medium" aria-label="folder" sx={iconColors}>
                  <FolderOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={6}>
                <IconButton
                  size="medium"
                  aria-label="check list"
                  sx={iconColors}
                >
                  <PlaylistAddCheckOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={6}>
                <IconButton size="medium" aria-label="alert" sx={iconColors}>
                  <NotificationsOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={6}>
                <IconButton size="medium" aria-label="form" sx={iconColors}>
                  <ForumOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </TableCell>
      </TableRow>
    );
  };
  return (
    <div>
      <Accordion
        sx={accordionStyle}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={accordionCollapseIcon}
          expandIcon={<ExpandMoreIcon sx={accordionCollapseIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography align="left" varient="bold" sx={accordionHeading}>
            Teammate One
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <TableContainer>
            <Table
              size="small"
              aria-label="task view table"
              sx={tableMinWidh}
            >
              <TableBody>
                {[0, 1, 2, 3].map((d) => {
                  return <PlantRows />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={accordionStyle}
        expanded={expanded2 === "panel2"}
        onChange={handleChange2("panel2")}
      >
        <AccordionSummary
          sx={accordionCollapseIcon}
          expandIcon={<ExpandMoreIcon sx={accordionCollapseIcon} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography align="left" sx={accordionHeading}>
            Teammate Two
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <TableContainer>
            <Table
              size="small"
              aria-label="task view table"
              sx={tableMinWidh}
            >
              <TableBody>
                {[0, 1, 2, 3, 4, 5].map((d) => {
                  return <PlantRows />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import Collapse from "@mui/material/Collapse";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";
import { DATA, TABLE_HEADER, PLANT_DATA } from "../../utils/dummyDataTemplate";
import { storeCapacityCountRow } from "../../actions/normalActions";
import { TableViewStylesFunction } from "../../theme/Theme";

const label = { inputProps: { "aria-label": "Switch demo" } };

const TableSlider = ({
  onClickToRight,
  onClickToLeft,
  scrollX,
  scrolEnd,
  styles,
}) => {
  return (
    <div
      style={{
        zIndex: 1000,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "fixed",
        bottom: "85.15%",
        margin: "0px 50px",
      }}
    >
      {scrollX !== 0 ? (
        <IconButton
          size="medium"
          aria-label="more"
          onClick={onClickToLeft}
          sx={[styles[0]]}
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      ) : (
        <IconButton
          size="medium"
          aria-label="more"
          disabled
          onClick={onClickToLeft}
          sx={[styles[0]]}
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      )}
      {!scrolEnd ? (
        <IconButton
          size="medium"
          aria-label="more"
          onClick={onClickToRight}
          sx={[styles[0]]}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      ) : (
        <IconButton
          size="medium"
          aria-label="more"
          onClick={onClickToLeft}
          disabled
          sx={[styles[0]]}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      )}
    </div>
  );
};

export default function PlantView() {
  // const themeType = useSelector((store) => store.themeType.themeType);
  const themeVariable = useTheme();
  const tableViewStyles = TableViewStylesFunction();
  const {
    tablePadding,
    tablePaddingIcons,
    primaryName,
    secondaryName,
    tertiaryName,
    green,
    red,
    // blue,
    //grey,
    // yellow,
    datePadding,
    iconsContainer,
    accordionCollapseIcon,
    tableStickyColumn,
    nameColumn,
    namePadding,
    iconColors,
    tableMinWidh,
    defaultTableContainer,
    tableTopView,
  } = tableViewStyles;

  const scrl = React.useRef(null);
  const [
    tableHeader,
    // setTableHeader
  ] = React.useState(TABLE_HEADER);
  const [scrollX, setscrollX] = React.useState(0);
  const [scrolEnd, setscrolEnd] = React.useState(false);
  const [rows, setRows] = React.useState(DATA);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [expand, setExpand] = React.useState(true);
  const dispatch = useDispatch();
  const slide = (shift, value) => {
    if (scrl.current) {
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        scrl.current.scrollTo({
          [value]: scrollX,
          behavior: "smooth",
        });
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    }

    // let newTableHeader=[...tableHeader];
    // newTableHeader=newTableHeader.map((th,index)=>{
    //   if(index>3){
    //     if(shift==="right"){

    //       th.hidden=true;
    //     }else{

    //     th.hidden=false;
    //     }
    //   }
    //   return th
    // })
    // console.log('newTableHeader',newTableHeader)
    // setTableHeader(newTableHeader)
  };

  const scrollCheck = () => {
    if (scrl.current) {
      setscrollX(scrl.current.scrollLeft);
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    }
  };
  const storeCapacityCountRowValue = useSelector(
    (store) => store.storeCapacityCountRow.value
  );
  const expandValue = useSelector(
    (store) => store.storeCapacityCountRow.expand
  );
  React.useEffect(() => {
    setExpand(expandValue);
  }, [expandValue]);
  React.useEffect(() => {
    if (storeCapacityCountRowValue.length > 0) {
      setRows(storeCapacityCountRowValue);
    }
  }, [storeCapacityCountRowValue]);
  const changeExpandView = () => {
    setExpand(!expand);
    dispatch(storeCapacityCountRow(storeCapacityCountRowValue, !expand));
  };
  const highlightSelectedRow = (e, index) => {
    let newRows = rows.map((r, i) => {
      if (i === index) {
        r.highlight = true;
      } else {
        r.highlight = false;
      }
      return r;
    });
    dispatch(storeCapacityCountRow(newRows, expand));
    setRows(newRows);

    localStorage.setItem("storedRows", JSON.stringify({ newRows }));
  };
  let highlightData = rows.filter((r) => r.highlight === true);
  let rowData = expand === false ? highlightData : rows;

  const PlantRows = (props) => {
    const { index } = props;
    const [open, setOpen] = React.useState(false);
    let TableCellNew = tableHeader.map((th, i) => {
      let name = th.id;
      let date = `${name}_date`;
      return (
        <>
          <TableCell sx={tablePadding} align="center">
            {!th.hidden && (
              <>
                <span style={i % 2 ? red : green}>{PLANT_DATA[name]}</span>
                <div style={datePadding}>
                  <span>{PLANT_DATA[date]}</span>
                </div>
              </>
            )}
          </TableCell>
        </>
      );
    });
    return (
      <>
        <TableRow>
          <TableCell sx={tablePadding} align="left">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
              sx={[accordionCollapseIcon]}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            sx={tablePadding}
            align="left"
            colSpan={11}
          >
            <span style={{ ...primaryName, fontWeight: "normal" }}>
              Teammate {index}
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={[tablePadding, { paddingBottom: 0, paddingTop: 0 }]}
            colSpan={12}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                <TableRow>
                  <TableCell
                    sx={[
                      tableStickyColumn,
                      nameColumn,
                      {
                        background:
                          themeVariable.palette.mode === "light"
                            ? "#F9FBFC"
                            : "#0f2027",
                      },
                    ]}
                  >
                    <div style={namePadding}>
                      <span style={primaryName}>{PLANT_DATA.plant_name}</span>
                    </div>
                    <div style={namePadding}>
                      <span style={secondaryName}>{PLANT_DATA.plant_id}</span>
                    </div>
                    <div style={namePadding}>
                      <span style={tertiaryName}>
                        {PLANT_DATA.plant_details}
                      </span>
                    </div>
                  </TableCell>

                  {TableCellNew}

                  <TableCell
                    align="center"
                    sx={[
                      tableStickyColumn,
                      iconsContainer,
                      {
                        background:
                          themeVariable.palette.mode === "light"
                            ? "#F9FBFC"
                            : "#0f2027",
                      },
                    ]}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={6}>
                          <IconButton
                            size="medium"
                            aria-label="folder"
                            sx={iconColors}
                          >
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
                          <IconButton
                            size="medium"
                            aria-label="alert"
                            sx={iconColors}
                          >
                            <NotificationsOutlinedIcon />
                          </IconButton>
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={6}>
                          <IconButton
                            size="medium"
                            aria-label="form"
                            sx={iconColors}
                          >
                            <ForumOutlinedIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Box>
                  </TableCell>
                </TableRow>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };
  const CountCapacityRows = (props) => {
    const { row, index } = props;

    let TableCellNew = tableHeader.map((th, i) => {
      let name = th.id;

      return (
        <>
          {i >= 1 && (
            <TableCell align="center" sx={tablePadding}>
              {!th.hidden && row[name]}
            </TableCell>
          )}
        </>
      );
    });
    return (
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell
          component="th"
          scope="row"
          sx={[tableStickyColumn, tablePadding]}
        >
          <IconButton
            size="medium"
            aria-label="star"
            onClick={(e) => highlightSelectedRow(e, index)}
            color={row.highlight ? "secondary" : "inherit"}
          >
            {row.highlight ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
          {row.name}
        </TableCell>

        <TableCell align="center" sx={tablePadding}>
          {switchValue ? row.capacity : row.site_view}
        </TableCell>
        {TableCellNew}

        <TableCell align="center" sx={[tableStickyColumn, tablePaddingIcons]} />
      </TableRow>
    );
  };
  return (
    <TableContainer
      component={Paper}
      ref={scrl}
      onScroll={scrollCheck}
      sx={defaultTableContainer}
    >
      <Table sx={tableMinWidh} aria-label="plant view table" stickyHeader>
        <TableSlider
          onClickToLeft={() => slide(-150, "left")}
          onClickToRight={() => slide(150, "right")}
          scrollX={scrollX}
          scrolEnd={scrolEnd}
          styles={[accordionCollapseIcon]}
        />
        <TableHead>
          <TableRow>
            <TableCell
              sx={[{ ...tableStickyColumn, zIndex: 120 }, tablePadding]}
            >
              Count
              <Switch
                {...label}
                color="secondary"
                value={switchValue}
                onChange={(e) => setSwitchValue(e.target.checked)}
              />
              Capacity
            </TableCell>

            {tableHeader.map((th, i) => (
              <>
                {!th.hidden && (
                  <TableCell align="center" sx={tablePadding} key={i}>
                    {th.label}
                  </TableCell>
                )}
              </>
            ))}

            <TableCell
              sx={[{ ...tableStickyColumn, zIndex: 120 }, tablePaddingIcons]}
              colSpan={tableHeader.length}
            >
              <IconButton
                size="medium"
                aria-label="more"
                onClick={changeExpandView}
                disabled={highlightData.length === 0}
                sx={[{ float: "right" }, accordionCollapseIcon]}
              >
                {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={tableTopView}>
          {rowData.map((row, i) => {
            return <CountCapacityRows row={row} index={i} />;
          })}
        </TableBody>

        <TableBody>
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19,
            20,
          ].map((d, i) => {
            return <PlantRows index={i + 1} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

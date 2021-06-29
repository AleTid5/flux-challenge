import { DataGrid, GridCellParams, GridColDef } from "@material-ui/data-grid";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarsIcon from "@material-ui/icons/Stars";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useSearchContext } from "../../contexts/search.context";

const getStars = (stars: number) => {
  if (stars === 0) {
    return (
      <span title="0 stars">
        <StarOutlineIcon color="primary" />
      </span>
    );
  }

  const maxStarsToDisplay = 6;
  const hasALotOfStars = stars > maxStarsToDisplay;

  const starsIcons = Array(hasALotOfStars ? maxStarsToDisplay : stars)
    .fill(null)
    .map((_v, key) => (
      <span title={String(stars)} key={key}>
        <StarIcon color="primary" />
      </span>
    ));

  if (hasALotOfStars) {
    starsIcons.push(
      <span title={String(stars)}>
        <StarsIcon color="primary" />
      </span>
    );
  }

  return starsIcons;
};

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 212 },
  { field: "owner", headerName: "Owner", width: 212 },
  {
    field: "stars",
    headerName: "Stars",
    type: "number",
    width: 212,
    renderCell: ({ value }: GridCellParams) => {
      return Boolean(value) ? (
        getStars(Number(value))
      ) : (
        <span title="0 stars">
          <StarOutlineIcon color="primary" />
        </span>
      );
    },
  },
  { field: "createdAt", headerName: "Created at", width: 212 },
];

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "50vh",
      backdropFilter: "blur(4px)",
    },
    dataGrid: {
      padding: 32,
      border: 0,
      filter: "invert(1)",
    },
    dataGridCell: {
      borderBottom: "0!important",
    },
  })
);

export default function SortableTable() {
  const { results, isLoading, error } = useSearchContext();
  const classes = useStyles();

  const rows = results?.map((result, key) => ({ id: key, ...result })) ?? [];

  return (
    <div className={classes.container}>
      <DataGrid
        className={classes.dataGrid}
        classes={{
          cell: classes.dataGridCell,
        }}
        rows={rows}
        columns={columns}
        pageSize={6}
        disableColumnSelector
        disableSelectionOnClick
        loading={isLoading}
        error={error}
      />
    </div>
  );
}

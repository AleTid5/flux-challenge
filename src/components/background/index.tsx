import { ReactNode } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import starsImg from "../../assets/images/stars.png";
import { useAppContext } from "../../contexts/app.context";

const useStyles = (isBackgroundInverted: boolean) =>
  makeStyles(() =>
    createStyles({
      backgroundImage: {
        minHeight: "100vh",
        background: `url(${starsImg})`,
        backgroundSize: 170,
        filter: `invert(${Number(isBackgroundInverted)})`,
      },
    })
  );

export default function Background({ children }: { children: ReactNode }) {
  const { isBackgroundInverted } = useAppContext();
  const classes = useStyles(isBackgroundInverted)();
  return <div className={classes.backgroundImage}>{children}</div>;
}

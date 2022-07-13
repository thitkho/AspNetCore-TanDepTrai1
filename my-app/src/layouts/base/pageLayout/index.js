import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TTBox from "../../../components/TTBox";
import { useUIController } from "../../../context/ui";
import { setLayout } from "../../../context/ui/module";

function PageLayout({ background, children }) {

  const [, dispatch] = useUIController();
  const location= useLocation();
  // console.log(location.pathname, location.state);

  // console.log("pageLayout");

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [location.pathname, dispatch]);

  return (
    <TTBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </TTBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default PageLayout;

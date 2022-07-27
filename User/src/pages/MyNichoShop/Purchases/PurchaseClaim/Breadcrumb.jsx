import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumb = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="primary" href="/">
            My Nichoshop
        </Link>,
        <Typography key="2" color="inherit">
            Purchases
        </Typography>,
    ];

    return (
        <div className="breadcrumbs">
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrumb;

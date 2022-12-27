import {Box, Typography, Breadcrumbs} from '@mineral/core';
import {Link} from 'react-router-dom';
import { COLUMN_STYLE, RIGID } from '../constant_styles';

const BasePage = ({children, title, breadcrumbs, ...restProps}) => {

    const style = {
        padding: '24px',
        height: '100%',
        ...COLUMN_STYLE
    };

    const crumbs = breadcrumbs ? 
        breadcrumbs.map((crumb, index) => {
            return index === crumbs?.length -    1 ?
                <Typography key={`crumb-${index}`}>{crumb.label}</Typography>
                :
                <Link key={`crumb-${index}`} to={crumb.href}>{crumb.label}</Link>;
        })
        :
        null;

    return (
        <Box sx={style}>
            <Breadcrumbs>
                {crumbs}
            </Breadcrumbs>
            <Typography variant="h2" style={RIGID}>{title}</Typography>
            {children}
        </Box>
    );
};

export default BasePage;
import {useState} from 'react';
import { useSelection } from '../contexts/SelectionContext';
import { useData } from '../api/dataHook';
import { getRFEs } from '../api/customerApi';

import BasePage from './BasePage';
import {Box, Typography, Tabs, Tab} from '@mineral/core';
import { CUSTOMERS } from '../constant_strings';

const CustomerPage = () => {

    const {selection} = useSelection();
    const rfes = useData(getRFEs(selection?.subid));
    const [value, setValue] = useState(0);

    const tabChanged = ($e, tabNumber) => {
        setValue(tabNumber);
    };

    const crumbs = selection ? 
        [
            {href: `/${CUSTOMERS}`, label: 'Customers'},
            {label: selection?.display_name}
        ]
        :
        null;

    return (
        <BasePage title={selection?.display_name} breadcrumbs={crumbs}>
            <Tabs value={value} onChange={tabChanged}>
                <Tab label="RFEs">
                    <Typography>I'm the RFE tab</Typography>
                </Tab>
            </Tabs>
        </BasePage>
    );
};

export default CustomerPage;
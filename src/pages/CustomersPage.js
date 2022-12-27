import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useData} from '../api/dataHook';
import {useSelection} from '../contexts/SelectionContext';
import {initiateBuildingCustomerList, getCustomers} from '../api/customerApi';
import { Box, Button, FormControlLabel, Checkbox, Typography,
    OutlinedInput, InputAdornment } from '@mineral/core';
import { MagnifyingGlass } from '@mineral/icons';
import { DataGridPro } from '@mineral/datagrid';
import BasePage from './BasePage';
import {GROW, RIGID, COLUMN_STYLE, PADDING_12, ROW_STYLE, SPACE_BETWEEN} from '../constant_styles';
import {CUSTOMERS} from '../constant_strings';

const columns = [
    {headerName: 'Sub. ID', field: 'subid', width: 60},
    {headerName: 'Sub. Name', field: 'customer_name', width: 300},
    {headerName: 'Real Name', field: 'display_name', width: 250},
    {headerName: 'Core', field: 'is_core', type: 'boolean', width: 60}
];

const CustomersPage = () => {

    const navigate = useNavigate();
    const customers = useData(getCustomers);
    const {setSelection} = useSelection();
    const [showNonCore, setShowNonCore] = useState(false);
    const [textSearch, setSearch] = useState('');

    const initiateCustomerRefresh = () => {
        initiateBuildingCustomerList();
     };

    const setTextSearch = ($e) => {
        setSearch($e.target.value);
    };

    const rowClicked = (params, $e, details) => {
        setSelection(params.row);
        navigate(`${params.row.subid}`);
    };

    const rows = customers && customers.results ? 
        customers.results.filter((r) => {
            return (r.is_core || showNonCore) &&
                (textSearch.length < 2 || 
                    (r.display_name.includes(textSearch) || r.customer_name.includes(textSearch)));
        })
        : 
        undefined;

    return (
        <BasePage title="Customer">
            <Box style={RIGID}>
                <Button onClick={initiateCustomerRefresh}>Refresh Customer List</Button>
            </Box>
            <Box style={{...COLUMN_STYLE, ...RIGID, ...PADDING_12}}>
                <Typography variant="text">Filters:</Typography>
                <Box style={{...ROW_STYLE, ...SPACE_BETWEEN}}>
                    <OutlinedInput
                        size="small"
                        id="text_search"
                        value={textSearch}
                        onChange={setTextSearch}
                        endAdornment={
                            <MagnifyingGlass />
                        }
                        placeholder="Search"
                    />
                        
                    <FormControlLabel
                        control={<Checkbox checked={showNonCore} onChange={() => setShowNonCore(!showNonCore)} />}
                        label="Non-Core"
                    />
                </Box>
            </Box>
            <Box style={{width: '100%', ...GROW}}>
                <DataGridPro
                    columns={columns}
                    rows={rows}
                    pagination={true}
                    pageSize={25}
                    getRowId={(row) => row.subid}
                    onRowClick={rowClicked}
                    sx={{cursor: 'pointer'}}
                />
            </Box>
        </BasePage>
    );
};

export default CustomersPage;
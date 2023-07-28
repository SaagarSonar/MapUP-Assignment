import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Button } from 'antd';
import { setRegion } from './redux/actions';

const { Option } = Select;

const FormInput = () => {
    const dispatch = useDispatch();
    const selectedRegion = useSelector(state => state.selectedRegion);

    const handleRegionChange = value => {
        dispatch(setRegion(value));
    };

    const handleLoadButtonClick = () => {
        // Trigger map and region info updates here
    };

    return (
        <div style={{ marginBottom: 20 }}>
            <Select
                placeholder="Select a region"
                onChange={handleRegionChange}
                style={{ width: 180 }}
                value={selectedRegion}
            >
                <option value="">Select a region</option>
                <Option value="us">United States</Option>
                <Option value="in">India</Option>
                <Option value="uk">United Kingdom</Option>
            </Select>
            <Button type="primary" onClick={handleLoadButtonClick} style={{ marginLeft: 16 }}>
                Load
            </Button>
        </div>
    );
};

export default FormInput;

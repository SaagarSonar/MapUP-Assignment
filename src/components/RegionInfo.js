import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

const RegionInfo = () => {
    const selectedRegion = useSelector(state => state.selectedRegion);

    // Replace with actual region information based on the selectedRegion

    return (
        <Card
            title="Region Info"
            style={{ marginBottom: 20 }}
        >
            <p>Currency Symbol: $</p>
            <p>Units of Speed: kmph</p>
            <p>Units of Distance: kilometers</p>
            <p>Units of Volume: liters</p>
            <p>Timezone: UTC+5:30</p>
        </Card>
    );
};

export default RegionInfo;

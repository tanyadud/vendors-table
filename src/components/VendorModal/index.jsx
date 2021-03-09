import React, {useState, useEffect} from "react";
import {Modal, Button, Input} from 'antd';

const VendorModal = ({ rowsData, columnsData, isOpen, onCancel, onSave }) => {
    const [formRowsData, setFormRowsData] = useState({
        'Overall Score': 6
    });
    const [formColumnsData, setFormColumnsData] = useState({
        'Image url': 'https://img.icons8.com/color/452/amazon-web-services.png',
        'Title': 'New company'
    });

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isColumnsDataValid = columnsData.every(inp => formColumnsData[inp.name]);

        const isRowsDataValid = rowsData.every(inp =>
            formRowsData[inp.name] && (inp.children || []).every(child => formRowsData[child.name]));

        setIsFormValid(isRowsDataValid && isColumnsDataValid);

    }, [formRowsData]);

    const onRowsFormChanged = ({ target }) => {
        const updatedData = {
            ...formRowsData,
            [target.name]: target.value
        };

        setFormRowsData(updatedData);
    };

    const onColumnsFormChanged = ({ target }) => {
        const updatedData = {
            ...formColumnsData,
            [target.name]: target.value
        };

        setFormColumnsData(updatedData);
    };

    const saveFormData = () => {
        onSave({
            rows: formRowsData,
            columns: formColumnsData
        })
    };

    return (
        <Modal
            visible={isOpen}
            title="Add new Vendor"
            onOk={saveFormData}
            onCancel={onCancel}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    disabled={!isFormValid}
                    onClick={saveFormData}>
                    Add +
                </Button>,
            ]}
        >
            {
                columnsData.map(inp => (
                    <div key={inp.name}>
                        <label htmlFor={inp.name}>{ inp.name }</label>
                        <Input
                            id={inp.name}
                            name={inp.name}
                            value={formColumnsData[inp.name]}
                            onChange={onColumnsFormChanged}
                        />
                    </div>
                ))
            }
            {
                rowsData.map(inp => (
                    <div key={inp.name}>
                        <label htmlFor={inp.name}>{ inp.name }</label>
                        <Input
                            id={inp.name}
                            name={inp.name}
                            value={formRowsData[inp.name]}
                            onChange={onRowsFormChanged}
                        />
                        {
                            inp.children && (
                                inp.children.map(child => (
                                    <div>
                                        <label htmlFor={child.name}>{ child.name }</label>
                                        <Input
                                            id={child.name}
                                            name={child.name}
                                            value={formRowsData[child.name]}
                                            onChange={onRowsFormChanged}
                                        />
                                    </div>
                                ))
                            )
                        }
                    </div>
                ))
            }
        </Modal>
    )
};

export default VendorModal

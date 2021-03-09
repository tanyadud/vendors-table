import React, { useState } from "react";
import { Table } from 'antd';
import VendorModal from '../VendorModal';
import VendorHeaderCell from '../VendorHeaderCell';
import VendorScoreCell from '../VendorScoreCell';
import VendorHeaderActionsCell from '../VendorHeaderActionsCell';
import styles from './styles';
import { columnsData, rowsData } from './vendors';

export default () => {
    const [rows, setRows] = useState(rowsData);
    const [columns, setColumns] = useState(columnsData);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const onModalClose = () => {
        setIsModalOpen(false)
    };

    const onModalSave = (formData) => {
        const lastColumnKey = columns[columns.length - 1]['key'];
        const lastColumnIndex = parseInt(lastColumnKey[lastColumnKey.length - 1], 10);
        const nextColumnKey = `company${lastColumnIndex + 1}`;

        const newColumn = {
            width: '20%',
            key: nextColumnKey,
            dataIndex: nextColumnKey,
            title: formData.columns['Title'],
            imgUrl: formData.columns['Image url']
        };


        const newRows = rows.map(row => {
            const rowCopy = Object.assign(row, { [nextColumnKey]: formData.rows[row.actions] });

            if (row.children) {
                const newChildren = [...row.children].map(child => {
                    return Object.assign(child, { [nextColumnKey]: formData.rows[child.actions] })
                });
                rowCopy.children = newChildren;
            }


            return rowCopy;
         });

        setColumns([...columns, newColumn]);
        setRows(newRows);

        setIsModalOpen(false)
    };

    const deleteColumn = (id) => {
        setColumns(
            columns.filter(col => col.key !== id)
        );

        setRows(
            rows.filter(row => {
                delete row[id];
                return row;
            })
        );
    };

    const cols = columns.map(col => {
        return {
            key: col.key,
            width: '100px',
            dataIndex: col.key,
            title: col.key === 'actions' ? (
                <VendorHeaderActionsCell
                    title={col.title}
                    onAdd={() => setIsModalOpen(!isModalOpen)}
                />
            ) : (
                <VendorHeaderCell
                    id={col.key}
                    title={col.title}
                    imgUrl={col.imgUrl}
                    onDelete={deleteColumn}
                />
            )
        }
    });

    const rowsData1 = rows.map(el => {
        if (el.actions === 'Overall Score') {
            const obj = { actions: el.actions };

            Object.keys(el).forEach(key => {
                if (key !== 'actions') {
                    obj[key] = <VendorScoreCell value={el[key]} />
                }
            });

            return obj;
        }

        if (el.actions === 'Pricing') {
            const obj = { actions: el.actions };

            Object.keys(el).forEach(key => {
                if (key !== 'actions') {
                    obj[key] = <a style={styles.vendorCellLink} href={el[key]}>{ el[key] }</a>
                }
            });

            return obj;
        }

        return el;
    });

    const getRows = () => {
        return rowsData1.map(row => {
            const obj = Object.assign({}, { name: row.actions });
            if (row.children) {
                obj.children = row.children.map(child => ({
                    name: child.actions
                }))
            }
            return obj;
        })
    };

    const getColumns = () => {
        return [
            {
                name: 'Image url',
            },
            {
                name: 'Title'
            }
        ]
    };

    return (
        <div>
            <VendorModal
                isOpen={isModalOpen}
                rowsData={getRows()}
                columnsData={getColumns()}
                onCancel={onModalClose}
                onSave={onModalSave}
            />
            <Table columns={cols}
                   dataSource={rowsData1}
                   pagination={false}
                   bordered
            />
        </div>
    )
}

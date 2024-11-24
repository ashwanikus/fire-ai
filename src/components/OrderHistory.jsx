import React from 'react';
import { Table, Tag } from 'antd';
import order from '../data/order.js';

const OrderHistory = () => {
  // Define table columns
  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (_, { type }) => (
        <>
          {type === 'Buy' ? <Tag color="green">Buy</Tag> : <Tag color="red">Sell</Tag>}
        </> 
      ),
    },
    {
      title: 'Open Date',
      dataIndex: 'openDate',
      key: 'openDate',
    },
    {
      title: 'Close Date',
      dataIndex: 'closeDate',
      key: 'closeDate',
    },
    {
      title: 'Open Price',
      dataIndex: 'openPrice',
      key: 'openPrice',
    },
    {
      title: 'Close Price',
      dataIndex: 'closePrice',
      key: 'closePrice',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'SL',
      dataIndex: 'sl',
      key: 'sl',
    },
    {
      title: 'TP',
      dataIndex: 'tp',
      key: 'tp',
    },
    {
      title: 'Lots',
      dataIndex: 'lots',
      key: 'lots',
    },
    {
      title: 'Profit',
      dataIndex: 'profit',
      key: 'profit',
    },
    {
      title: 'Gain',
      dataIndex: 'gain',
      key: 'gain',
    },
  ];

  return (
    <div>
      <h2>Order Table</h2>
      <Table 
        dataSource={order} 
        columns={columns} 
        rowKey={(record, index) => index} // Use index as a unique key
        pagination={{
          pageSize: 5, // Number of rows per page
          showSizeChanger: true, // Allow user to change page size
          pageSizeOptions: ['5', '10', '20'], // Options for page size
          defaultCurrent: 1, // Default active page
        }}
      />
    </div>
  );
};

export default OrderHistory;

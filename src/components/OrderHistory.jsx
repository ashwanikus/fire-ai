import React from 'react';
import { Table, Tag } from 'antd';
import order from '../data/order.js';

const OrderHistory = () => {
  // Table columns definition
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
      render: (type) => (
        <Tag color={type === 'Buy' ? 'green' : 'red'}>{type}</Tag>
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

  // Table pagination configuration
  const paginationConfig = {
    pageSize: 5, // Rows per page
    showSizeChanger: true, // Allow page size changes
    pageSizeOptions: ['5', '10', '20'], // Page size options
    defaultCurrent: 1, // Default current page
  };

  return (
    <div>
      <h2>Order Table</h2>
      <Table 
        dataSource={order} 
        columns={columns} 
        rowKey={(record, index) => index} 
        pagination={paginationConfig} 
      />
    </div>
  );
};

export default OrderHistory;

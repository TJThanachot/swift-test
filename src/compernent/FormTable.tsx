import React from "react";
import { Divider, Table } from "antd";

import type { ColumnsType, TableProps } from "antd/es/table";

function FormTable() {
  interface DataType {
    key: React.Key;
    name: string;
    phoneNumber: string;
    nationality: string;
    gender: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: string, record) => {
        record.name.indexOf(value) === 0;
      },
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "gender",
      dataIndex: "gender",
      filters: [
        {
          text: "male",
          value: "male",
        },
        {
          text: "female",
          value: "female",
        },
        {
          text: "none",
          value: "none",
        },
      ],
      onFilter: (value: string, record) => record.gender.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.gender.length - b.gender.length,
    },
    {
      title: "phone number",
      dataIndex: "phoneNumber",
      filters: [
        {
          text: "+66",
          value: "+66",
        },
        {
          text: "+69",
          value: "+69",
        },
        {
          text: "+77",
          value: "+77",
        },
      ],
      onFilter: (value: string, record) =>
        record.phoneNumber.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
    },
    {
      title: "nationality",
      dataIndex: "nationality",
      filters: [
        {
          text: "Thai",
          value: "Thai",
        },
        {
          text: "Britain",
          value: "Britain",
        },
      ],
      onFilter: (value: string, record) =>
        record.nationality.indexOf(value) === 0,
    },
    {
      title: "manage",
      dataIndex: "manage",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      phoneNumber: "+77",
      gender: "male",
      nationality: "Britain",
    },
    {
      key: "2",
      name: "Jim Green",
      phoneNumber: "+77",
      gender: "male",
      nationality: "Thai",
    },
    {
      key: "3",
      name: "Joe Black",
      phoneNumber: "+66",
      gender: "female",
      nationality: "Thai",
    },
    {
      key: "4",
      name: "Jim Red",
      phoneNumber: "+69",
      gender: "none",
      nationality: "Thai",
    },
    {
      key: "5",
      name: "John Brown",
      phoneNumber: "+77",
      gender: "male",
      nationality: "Britain",
    },
    {
      key: "6",
      name: "Jim Green",
      phoneNumber: "+77",
      gender: "male",
      nationality: "Thai",
    },
    {
      key: "7",
      name: "Joe Black",
      phoneNumber: "+66",
      gender: "female",
      nationality: "Thai",
    },
    {
      key: "8",
      name: "Jim Red",
      phoneNumber: "+69",
      gender: "none",
      nationality: "Thai",
    },
    {
      key: "9",
      name: "John Brown",
      phoneNumber: "+77",
      gender: "male",
      nationality: "Britain",
    },
    {
      key: "10",
      name: "Jim Green",
      phoneNumber: "+77",
      gender: "male",
      nationality: "Thai",
    },
    {
      key: "11",
      name: "Joe Black",
      phoneNumber: "+66",
      gender: "female",
      nationality: "Thai",
    },
    {
      key: "12",
      name: "Jim Red",
      phoneNumber: "+69",
      gender: "none",
      nationality: "Thai",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <div className="tableContainer">
      <Divider />
      <Table
        className="table"
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}

export default FormTable;

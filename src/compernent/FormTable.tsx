import React from "react";
import { Table, Button, Popconfirm, message, Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import type { ColumnsType, TableProps } from "antd/es/table";
import { deleteUser } from "../slices/userSlice";
import { setStatus } from "../slices/statusSlice";

function FormTable() {
  const userData = useSelector((state: any) => {
    return state.userDataList;
  });
  const dispatch = useDispatch();

  interface DataType {
    key: number;
    firstname: string;
    phone: string;
    nationality: string;
    gender: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "name",
      dataIndex: "firstname",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.firstname.length - b.firstname.length,
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
      dataIndex: "phone",
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
      onFilter: (value: string, record) => record.phone.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.phone.length - b.phone.length,
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

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  let keyForDelete: number[];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      keyForDelete = selectedRowKeys;
    },
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      keyForDelete = userData.map((item, index) => {
        return item.key;
      });
      console.log(keyForDelete);
    } else {
      keyForDelete = [];
      console.log(keyForDelete);
    }
  };

  return (
    <div className="tableContainer">
      <div className="deleteButton">
        <Checkbox onChange={onCheckAllChange}>select all user</Checkbox>
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => {
            if (keyForDelete.length > 0) {
              dispatch(deleteUser(keyForDelete));
              message.success("You have deleted some profile successfully.");
            } else {
              message.error("You did not select any row.");
            }
          }}
        >
          <Button>delete user data</Button>
        </Popconfirm>
      </div>
      <Table
        className="table"
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={userData}
        onChange={onChange}
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              const index = userData.indexOf(record);
              const value: any = { index: index, boolean: true };
              dispatch(setStatus(value));
            },
          };
        }}
      />
    </div>
  );
}

export default FormTable;

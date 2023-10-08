import React from "react";
import { Table, Button, Popconfirm, message, Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import type { ColumnsType, TableProps } from "antd/es/table";
import { deleteUser } from "../slices/userSlice";
import { setStatus } from "../slices/statusSlice";
import useForm from "../hooks/useForm";
import { useTranslation } from "react-i18next";

function FormTable() {
  const { t, i18n } = useTranslation();
  const { getIdNumber, getPhoneNumber } = useForm();
  const userData = useSelector((state: any) => {
    return state.userDataList;
  });
  const dispatch = useDispatch();

  interface DataType {
    key: number;
    fullName: string;
    phone: string;
    nationality: string;
    gender: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: t("full name"),
      dataIndex: "fullName",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.fullName.length - b.fullName.length,
    },
    {
      title: t("gender"),
      dataIndex: "gender",
      filters: [
        {
          text: t("male"),
          value: "male",
        },
        {
          text: t("female"),
          value: "female",
        },
        {
          text: t("none"),
          value: "none",
        },
      ],
      onFilter: (value: string, record) => record.gender.indexOf(value) === 0,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.gender.length - b.gender.length,
    },
    {
      title: t("phone number"),
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
      title: t("nationality"),
      dataIndex: "nationality",
      filters: [
        {
          text: t("Thai"),
          value: "Thai",
        },
        {
          text: t("Britain"),
          value: "Britain",
        },
      ],
      onFilter: (value: string, record) =>
        record.nationality.indexOf(value) === 0,
    },
    {
      title: t("manage"),
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

  let keyForDelete: number[] = [];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      keyForDelete = selectedRowKeys;
    },
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    // console.log(e.target.checked);
    if (e.target.checked === true) {
      keyForDelete = userData.map((item, index) => {
        return item.key;
      });
    } else {
      keyForDelete = [];
    }
  };

  return (
    <div className="tableContainer">
      <div className="deleteButton">
        <Checkbox onChange={onCheckAllChange}>{t("select all")}</Checkbox>
        <Popconfirm
          title={t("Sure to delete?")}
          onConfirm={() => {
            if (keyForDelete.length > 0) {
              dispatch(deleteUser(keyForDelete));
              message.success(t("You have deleted some profile successfully."));
            } else {
              message.error(t("You did not select any row."));
            }
          }}
        >
          <Button>{t("delete user data")}</Button>
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
              getPhoneNumber(index);
              getIdNumber(index);
              dispatch(setStatus(value));
            },
          };
        }}
      />
    </div>
  );
}

export default FormTable;

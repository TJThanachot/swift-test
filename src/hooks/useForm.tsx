import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../slices/userSlice";
import { setStatus } from "../slices/statusSlice";
import { setUserIdNumber } from "../slices/userIdNumberSlice";
import { setUserPhoneNumber } from "../slices/userPhoneNumberSlice";
import { Form, message } from "antd";
import { useTranslation } from "react-i18next";
function useForm() {
  const { t, i18n } = useTranslation();
  // redux state ---------------------------------------------------------
  const userData = useSelector((state: any) => {
    return state.userDataList;
  });
  const status = useSelector((state: any) => {
    return state.status;
  });
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onReset = () => {
    const value: any = { index: null, boolean: false };
    dispatch(setStatus(value));
    form.resetFields();
  };

  const onFinish = (values: any) => {
    values.fullName = `${values.firstname} ${values.lastname}`;
    values.idNumber = `${values.idNumberInput1}-${values.idNumberInput2}-${values.idNumberInput3}-${values.idNumberInput4}-${values.idNumberInput5}`;
    values.phone = `${values.phoneInput1}-${values.phoneInput2}`;
    values.dateOfBirth = String(values.dateOfBirth.$d);

    // delete key values that is not necessary ------------------------------------
    for (let i = 1; i <= 5; i++) {
      const key = `idNumberInput${i}`;
      const key2 = `phoneInput${i}`;
      if (values.hasOwnProperty(key)) {
        delete values[key];
      }
      if (values.hasOwnProperty(key2)) {
        delete values[key2];
      }
    }
    if (status.boolean === true) {
      const newValues: any = { values, index: status.index };
      dispatch(updateUser(newValues));
      message.success(t("You have updated your profile successfully."));
    } else {
      dispatch(addUser(values));
      message.success(t("You have created your profile successfully."));
    }
    onReset();
  };

  const getIdNumber = (index: any) => {
    const result = userData[index].idNumber.split("-");
    dispatch(setUserIdNumber(result));
  };

  const getPhoneNumber = (index: any) => {
    const result = userData[index].phone.split("-");
    dispatch(setUserPhoneNumber(result));
  };

  return { onReset, onFinish, getIdNumber, getPhoneNumber };
}

export default useForm;

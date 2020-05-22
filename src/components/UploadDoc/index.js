import React, { useState, useEffect, useRef, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Select, Row, Col, Button, Modal,InputNumber } from 'antd';
import FileUpload from "../FileUpload";

import "./style.less";
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

const Index = (props) => {
    const refUpload = useRef();
    const { getFieldDecorator } = props.form,
        { data } = props;
    console.log(data);
    const ERR_FORM_MESSAGE = 'Require';
    const dataa = [
        { title: 'abc' },
        { title: 'abc' },
        { title: 'abc' }
    ]
    const filterOptionByList = (data) => {
        let result = data.map((item, index) => (
            <Option key={index} value={item.title}>
                {item.title}
            </Option>
        ));
        return result;
    };
    const _onSubmit = (e) => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            console.log(values);
        });
    };
    const _onCancel = () => {
        props.form.resetFields();
        refUpload.current._onResetFile();
    };



    return (
        <Form layout="inline" className="upload_docs">
            <Row>
                <Col span={16}>
                <FormItem label="Tiêu đề">
                        {getFieldDecorator('title	', {
                            rules: [{ required: true, message: ERR_FORM_MESSAGE }],
                            initialValue: ''
                        })(<Input
                            placeholder="Tiêu đề"
                        />)}
                    </FormItem>
                    <Form.Item label="Danh mục" className="gx-w-100">
                        {getFieldDecorator('CategoryDocumentId')(
                            <Select
                                className="gx-w-100"
                                showSearch
                                placeholder="Chọn danh mục"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {filterOptionByList(dataa)}
                            </Select>
                        )}
                    </Form.Item>
                    <FormItem label="Nội dung tốm tắt">
                        {getFieldDecorator('Content_trailer	', {
                            rules: [{ required: true, message: ERR_FORM_MESSAGE }],
                            initialValue: ''
                        })(<TextArea
                            placeholder="Nội dung tài liệu"
                        />)}
                    </FormItem>
                </Col>
                <Col span={8}>
                    <FormItem label="Hình ảnh">
                        {getFieldDecorator('image', {
                            rules: [{ required: true, message: ERR_FORM_MESSAGE }],
                            initialValue: ''
                        })(<FileUpload actCreate={true} typeFileUpload="application/pdf" />)}
                    </FormItem>
                    <FormItem label="File">
                        {getFieldDecorator('file', {
                            rules: [{ required: true, message: ERR_FORM_MESSAGE }],
                            initialValue: ''
                        })(<FileUpload actCreate={true} typeFileUpload="application/pdf" />)}
                    </FormItem>
                </Col>
            </Row>
        </Form>
    );
};
Index.propTypes = {};
Index.defaultProps = {
    data: {}
};
export default withRouter(Form.create()(Index));

import { useTable } from 'react-table'
import React from 'react';
import "antd/dist/antd.css";
import { Table, Modal, Space, Button } from 'antd';
import EmployeeService from '../../services/EmpolyeeService';
import { Select } from 'antd';
const { Option } = Select;
class EmployeesTable extends React.Component{ 
    state ={
        employees: [],
        visible: false
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

    componentDidMount() {
        EmployeeService.getEmployees().then((response)=>{
            this.setState({
              employees: response.data
            });
          
       }
       );  
      }

      render() {
      const columns = [
        {
          title: 'Full Name',
          dataIndex: 'fullName',
          key: 'id',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phoneNumber',
          key: 'id',
        },

            ];
    
          
            return(
                <>
                    <Table dataSource={this.state.employees} columns={columns} />;
                    <Button type="primary" onClick={this.showModal}>
          Open Modal with customized button props
        </Button>
        <Modal
          title="Assign Job"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
    <Select defaultValue='Mark Keeling' style={{ width: 120 }} >
      <Option value= 'Mark Keeling'></Option>
      <Option value="Destiny Hays">Destiny Hays</Option>

      <Option value="Lorcan Harrington">Lorcan Harrington</Option>
    </Select>
        </Modal>
                </>
            );  
        };
}
export default EmployeesTable;


 
import React, { Component } from 'react';
import {Layout, message, Table, Button, Row, Popconfirm} from 'antd'
import { getCommitList, deleteCommit, exportList } from '../../util/axios';

const { Content } = Layout
class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas:[]
         };
    }

    componentDidMount() {
        this.updateList();
    }

    updateList = () => {
        return getCommitList().then(res =>{
            if(res.status==200){
                this.setState({datas: res.data})
            }else{
                console.error(res.data);
                message.error('获取列表信息失败')
            }
        })
    }
    
    confirmDelete = (record) => {
        return this.doDelete([record._id]).then(this.updateList)
    }

    confirmRemoveAll = () => {
        return this.doDelete(this.state.datas.map(d => d._id)).then(this.updateList)
    }

    doDelete = (ids) => {
        return deleteCommit(ids).then(res=>{
            if(res.status == 200){
                message.info('操作成功')   
            }else{
                console.error(res.data)
                message.error("操作失败！")
            }
        })
    }

    exportList = () => {
        return exportList().then(res =>{
            console.log(res)
            // // let blob = new Blob([res.data]);
            // let a = document.createElement('a')
            // a.download = '导出数据.xlsx'
            // a.href = 'http://localhost:8888/public/output.xlsx'
            // a.click();
            message.info('导出成功!，需要手动从服务器拷贝')
        })
    }

    render() {
        const colum = [{
            title: '序号',
            key: 'index',
            width: 60,
            render: (v, record, i)=>{
                return <span>{i+1}</span>
            }
        },{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 150
        },{
            title: '电话',
            dataIndex: 'phone',
            key: 'phone',
            width: 150
        },{
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
            width: 200
        },{
            title: '留言内容',
            dataIndex: 'message',
            key: 'message',
        },{
            title: '创建时间',
            align: 'center',
            dataIndex: 'time',
            key: 'time',
            width: 200
        },{
            title: '操作',
            key:'operation',
            fixed: 'right',
            width: 150,
            render: (v, record) => {
                return <Popconfirm placement="leftTop" title='确认删除？' onConfirm={()=>this.confirmDelete(record)} okText="Yes" cancelText="No">
                    <Button size='small' type='danger'>删除</Button>
              </Popconfirm>
            }
        }]
        return <Layout className="admin-main">
            <Content className="admin-content">
                <Row>
                    <Button onClick={this.exportList} type="primary" disabled={true } style={{ marginBottom: 16 }}>导出全部</Button>
                     <Popconfirm onConfirm={this.confirmRemoveAll} title="确定要删除吗？删除后将无法恢复哦" okText="确定" cancelText="取消"> <Button type="danger" style={{ marginBottom: 16 }}>删除全部</Button></Popconfirm>  
                </Row>
                <Table
                    className="amind-table" 
                    dataSource={this.state.datas}
                    columns={colum}
                ></Table>
            </Content>
        </Layout>
    }
}

export default index;
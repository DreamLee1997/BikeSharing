import React,{Component} from 'react'
import { Card,Form,Input,Button,message,Icon,Checkbox} from 'antd'
const FormItem = Form.Item;

class FormLogin extends Component{

    handleSubmit = () =>{
        //getFieldsValue是object对象，form的一个方法，用于获取表单下所有的值
        let userInfo = this.props.form.getFieldsValue();
        //validateFields方法是校验信息是否符合要求，校验下是一个循环，用()=>
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName}恭喜你，登陆成功!当前密码为：${userInfo.userPwd}`)
            }
        })
    }

    render (){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop:10}}>
                    <Form layout="horizontal" style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须为字母或数字',
                                        }
                                    ]
                                })(
                                <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd',{
                                initialValue:'',
                                rules:[]
                            })(
                                <Input prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                                )
                            }

                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox >记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>

                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

//关键，一定要通过Form.create()创建表单，将组件传递进去，这样才能识别 getFieldDecorator
export default Form.create()(FormLogin);
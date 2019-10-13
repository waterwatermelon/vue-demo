'use strict';

module.exports = (app)=>{
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const model = app.model.define('user',{
        id:{
            type:INTEGER,
            primaryKey:true,//默认不能为空
            autoIncrement:true, // 在插入一个新值之后，能返回由数据库生成的该字段的新值
        },
        account:{
           type:STRING(30),
           allowNull:false,
        // 取值唯一
        },
        password:{ 
            type:STRING(30),
            allowNull:false
        },
        statusId:{
            type:INTEGER,
            // allowNull:false
        },
        ctime:{
            type:DATE,           
        },
        lastLoginTime:{
            type:DATE,           

        },
        groupId:{
            type:INTEGER
        },
        remark:{
            type:STRING
        }
    },{
        // 自定义关联表名，否则会自动管理models
        tableName:"tb_user",
        // 是否需要添加 created_at,updated_at字段
        timestamps:false
    })
    // 模型关联 User实例将拥有getGroup(),setGroup,createGroup方法
    model.associate = function(){ 
    }
    return model;
} 
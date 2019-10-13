'use strict';

const {Controller} = require('egg');

class UserController extends Controller {
  async login() {
    const { ctx } = this; 
    const req = ctx.request.body;
    let body,result;
    let account,password;
    account = req.account;
    password = req.password;
    body ={};
    result = await ctx.service.user.login(account,password);
    body.success = true;
    body.data = {};
    body.message = '';
    ctx.body = body;
  }
}

module.exports = UserController;

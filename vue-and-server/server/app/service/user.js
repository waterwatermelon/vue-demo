'use strict';

const {Controller: Service} = require('egg');

class UserService extends Service {
  async login(account,password) {
    const {ctx} = this;
    let user ;
    user = await ctx.model.User.findOne({where:{account}});
    if(user.password === password){
        return true;
    }
  }
}

module.exports = UserService;

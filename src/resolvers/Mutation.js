const bcrypt = require('bcryptjs')
async function user(parent,args,context,info)
{
    console.log('user mutation')
    const phone = await context.prisma.phone(args.phone)
    const password = await bcrypt.hash(args.password,10)
    const code = await bcrypt.hash(args.code,10)
    const user = await context.prisma.createUser({...args,password})
    return user
}

async function userSetPhone(parent,args,context,info)
{
    console.log(args)
    const phone = await context.prisma.updateUser({data:{phone},where:{id:args.user}})
    return user
} 

async function  userSetCode(parent,args,context,info)
{
    console.log('user SetPassword mutation')
    let code = await bcrypt.hash(args.code,10)  
    const user = await context.prisma.updateUser({data:{code},where:{id:args.user}})
    return user
} 

async function userSetPassword(parent,args,context,info)
{
    console.log('user SetPassword mutation')
    let password = await bcrypt.hash(args.password,10)  
    const user = await context.prisma.updateUser({data:{password},where:{id:args.user}})
    return user
}
module.exports={
 user,
 userSetPhone,
 userSetCode,
 userSetPassword, 
}
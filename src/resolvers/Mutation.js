
async function userSetPhone(parent,args,context,info)
{
    console.log(args)
    const phone = await context.prisma.userSetPhone({...args})
    return phone
} 

async function  userSetCode(parent,args,context,info)
{
    console.log(args)
    const code = await bcrypt.userSetCode({...args})
   return code
} 
async function userSetPassword (parent,args,context,info)
{
    console.log(args)
    const password = await bcrypt.userSetPassword({...args})
   return password
} 

module.exports={
 userSetPhone,
 userSetCode,
 userSetPassword 
}
import { User, ROLES } from "./01-enums"

const myUser: User = {
  username: 'Agustin',
  role: ROLES.ADMIN
}

//rest params
//rest params allows us recive params as an array
const checkPermissions = (...roles: string[]) => {
  if(roles.includes(myUser.role)) {
    console.log('Authorized')
    return true
  }
  console.log('unathorized')
  return false
}

checkPermissions(ROLES.SELLER)
checkPermissions(ROLES.CUSTOMER)
checkPermissions(ROLES.CUSTOMER, ROLES.SELLER)
checkPermissions(ROLES.ADMIN)
checkPermissions(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
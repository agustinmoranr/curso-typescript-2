import { Camera, CameraResultType, CameraDirection } from "@capacitor/camera"

export enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER'
}

export type User = {
  username: string;
  role: ROLES;
}

const userAgustin: User = {
  username: 'Agustin',
  role: ROLES.ADMIN
}

console.log(userAgustin)

//capacitor uses typescript and exposes enums
const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
    direction: CameraDirection.Front
  });
}

 
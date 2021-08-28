import { drawerStore } from "@common/drawer"

const open = drawerStore.open, close = drawerStore.close, get = drawerStore.get

class DrawerService {
  DrawerTest = 'DrawerTest';

  openDrawerTest(data?: any) {
    data ? open('DrawerTest', data) : open('DrawerTest')
  }

  closeDrawerTest() {
    close('DrawerTest')
  }

  getDrawerTest<T>(): { visible: boolean; data: T; name: string } {
    return get('DrawerTest') as any
  }
}

export const drawerService = new DrawerService()

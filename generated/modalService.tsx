import { modalStore } from "@common/modal"

const open = modalStore.open, close = modalStore.close, get = modalStore.get

class ModalService {
  ModalAddProject = 'ModalAddProject';
  ModalAddRowWithData = 'ModalAddRowWithData';
  ModalAddTeam = 'ModalAddTeam';
  ModalAddVersion = 'ModalAddVersion';
  ModalEditLongText = 'ModalEditLongText';
  ModalFormTable = 'ModalFormTable';
  ModalSign = 'ModalSign';
  ModalTest = 'ModalTest';

  openModalAddProject(data?: any) {
    data ? open('ModalAddProject', data) : open('ModalAddProject')
  }

  closeModalAddProject() {
    close('ModalAddProject')
  }

  getModalAddProject<T>(): { visible: boolean; data: T; name: string } {
    return get('ModalAddProject') as any
  }

  openModalAddRowWithData(data?: any) {
    data ? open('ModalAddRowWithData', data) : open('ModalAddRowWithData')
  }

  closeModalAddRowWithData() {
    close('ModalAddRowWithData')
  }

  getModalAddRowWithData<T>(): { visible: boolean; data: T; name: string } {
    return get('ModalAddRowWithData') as any
  }

  openModalAddTeam(data?: any) {
    data ? open('ModalAddTeam', data) : open('ModalAddTeam')
  }

  closeModalAddTeam() {
    close('ModalAddTeam')
  }

  getModalAddTeam<T>(): { visible: boolean; data: T; name: string } {
    return get('ModalAddTeam') as any
  }

  openModalAddVersion(data?: any) {
    data ? open('ModalAddVersion', data) : open('ModalAddVersion')
  }

  closeModalAddVersion() {
    close('ModalAddVersion')
  }

  getModalAddVersion<T>(): { visible: boolean; data: T; name: string } {
    return get('ModalAddVersion') as any
  }

  openModalEditLongText(data?: any) {
    data ? open('ModalEditLongText', data) : open('ModalEditLongText')
  }

  closeModalEditLongText() {
    close('ModalEditLongText')
  }

  getModalEditLongText<T>(): { visible: boolean; data: T; name: string } {
    return get('ModalEditLongText') as any
  }

  openModalFormTable(data?: any) {
    data ? open('ModalFormTable', data) : open('ModalFormTable')
  }

  closeModalFormTable() {
    close('ModalFormTable')
  }

  getModalFormTable<T>(): { visible: boolean; data: T; name: string } {
    return get('ModalFormTable') as any
  }

  openModalSign(data?: any) {
    data ? open('ModalSign', data) : open('ModalSign')
  }

  closeModalSign() {
    close('ModalSign')
  }

  getModalSign<T>(): { visible: boolean; data: T; name: string } {
    return get('ModalSign') as any
  }

  openModalTest(data?: any) {
    data ? open('ModalTest', data) : open('ModalTest')
  }

  closeModalTest() {
    close('ModalTest')
  }

  getModalTest<T>(): { visible: boolean; data: T; name: string } {
    return get('ModalTest') as any
  }
}

export const modalService = new ModalService()

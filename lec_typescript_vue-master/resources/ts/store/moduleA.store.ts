import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'customModuleANamespace' })
export default class ModuleA extends VuexModule {
  data = 'moduleA'

  @Mutation
  setData (data: string) {
    this.data = data
  }

  @Action
  updateData (data: string) {
    this.context.commit('setData', data)
  }

  get moduleAData () {
    return this.data
  }
}

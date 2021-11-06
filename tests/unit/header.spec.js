import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header'
import Vue from 'vue'

describe('probando título y color', () => {
  it('renders props.title when passed', () => {
    const title = 'Título'
    const wrapper = shallowMount(Header, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
  it('renders props.color when passed', () => {
    const headerData = mountComponentWithProps(Header, { color: 'red' })
    const styleData = headerData._vnode.children[0].elm.style.color
    expect(styleData).toEqual('red')
  })
})
  function mountComponentWithProps (Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({
      propsData
    }).$mount()
    return vm
  }